//DownloadRequest.js
import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import Download from './Download';
import { Link } from 'react-router-dom';
import config from 'react-global-configuration';
import DownloadFileRow from './DownloadFileRow';
import DownloadFileHeaderRow from './DownloadFileHeaderRow';
import AppNavbar from './AppNavbar';

class DownloadRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {downloadRequest: null, isLoading: true};
      }

    async componentDidMount() {
      const requestId = this.props.match.params.uuid;
      fetch(config.get('API_BASE_URL')+'/api/v1/downloadRequest/'+requestId,{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
      .then(response => response.json())
      .then(data => this.setState({downloadRequest: data, isLoading: false}));
    }

    render(){
      const {downloadRequest, isLoading} = this.state;
      const rows = [];
      const header = <DownloadFileHeaderRow/>;
      debugger
      if(downloadRequest && downloadRequest.downloadFiles)
        downloadRequest.downloadFiles.forEach((item, index) =>{
          rows.push(
            <DownloadFileRow item={item} key={item.requestId + index.toString()} />
          )
        })
      
      return(
           <div><AppNavbar/>
          
          <span> Getting Details for Request Id: {this.props.match.params.uuid}</span>
          <Table className="mt-4">
            <thead>
            {header}
            </thead>
            <tbody>
              {rows}
            </tbody>
          </Table>
          </div>
        )
    };
}


export default DownloadRequest;