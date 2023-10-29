import React from 'react'

import './Title.css';

import dataV2 from './d10000.json';

import { Table, Tag, Tabs, PageHeader } from "antd";

const columns = [{
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: 'Effect',
    dataIndex: 'effect',
    key: 'effect',
  }];
  

function FullTableV2() {
  return (
    <Table dataSource={dataV2} columns={columns} size="middle"/>
    // <div className="FullTableV2">
    //     <table align="center">
    //         <thead>
    //             <tr>
    //             <th>Id</th>
    //             <th>Effect</th>
                
    //             </tr>
    //         </thead>

    //         <thead>
    //             {dataV2.map(el => {
    //             return (
    //                 <tr key={el.id}>
    //                 <td>{el.id}</td>
                    
    //                 <td>{el.effect}</td>
                    
    //                 </tr>
    //             );
    //             })}
    //         </thead>
    //     </table>
    //</div>
   
  )
}

export default FullTableV2