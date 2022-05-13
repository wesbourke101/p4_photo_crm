import React, {useState} from 'react'
import "../App.css"
import Modal from './Modal'


function Login({ loginFunction, setCurrentUser, postNewUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [toggleModal, setToggleModal] = useState(false)
    
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
        setToggleModal(true)
    }
    // function changeBackground(e) {
    //     e.target.style.background = 'blue';
    //   }
    // function ReturnBackground(e) {
    //     e.target.style.background = 'white';
    // }
    

  return (
    <div className="bg-slate-600" id="pageContainerDiv">
       <div className="flex-container" id="divSignInForm">
           <form onSubmit={formSubmit}>
                <label>User Name:</label>    
                <input type="text" name="usrName" onChange={changeUsername} value={username} />
                <label>Password:</label>  
                <input type="text" name="pasWord" onChange={changePassword} value={password} />
                <button type="submit">Sign In</button>   
            </form>   
            <div>Don't have an account? Sign up!</div>
            <button onClick={modalPopUp}> Sign Up</button>
            {toggleModal ? <Modal setToggleModal={setToggleModal} postNewUser={postNewUser}/> : null}
       </div>
    </div>
  )
}

export default Login