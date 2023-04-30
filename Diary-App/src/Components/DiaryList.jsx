import { Link } from "react-router-dom"
import emoji from "emoji-dictionary";
import PropTypes from "prop-types"
import { useEffect, useState } from "react";


function DiaryList({d, username}) {
    const smile = emoji.getUnicode("smile")
    const sad = emoji.getUnicode("cry")
    const [bg, setBg] = useState("");

    useEffect(() => {
        if (d.mood === "happy") {
            setBg("rgba(114, 94, 6, 0.623)")
        } else{
            setBg("rgba(6, 35, 114, 0.623)")
        }
    }, [d.mood])

  return (
    <Link className="link"to={`/update/${d._id}/${username}`}>
        <div className="Dlist" style={{backgroundColor: bg}}>
            <div className="date">{d.date}</div>
            <div className="right">
                <div className="Dtitle">
                    <div className="title">{d.title}</div>
                    <div className="emoji">{
                        d.mood === "happy" ? smile : sad 
                    }</div>
                </div>
                <div className="Ddescrip">{d.description}</div>
            </div>
        </div>
    </Link>
  )
}

DiaryList.propTypes = {
    d: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired
}

export default DiaryList