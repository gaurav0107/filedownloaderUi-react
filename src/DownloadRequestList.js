import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import Download from './Download';
///import downloadRequest from './DownloadRequest';
import DownloadRequestHeaderRow from './DownloadRequestHeaderRow.js';
import DownloadRequestItemRow from './DownloadRequestItemRow.js';
import { Link } from 'react-router-dom';

class DownloadRequestList extends Component {

    constructor(props) {
        super(props);
        this.state = {downloadRequestList: [], isLoading: true};
      }
    
      componentDidMount() {
        this.setState({isLoading: true});
    
        fetch('http://localhost:8080/api/v1/downloadRequest')
          .then(response => response.json())
          .then(data => this.setState({downloadRequestList: data, isLoading: false}));
      }

      
  render() {
    const {downloadRequestList, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }
    const header = <DownloadRequestHeaderRow/>;
    const rows = [];
    downloadRequestList.forEach((item, index) =>{
      rows.push(<DownloadRequestItemRow item={item} key={item.requestId + index.toString()} />)
    })

    return (
      <div>
        <AppNavbar/>
        <Download/>
        <Container fluid>
          <h3>Download Request List</h3>
          <Table className="mt-4">
            <thead>
            {header}
            </thead>
            <tbody>
              {rows}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default DownloadRequestList;