import React, { Component } from 'react'

class Dashboard extends Component {
  constructor(props){
    super()
    this.state = {
      searchInput: ''
    }
  }

  handleInput = (val) => {
    this.setState({
      searchInput: val
    })
  }
  
  handleReset =() => {
    this.setState({
      searchInput: ''
    })
  }

  render(){
    return(
      <div>
        <input placeholder="search" onChange={e => this.handleInput(e.target.value)}/>
        <button onClick={() => console.log(this.state)}>Search</button>
        <button onClick={() => this.handlReset}>Reset</button>
        <h6>User Posts</h6><input type="checkbox"/>
      </div>
    )
  }
}

export default Dashboard