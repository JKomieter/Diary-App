import { useState } from "react"
import { getUser, createUser } from "../../utils/DiaryUtils"
import { useNavigate } from "react-router-dom"
import "./Login.css"


function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMsg] = useState("")
    const navigate = useNavigate()

    const handleLogIn = (e) => {

        const user = {
            username: username,
            password: password
        }

        getUser(user, (data) => { 
            const _id = data._id
            console.log(_id)
            navigate(`/home/${_id}`, 
            {state: {username: data.username}})
        })
    }

    const handleSignUp = (e) => {
        const user = {
            username: username,
            password: password
        }
        createUser(user, (data) => {
            console.log(data); 
            navigate(`/home/${data._id}`,
            {state: {username: data.username}})
        })
    }

    return (
        <div className="logInPage"> 
            <div className="logIn">
                Log In
            </div>
            <div className="username">
                <label htmlFor="username" className="un">Username</label>
                <input className="uInpt" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="password">
                <label htmlFor="password" className="un">Password</label>
                <input className="pInpt" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="logBtn">
                <div className="login">
                    <button type="submit" onClick={handleLogIn}>Log in</button>
                </div>
                <div className="signUp">
                    <button type="submit" onClick={handleSignUp}>Sign up</button>
                </div>
            </div>
            <div className="msg">{message}</div>
        </div>
    )
}

export default Login