import logo from './logo.svg';
import './App.css';

import { Table, Tag, Tabs, PageHeader } from "antd";
import { Helmet } from 'react-helmet'

import { Container, Grid, Header, List } from "semantic-ui-react";

// import {Tab,Tabs} from 'react-bootstrap';


import Title from './Title';
import Events from './Events';
import FullTableV1 from './FullTableV1';
import FullTableV2 from './FullTableV2';

const { TabPane } = Tabs;
const TITLE = 'D Ten Thousand'

function App() {
  return (
    <div className="App" class="">
      <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      <Title/>
      

      {/* <div >
      <h4>React-Bootstrap Tab Component</h4>
      <Tabs defaultActiveKey="second">
        <Tab eventKey="first" title="Dashbaord">
          
        </Tab>
        <Tab eventKey="second" title="Setting">
          Hii, I am 2nd tab content
        </Tab>
        <Tab eventKey="third" title="Aboutus">
          Hii, I am 3rd tab content
        </Tab>
      </Tabs>
    </div> */}
    <Tabs defaultActiveKey="1" centered="true" >
            <TabPane tab="Roll" key="1">
             
              <Events/>
            </TabPane>
            <TabPane tab="Full Table (Version 1)" key="2">
               <FullTableV1/>
              </TabPane>
            <TabPane tab="Full Table (Version 2)" key="3">
               <FullTableV2/>
              </TabPane>
      </Tabs>
      
    </div>
  );
}

export default App;
