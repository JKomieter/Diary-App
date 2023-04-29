
import "./App.css";
import { Routes, Route } from "react-router-dom"
import LandingPage from "./Components/LandingPage";
import AddingPage from "./Components/AddingPage";
import UpdatePage from "./Components/UpdatePage";
import Login from "./Components/Login";
function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/home/:id" element={<LandingPage/>}/>
        <Route path="/save" element={<AddingPage/>}/>
        <Route path="/update/:_id" element={<UpdatePage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App