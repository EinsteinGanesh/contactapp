import React, { Component } from 'react'

export class Mathrandom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    change = ()=>{
        this.setState({count:Math.floor(Math.random()*6)});
    }
    
  render() {
    return (
      <div>
      {this.state.count}
        <button onClick={this.change}>Change</button>
        <button onClick={this.change}>Second BTN</button>
      </div>
    )
  }
}

export default Mathrandom
