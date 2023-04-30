import "./AddButton.css"
import { MdAdd } from "react-icons/md"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"


function AddButton({_id, username}) {

  return (
    <div className="add">
      <Link to={`/save/${_id}/${username}`}><div className="addBtn"><MdAdd className="Btn" color="#fff" size={45}/></div></Link>
    </div>
  )
}


AddButton.propTypes = {
  _id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}


export default AddButton