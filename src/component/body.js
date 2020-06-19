import React, { Component } from 'react';
import Dropdown from './dropdown';
import axios from 'axios';


class Body extends Component {

  constructor(props) {
    
    super(props);
    
    

    this.submit = this.submit.bind(this);
  }
 

  submit() {
    let output1 = document.querySelector('#fname');
    let fname = output1.value;
    let output2 = document.querySelector('#lname');
    let lname = output2.value;

    document.querySelector('#fnamespan').textContent = fname;
    document.querySelector('#lnamespan').textContent = lname;
    document.querySelector('#fullnamespan').textContent = fname + " " + lname;

    axios.post('http://localhost:4444/concat/new',{
    
      firstName:fname,
      lastName:lname
    
        }
    )
    .then(response=>{
  
       console.log(response.data);
       document.querySelector('#response').textContent =JSON.stringify(response.data);
       
       }
      )
    .catch(error => alert(error))

  }
  render() {
    return (



      <div class="card" style={{ 'marginTop': '50px', 'height': '40rem', 'marginBottom': '80px', }} >
        <div class="card-header text-white bg-dark mb-3" align="center" >
          <div>
            <h4>concat</h4>
          </div>

        </div>


        <div class="card-body ">
          <form>
            <div class="row">
              <div class="col-md-6" align="right">
                <Dropdown id="fname" onclick={this.change} />

              </div>
              <div class="col-md-6">
                <Dropdown id="lname" />

              </div>
            </div>
            <div class="row" style={{ 'marginTop': '50px' }} >
              <div class="col-md-12" align="center">
                <button type="button" class="btn btn-warning " onClick={this.submit}>Submit</button>
              </div>
            </div>
          </form>
          <div class="raw">
            <div class="raw" align="center" style={{ 'marginTop': '50px' }}>
              <h3 style={{ 'text-decoration': 'underline' }}>Result</h3>
            </div>
            <div class="raw">
              <div class="row" style={{ 'marginTop': '20px' }}>
                <div class="col-md-6" align="right">
                  <span>First name :</span>
                </div>
                <div class="col-md-6">
                  <span id="fnamespan"></span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6" align="right">
                  <span>Last name :</span>
                </div>
                <div class="col-md-6">
                  <span id="lnamespan"></span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6" align="right">
                  <span>Full name :</span>
                </div>
                <div class="col-md-6">
                  <span id="fullnamespan"></span>
                </div>
              </div>
              
            </div>
          </div>
          <div class="raw" align="center" style={{ 'marginTop': '20px' }}>

          <span id="response"></span>

          </div>
          
                
        </div>

      </div>

    );
  }
}

export default Body;
