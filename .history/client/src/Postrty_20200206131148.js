import React, { Component } from 'react'

class Postrty extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data:[]
                 
        }
    }
    componentDidMount()
    {
        fetch('http://localhost:5000/post')
        .then(res=>res.json())
        .then((result)=>
        {
            this.setState(
                {
                    data:result
                }
            )
        })
    }

    render() {
        return (
            <div>
    <h1>{this.state.data}</h1>
                
            </div>
        )
    }
}

export default Postrty
