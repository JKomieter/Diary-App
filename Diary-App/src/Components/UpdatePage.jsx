import "./AddingPage.css"
import { IoMdClose } from "react-icons/io"
import emoji from "emoji-dictionary";
import { AiOutlineCalendar } from "react-icons/ai"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSpecificDiary, updateDairy } from "../../utils/DiaryUtils";

function UpdatePage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [mood, setMood] = useState("")

    const { _id, username } = useParams()

    const dateObj = new Date()
    const smile = emoji.getUnicode("smile")
    const sad = emoji.getUnicode("cry")

    const navigate = useNavigate()

    const returnHome = (e) => {
        //redirect user to home page when close in clicked
        e.preventDefault();
        navigate(`/home/${_id}`, 
        {state: {_id: _id, username: username}})
    }

    useEffect(() => {
        getSpecificDiary(_id, setDairy)
    }, [_id])

    const setDairy = (dairy) => {
        setTitle(dairy.title)
        setMood(dairy.mood)
        setDescription(dairy.description)
    }

    const handleMood = (e) => {
        //setting the mood object
        if (e.target.value === "happy") {
            setMood("happy")
        } else {
            setMood("sad")
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const diary = {
            title: title,
            mood: mood,
            description: description,
            date: dateObj.toISOString().replace('-', '/').split('T')[0].replace('-', '/'),
            _id: _id
        }
        updateDairy(diary)
        navigate(`/home/${_id}`, {
            state: {_id: _id, username: username}
        })
    }

  return (
    <div className="addPg">
            <div className="Addheader">
                <div className="closeBtn">
                    <span onClick={returnHome}><IoMdClose color="#fff" size={30}/></span>
                </div>
                <div className="write">Update Diary</div>
                <div className="emoji">
                    <>
                    <span className="mood">Choose mood</span>
                    {   
                    <>
                       <span value="happy" className="happy" onClick={handleMood}>{smile}</span>
                       <span value="sad" className="sad" onClick={handleMood}>{sad}</span>
                    </>
                    }
                    </>
                </div>
            </div>
            <div className="Adddate">
                <div><AiOutlineCalendar size={27} className="cal"/></div>
                <div>
                    {dateObj.toISOString().replace('-', '/').split('T')[0].replace('-', '/')}
                </div>
            </div>
            <div className="addTitle">
                <input type="text" className="newTitle" onChange={(e) => setTitle(e.target.value)} value={title}/>
            </div>
            <div className="addDesc">
                <input type="text" className="newDesc" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className="addbtn">
                <button type="submit" className="btn" onClick={handleUpdate}>Update</button>
            </div>
        </div>
  )
}

export default UpdatePage