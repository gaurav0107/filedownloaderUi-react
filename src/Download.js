import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

class Download extends Component {

    emptyItem = {
      urls: ''
    };
  
    constructor(props) {
      super(props);
      this.state = {
        item: this.emptyItem
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    async componentDidMount() {
    //   if (this.props.match.params.id !== 'new') {
    //     const group = await (await fetch(`/api/group/${this.props.match.params.id}`)).json();
    //     this.setState({item: group});
    //   }
    console.log("doing mount stuff");
    }
  
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }
  
    async handleSubmit(event) {
    //   event.preventDefault();
    //   const {item} = this.state;
  
    //   await fetch('http://localhost:8080/api/v1/downloadRequest', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(item),
    //   });
    //   this.props.history.push('/groups');

        event.preventDefault();
        const {item} = this.state;
        const data = {"downloadFiles":(item.urls.trim().replace(/\n/g, ",").trim().replace(/[ ,]+/g, ",").trim().split(","))};
        console.log(data);
        await fetch('http://localhost:8080/api/v1/downloadRequest',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
  
    render() {
      const {item} = this.state;
  
      return <div>
        <Container>
          <h2>File Downloader</h2>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="URL's">Urls</Label>
              <Input type="textarea" rows="5" cols="100" name="urls" id="downloadFiles" 
              value={item.urls || ''} onChange={this.handleChange} 
              placeholder="http://www.africau.edu/images/default/sample.pdf,sftp://test.rebex.net/readme.txt?user=demo&pass=password,ftp://test.rebex.net/readme.txt?user=demo&pass=password"/>
            </FormGroup>

           <FormGroup>
            <Button color="primary" type="submit">Save</Button>
          </FormGroup>

          </Form>
        </Container>
      </div>
    }
  }
  
  export default Download;
  
