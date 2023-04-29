import "./Diaries.css"
import { useState, useEffect } from "react"
import { getDiaries } from "../../utils/DiaryUtils";
import emoji from "emoji-dictionary";
import { Link } from "react-router-dom";

function Diaries() {

    const [diaries, setDiaries] = useState([]);

    const smile = emoji.getUnicode("smile")
    const sad = emoji.getUnicode("cry")

    useEffect(() => {
        getDiaries(setDiaries)
    }, [])

    return (
        <div className="Diaries">
            {
                diaries?.map((d, index) => (
                    <Link className="link" key={index} to={`/update/${d._id}`}>
                        <div className="Dlist">
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
                ))
            }
        </div>
    )
}

export default Diaries