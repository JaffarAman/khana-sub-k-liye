import React from 'react'
import { useHistory } from 'react-router-dom'

const Header = () => {
    const history = useHistory()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a className="navbar-brand" href="#">Navbar</a> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active" onClick={()=>{
          history.push("/dashboard")
      }}>
        <a className="nav-link" href="#">Dashboard <span className="sr-only">(current)</span></a>
      </li>
    
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
        Branch Manager
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#" onClick={()=>{
          history.push("/createmanager")
      }}>Create Manager</a>
          <a className="dropdown-item" href="#">Manger List</a>
       
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          Request
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#" onClick={()=>{
              history.push("/requesttab")
          }}>PENDING</a>
          <a className="dropdown-item" onClick={()=>{
              history.push("/acceptreq")
          }} href="#">Accept</a>
          {/* <div className="dropdown-divider"></div> */}
          <a className="dropdown-item" onClick={()=>{
              history.push("/rejectreq")
          }} href="#">Rejected</a>
        </div>
      </li>
   
    </ul>
  
  </div>
</nav>
    )
}

export default Header
