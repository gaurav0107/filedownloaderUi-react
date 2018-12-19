import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './Components/AppNavbar';
import Download from './Components/Download';
///import downloadRequest from './DownloadRequest';
import DownloadRequestHeaderRow from './Components/DownloadRequestHeaderRow.js';
import DownloadRequestItemRow from './Components/DownloadRequestItemRow.js';
import { Link } from 'react-router-dom';
import config from 'react-global-configuration';

class DownloadRequestList extends Component {

    constructor(props) {
        super(props);
        this.state = {downloadRequestList: [], isLoading: true};
        this.fetchAll = this.fetchAll.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
      }
    
      componentDidMount() {
        this.setState({isLoading: true});
        this.fetchAll();
        
      }

      handleRefresh(){
        this.fetchAll();
      }
      fetchAll(){
        fetch(config.get('API_BASE_URL')+'/api/v1/downloadRequest')
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
          <h3 className="float-left">Download Request List</h3>
          <div className="float-right">
            <Button color="success" onClick={this.handleRefresh} >Refresh</Button>
          </div>
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