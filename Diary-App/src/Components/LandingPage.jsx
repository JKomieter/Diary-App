
import Diaries from "./Diaries.jsx";
import Header from './Header.jsx';
import AddButton from "./AddButton.jsx";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function LandingPage() {
  const location = useLocation()
  useEffect(() => console.log(location.state._id))
  return (
    <>
      <Header username={location.state.username}/>
      <Diaries _id={location.state._id}/>
      <AddButton _id={location.state._id} username={location.state.username}/>
    </>
  )
}

export default LandingPage