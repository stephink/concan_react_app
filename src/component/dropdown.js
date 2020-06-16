import React, { Component } from 'react';


class Dropdown extends Component {
    state={
        list1:[ "Tony",
        "Stark",
        "Hello",
        "World",
        "Tom",
        "Jerry"],
    };

    render() { 
        return (
            <div class="btn-group">

                <select id={this.props.id} class="btn btn-secondary btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {this.state.list1.map(list1=>(
                          <option key={list1} value={list1}>
                              {list1}
                          </option>
                      ))}

                 
                </select> 
            
           </div>
          );
    }
}
 
export default Dropdown;