import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import Download from './Download';
import { Link } from 'react-router-dom';

class DownloadRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {downloadRequest: null, isLoading: true};
      }

    render(){
      return
        <tr key={props.requestId}>
          <td style={{whiteSpace: 'nowrap'}}> {props.requestId}</td>
          <td style={{whiteSpace: 'nowrap'}}> {props.requestTime}</td>
          <td style={{whiteSpace: 'nowrap'}}> {props.totalFiles}</td>
          <td style={{whiteSpace: 'nowrap'}}> {props.successfulDownloads}</td>
          <td style={{whiteSpace: 'nowrap'}}> {props.failedDownloads}</td>
          <td style={{whiteSpace: 'nowrap'}}> {(props.successfulDownloads/downloadRequest.totalFiles)*100}</td>
          <td>
            <Button size="sm" color="primary" tag={Link} to={"/downloadRequest/" + downloadRequest.requestId}>View</Button>
          </td>
        </tr>
    };
}

