import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import config from 'react-global-configuration';

class DownloadFileRow extends React.Component {
    render() {
      const { item } = this.props
      const getFile = <Button size="sm" target="_blank" color="primary" href={config.get('API_BASE_URL')+"/api/v1/getFile/" + item.fileName}>Get File</Button>
      const fileNa = "NA"
      
      return (
       <tr key={item.destination}>
           {/* <td style={{whiteSpace: 'wrap'}}> {item.downloadFileId}</td> */}
           <td style={{whiteSpace: 'nowrap'}}> {item.fileName}</td>
           <td style={{whiteSpace: 'nowrap'}}> {item.protocol}</td>
           <td style={{whiteSpace: 'nowrap'}}> {item.downloadStartTime}</td>
           <td style={{whiteSpace: 'nowrap'}}> {item.downloadEndTime}</td>
           <td style={{whiteSpace: 'nowrap'}}> {item.fileSize/1000} Kb</td>
           <td style={{whiteSpace: 'nowrap'}}> {item.downloadSpeed/1000}Kb/s</td>
           <td style={{whiteSpace: 'nowrap'}}> {item.state}</td>
           <td>
             {item.state === "Complete" ? getFile:fileNa}
          </td>

        </tr>
      )
    }
  }

  export default DownloadFileRow;
