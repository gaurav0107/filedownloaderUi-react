import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class DownloadRequestItemRow extends React.Component {
    render() {
      const { item } = this.props
      return (
       <tr key={item.key}>
          <td style={{whiteSpace: 'nowrap'}}> {item.requestId}</td>
          <td style={{whiteSpace: 'nowrap'}}> {item.requestTime}</td>
          <td style={{whiteSpace: 'nowrap'}}> {item.totalFiles}</td>
          <td style={{whiteSpace: 'nowrap'}}> {item.successfulDownloads}</td>
          <td style={{whiteSpace: 'nowrap'}}> {item.failedDownloads}</td>
          <td style={{whiteSpace: 'nowrap'}}> {((item.successfulDownloads/item.totalFiles)*100).toFixed(2)}</td>
          <td>
            <Button size="sm" color="primary" tag={Link} to={"/downloadRequest/" + item.requestId}>View Details</Button>
          </td>
        </tr>
      )
    }
  }

  export default DownloadRequestItemRow;