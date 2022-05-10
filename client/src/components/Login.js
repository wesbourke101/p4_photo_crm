import React, {useState} from 'react'
import "../App.css"

function Login({ loginFunction, setCurrentUser }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    function formSubmit(event) {
        event.preventDefault()
        console.log(username, password)
        if (username && password) {
            loginFunction(username, password)
        }
        else if (username === "") {
            alert("Please enter a user Name.")
        }
        else {
            alert("Please enter a user Password.")
        }
    }
    function changeUsername(event) {
        setUsername(event.target.value)
    }
    function changePassword(event) {
        setPassword(event.target.value)
    }
    function modalPopUp() {
        console.log("worked!")
    }
    function changeBackground(e) {
        e.target.style.background = 'blue';
      }
    function ReturnBackground(e) {
        e.target.style.background = 'white';
    }
    

  return (
    <div className="flex-container" id="pageContainerDiv">
       <div className="flex-container" id="divSignInForm">
           <form onSubmit={formSubmit}>
                <label>User Name:</label>    
                <input type="text" name="usrName" onChange={changeUsername} value={username} />
                <label>Password:</label>  
                <input type="text" name="pasWord" onChange={changePassword} value={password} />
                <button type="submit">[X]</button>
            </form>   
            <div className="modal" onClick={modalPopUp} onMouseEnter={changeBackground} onMouseLeave={ReturnBackground}>Don't have an account? Sign up</div>
       </div>
    </div>
  )
}

export default Login