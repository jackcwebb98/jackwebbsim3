import React, { Component } from 'react'
import axios from 'axios';
import {updateUser} from '../../ducks/reducer'
import {connect} from 'react-redux'

class Auth extends Component {
  constructor(props){
    super(props)
    this.state ={
      username: '',
      password: ''
    }
  
  }
  
  handleChange(prop, val){
    this.setState({
      [prop]: val
    })
  }

  register = async () => {
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    try{
      let res = await axios.post(`/auth/register`, user)
      this.props.updateUser(res.data)
      this.props.history.push('/dashboard')
    } catch (err){
      console.log(err)
    }
  }

  login = async () =>  {
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    try{
      let res = await axios.post(`/auth/login`, user)
      this.props.updateUser(res.data)
      this.props.history.push(`/dashboard`)

    } catch(err) {
      console.log(err)
      alert('incorrect username and password', err)
    }
  }

  render(){
    const { username, password } = this.state
    return(
      <div className="loginpage">
        <div className="loginbox">
          <input type="text" value={username} placeholder='username'onChange={e => this.handleChange('username', e.target.value)}/>
          <input type='password' placeholder='password' value={password} onChange={e => this.handleChange('password', e.target.value)} />
          <button onClick={this.register}>Register</button>
          <button onClick={this.login}>Login</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return{}
}

const mapDispatchToProps = {
  updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)