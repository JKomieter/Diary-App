import "./AddButton.css"
import { MdAdd } from "react-icons/md"
import { Link } from "react-router-dom"
function AddButton() {
  return (
    <div className="add">
        <Link to={"/save"}><div className="addBtn"><MdAdd className="Btn" color="#fff" size={45}/></div></Link>
    </div>
  )
}

export default AddButton