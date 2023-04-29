import "./AddingPage.css"
import { IoMdClose } from "react-icons/io"
import emoji from "emoji-dictionary";
import { AiOutlineCalendar } from "react-icons/ai"
import { useState } from "react";
import { saveDiary } from "../../utils/DiaryUtils";
import { useNavigate } from "react-router-dom";

function AddingPage() {
    const dateObj = new Date();

    const navigate = useNavigate()

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [mood, setMood] = useState("")

    const smile = emoji.getUnicode("smile")
    const sad = emoji.getUnicode("cry")

    const handleAdd = (e) => {
        //object to be saved in database
        const diary = {
            title: title,
            description: description,
            date: dateObj.toISOString().replace('-', '/').split('T')[0].replace('-', '/'),
            mood: mood
        }
        e.preventDefault();
        //check if all fields are field
        if (Object.values(diary)) {
            saveDiary(diary)
            navigate("/home")
        } else {
            navigate("/save")
        }
    }

    const handleMood = (e) => {
        //setting the mood object
        if (e.target.value === "happy") {
            setMood("happy")
        } else {
            setMood("sad")
        }
    }

    const returnHome = (e) => {
        //redirect user to home page when close in clicked
        e.preventDefault();
        navigate("/home")
    }

    return (
        <div className="addPg">
            <div className="Addheader">
                <div className="closeBtn">
                    <span onClick={returnHome}><IoMdClose color="#fff" size={30}/></span>
                </div>
                <div className="write">Write Diary</div>
                <div className="emoji">
                    <>
                    <div className="mood">Choose mood</div>
                    {   
                    <>
                       <div value="happy" className="happy" onClick={handleMood}>{smile}</div>
                       <div value="sad" className="sad" onClick={handleMood}>{sad}</div>
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
                <input placeholder="Enter title..." type="text" className="newTitle" onChange={(e) => setTitle(e.target.value)} value={title}/>
            </div>
            <div className="addDesc">
                <input placeholder="Write experience...." type="text" className="newDesc" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className="addbtn">
                <button type="submit" className="btn" onClick={handleAdd}>Save</button>
            </div>
        </div>
    )
}

export default AddingPage