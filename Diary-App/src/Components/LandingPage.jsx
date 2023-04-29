
import Diaries from "./Diaries.jsx";
import Header from './Header.jsx';
import AddButton from "./AddButton.jsx";
import { useLocation } from "react-router-dom";

function LandingPage() {
  const location = useLocation()
  return (
    <>
    <Header username={location.state.username}/>
    <Diaries/>
    <AddButton/>
    </>
  )
}

export default LandingPage