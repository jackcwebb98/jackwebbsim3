import React from 'react'
import {Link, } from 'react-router-dom'
import {connect} from 'react-redux'
import './nav.css'

function Nav(props){
   if(props.location.pathname !== '/'){ 
    return(
      <div className="navbar">
        <h2>{props.username}</h2>
        <img src={props.profile_image} alt='profile pic'/>
        <div>
          <Link to='/dashboard'><button className="navbutton">Home</button></Link>
          <Link to='/post/:postid'><button>New Post</button></Link>
          <Link to='/'><button>Logout</button></Link>
        </div>
      </div>
    )
  } else {
    return null
  }
  // console.log(this.state.props)
}

const mapStateToProps = (reduxState) => {
  return{
    username: reduxState.username,
    profile_image: reduxState.profile_image
  }
}

  export default connect(mapStateToProps)(Nav)