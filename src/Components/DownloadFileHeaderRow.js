import React, { Component } from 'react';

class DownloadFileHeaderRow extends React.Component {
    render() {
      return (
        <tr>
              {/* <th width="10%">File Id</th> */}
              <th width="10%">File Name</th>
              <th width="10%">Protocol</th>
              <th width="10%">Download Start Time</th>
              <th width="10%">Download End Time</th>
              <th width="10%">File Size</th>
              <th width="10%">Download Speed</th>
              <th width="10%">Download State</th>
              <th width="10%">Get File</th>
         </tr>
      )
    }
  }
  export default DownloadFileHeaderRow;