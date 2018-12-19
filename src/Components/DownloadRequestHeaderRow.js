import React, { Component } from 'react';

class DownloadRequestHeaderRow extends React.Component {
    render() {
      return (
        <tr>
              <th width="10%">Request Id</th>
              <th width="10%">Request Time</th>
              <th width="10%">Total Files</th>
              <th width="10%">Download Success</th>
              <th width="10%">Download Failed</th>
              <th width="10%">Success %</th>
              <th width="10%">View Files</th>
         </tr>
      )
    }
  }
  export default DownloadRequestHeaderRow;