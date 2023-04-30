import "./Diaries.css"
import { useState, useEffect } from "react"
import { getDiaries } from "../../utils/DiaryUtils";
import DiaryList from "./DiaryList";
import PropTypes from "prop-types"

function Diaries({_id, username}) {

    const [diaries, setDiaries] = useState([]);

    

    useEffect(() => {
        getDiaries(setDiaries)
    }, [])

    return (
        <div className="Diaries">
            {
                diaries?.map((d, index) => (
                    <DiaryList _id={_id} d={d} key={index} username={username}/>
                ))
            }
        </div>
    )
}

Diaries.propTypes = {
    _id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}

export default Diaries