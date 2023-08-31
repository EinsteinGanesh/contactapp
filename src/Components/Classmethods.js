import React, { Component } from 'react'

export class Classmethods extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name : "Welcome",
           second : "Guys"
        }}
  render() {
    return (
        <div>
        <h1>{this.state.name} {this.state.second}</h1>
        <button onClick={this.click}>Click</button>
          
        </div>
      )
    }

    click=()=>{
        this.setState({second:"all"});
    }

    componentWillMount(){
        alert("thank you visit")
    }

    componentDidMount(){
        setTimeout(
            ()=>{
            this.setState({name:"thank you"})
            },4000
        )       
    }
    componentWillUpdate(){
        alert("Do u want to update")
    }
    
}

export default Classmethods
