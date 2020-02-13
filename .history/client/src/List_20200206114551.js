import React, { Component } from 'react';

class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    console.log("componentdidmount called")
    fetch('https://api.randomuser.me')
    .then(res=>res.json())
    
    .then((result)=>
    {
      console.log("Result is ",result)
     
      this.setState(
        {
          list:result
        }
      )
    })
  }

  // Retrieves the list of items from the Express app
  

  render() {
   
    return (
      <div className="App">
  <h1>{this.state.list}</h1>
      </div>
    );
  }
}

export default List;
