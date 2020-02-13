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
    fetch('/api/getList')
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
    const { list } = this.state;
    list.map(iti=>
      {
      return <div>{iti}</div>
      })

    return (
      <div className="App">
          {list}
      </div>
    );
  }
}

export default List;
