
import "./App.css";
import { Routes, Route } from "react-router-dom"
import LandingPage from "./Components/LandingPage";
import AddingPage from "./Components/AddingPage";
import UpdatePage from "./Components/UpdatePage";
import Login from "./Components/Login";
import React from "react";

const images = [
  "https://th.bing.com/th/id/R.84a3fa8d5f520896d1ccd8de8dfcfc2a?rik=7hUr442Rmr5TGA&pid=ImgRaw&r=0",
  "https://images8.alphacoders.com/721/721311.jpg",
  "https://wallpapercave.com/wp/wp3329864.jpg"
]
class App extends React.Component  {
   state = {
    num: 0,
    bg: images[0]
   }

   componentDidMount() {
    setInterval(this.changeBg, 5000)
   }

   changeBg = () => {
    if (this.state.num < images.length) {
      this.setState({
        bg: images[this.state.num],
        num: this.state.num + 1
      })
    } else {
      this.setState({
        bg: images[0],
        num: 0
      })
    }
   }
   
  render() {
    return (
      <div className='app' style={{backgroundImage: `url(${this.state.bg})`}}>
        <Routes>
          <Route path="/home/:id" element={<LandingPage/>}/>
          <Route path="/save/:_id/:username" element={<AddingPage/>}/>
          <Route path="/update/:_id/:username" element={<UpdatePage/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    )
  }
}

export default App