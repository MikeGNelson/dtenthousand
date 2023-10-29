
import React from 'react'
import _ from 'lodash';


import dataV2 from './d10000Merged.json';
//import dataV1 from './d10000V1.json';
//import wildMagic from './wildMagic.json';

import './Title.css';

class Events extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isToggleOn: false,
        selectedValue: -1,
        selectedStart: 9999,
        selectedStop: -1,
        data: dataV2,
        slicedData: dataV2,
        displayedVersion: 2,
      };
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
      this.roll = this.roll.bind(this);
    }

    
    componentWillReceiveProps(nextProps) {
        this.setState({
            isToggleOn: nextProps.isToggleOn,
          selectedValue: nextProps.selectedValue,
          selectedStart: nextProps.selectedStart,
          selectedStop: nextProps.selectedStop,
          data: nextProps.data,
          slicedData: nextProps.slicedData,
          displayedVersion: nextProps.displayedVersion,
        });
        // this.roll();
      }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

    roll(){
        var value =Math.round(Math.random() *this.state.data.length);
        //value = 9999;
        //value = 4;
        console.log(value);
        var end = value + 6
        var start = value -1 -6;

        var sData = null;
        
        if(start <0)
        {
          sData = this.state.data.slice(this.state.data.length  -(0-start), this.state.data.length).concat( this.state.data.slice(0, end));
          //sData;
        }
        // if it goes out of array, end at the begining
        // eg. 
        // [].length-1 = 100 & end is 104 (sv = 98)
        // end now should be 4 for slice (92,4)
        if(this.state.data.length -1 < end)
        {
          end = end -this.state.data.length;
          sData = this.state.data.slice(start, this.state.data.length).concat( this.state.data.slice(0,end ));
          
        }

        if(sData == null)
        {
          sData = this.state.data.slice(start,end);
        }
        
        console.log(sData);

        this.setState({
            selectedValue: value,
            selectedStart: start,
            selectedStop: end,
            slicedData: sData,
          });
        
            
    }

    render() {
        return (
            <div >
                <div>
                {this.state.selectedValue != -1  &&
                <table align="center">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Roll (+/-)</th>
                    <th>Effect Version 2</th>
                    <th>Effect Version 1</th>
                    
                    </tr>
                </thead>

                <thead>
                    {this.state.slicedData.map((el,index) => {
                    return (
                        <tr className={this.state.selectedValue == parseInt(el.id) ? 'rolledValue' : null} key={el.id}>
                        <td>{el.id}</td>
                        <td>{ index -6   }</td>
                        <td>{el.effectV2}</td>
                        <td>{el.effectV1}</td>
                        
                        </tr>
                    );
                    })}
                </thead>
                </table>
                }
                    {/* {this.state.selectedValue -6 >=0 ? this.state.data[this.state.selectedValue -6].id + " : " + this.state.data[this.state.selectedValue -6].effect : '' }
                    {this.state.selectedValue -5 >=0 ? this.state.data[this.state.selectedValue -5].id + " : " + this.state.data[this.state.selectedValue -5].effect : '' }
                    {this.state.selectedValue -4 >=0 ? this.state.data[this.state.selectedValue -4].id + " : " + this.state.data[this.state.selectedValue -4].effect : '' }
                    {this.state.selectedValue -3 >=0 ? this.state.data[this.state.selectedValue -3].id + " : " + this.state.data[this.state.selectedValue -3].effect : '' }
                    {this.state.selectedValue -2 >=0 ? this.state.data[this.state.selectedValue -2].id + " : " + this.state.data[this.state.selectedValue -2].effect : '' }
                    {this.state.selectedValue -1 >=0 ? this.state.data[this.state.selectedValue -1].id + " : " + this.state.data[this.state.selectedValue -1].effect : '' }
                    {this.state.selectedValue >=0 ? <b>{this.state.data[this.state.selectedValue].id} + " : " + {this.state.data[this.state.selectedValue].effect}</b> : '' }
                    {this.state.selectedValue +1 <=this.state.data.length-1 ? this.state.data[this.state.selectedValue +1].id + " : " + this.state.data[this.state.selectedValue +1].effect : '' }
                    {this.state.selectedValue +2 <=this.state.data.length-1 ? this.state.data[this.state.selectedValue +2].id + " : " + this.state.data[this.state.selectedValue +2].effect : '' }
                    {this.state.selectedValue +3 <=this.state.data.length-1 ? this.state.data[this.state.selectedValue +3].id + " : " + this.state.data[this.state.selectedValue +3].effect : '' }
                    {this.state.selectedValue +4 <=this.state.data.length-1 ? this.state.data[this.state.selectedValue +4].id + " : " + this.state.data[this.state.selectedValue +4].effect : '' }
                    {this.state.selectedValue +5 <=this.state.data.length-1 ? this.state.data[this.state.selectedValue +5].id + " : " + this.state.data[this.state.selectedValue +5].effect : '' }
                    {this.state.selectedValue +6 <=this.state.data.length-1 ? this.state.data[this.state.selectedValue +6].id + " : " + this.state.data[this.state.selectedValue +6].effect : '' }
                     */}
                    
                
                </div>
                <button onClick={this.roll}>roll</button>
                
                    {/* <button onClick={this.handleClick} >Show Table</button> */}
                
                <div >
                {/* {this.state.isToggleOn  &&
                
                
                } */}
                </div>
                </div>
        
        )
        }
}

export default Events;
