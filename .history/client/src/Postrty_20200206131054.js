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
        fetch('')
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
                
            </div>
        )
    }
}

export default Postrty
