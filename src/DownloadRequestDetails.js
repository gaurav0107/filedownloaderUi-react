import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './Components/AppNavbar';
import Download from './Download';
import { Link } from 'react-router-dom';
import config from 'react-global-configuration';

class DownloadRequestList extends Component {

    constructor(props) {
        super(props);
        this.state = {downloadRequestList: [], isLoading: true};
      }
    
      componentDidMount() {
        this.setState({isLoading: true});
    
        fetch(config.get('API_BASE_URL')+'/api/v1/downloadRequest/')
          .then(response => response.json())
          .then(data => this.setState({downloadRequestList: data, isLoading: false}));
      }

      
  render() {
    const {downloadRequestList, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const downloadList = downloadRequestList.map(downloadRequest => {
      return (
        <tr key={downloadRequest.requestId}>
          <td style={{whiteSpace: 'nowrap'}}> {downloadRequest.requestId}</td>
          <td style={{whiteSpace: 'nowrap'}}> {downloadRequest.requestTime}</td>
          <td style={{whiteSpace: 'nowrap'}}> {downloadRequest.totalFiles}</td>
          <td style={{whiteSpace: 'nowrap'}}> {downloadRequest.successfulDownloads}</td>
          <td style={{whiteSpace: 'nowrap'}}> {downloadRequest.failedDownloads}</td>
          <td style={{whiteSpace: 'nowrap'}}> {(downloadRequest.successfulDownloads/downloadRequest.totalFiles)*100}</td>
          <td>
            <Button size="sm" color="primary" tag={Link} to={"/downloadRequest/" + downloadRequest.requestId}>View</Button>
          </td>
        </tr>
      )
    });

    return (
      <div>
        <AppNavbar/>
        <Download/>
        <Container fluid>
          <h3>Download Request List</h3>
          <Table className="mt-4">
            <thead>
            <tr>
              <th width="10%">Request Id</th>
              <th width="10%">Request Time</th>
              <th width="10%">Total Files</th>
              <th width="10%">Download Success</th>
              <th width="10%">Download Failed</th>
              <th width="10%">Success %</th>
              <th width="10%">View Files</th>
            </tr>
            </thead>
            <tbody>
            {downloadList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default DownloadRequestList;