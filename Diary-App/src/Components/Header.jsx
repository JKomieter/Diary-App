import { Link } from "react-router-dom"
import "./Header.css"
import { BiMenuAltLeft } from "react-icons/bi"
import PropTypes from "prop-types"


function Header({username}) {
  return (
    <div className="header">
        <input type='checkbox' id='check'></input>
        <div className="menu">
            <label htmlFor="check" className="menuAlt">
              <BiMenuAltLeft size={45} color="#fff"/>
            </label>
        </div>
        <div className="searchBar">
            Welcome, {username} !
        </div>
        <div className="sideMenu">
          <div className="logout">
            <Link className="log" to="/login">Logout</Link>
          </div>
        </div>
    </div>
  )
}
Header.propTypes = {
  username: PropTypes.string.isRequired
}

export default Header