import React, {useState} from 'react'
import Modal from './Modal'
import '../App.css';


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
    

  return (
<<<<<<< HEAD
    <div className="bg-slate-600" id="pageContainerDiv">
       <div className="flex-container" id="divSignInForm">
           <form onSubmit={formSubmit}>
                <label>User Name:</label>    
                <input type="text" name="usrName" onChange={changeUsername} value={username} />
                <label>Password:</label>  
                <input type="text" name="pasWord" onChange={changePassword} value={password} />
                <button type="submit">Sign In</button>   
=======
    <div>
       <div className="logInDiv">
            <span class="dot"></span>
            <br/><br/>
           <form id="logInForm" onSubmit={formSubmit}>
                <table className="tableCss">
                    <tbody>
                        <tr><td><label>User Name:</label> </td><td><input type="text" name="usrName" onChange={changeUsername} value={username} /></td></tr>
                        <tr><td><label>Password:</label>  </td><td><input type="text" name="pasWord" onChange={changePassword} value={password} /></td></tr>
                        <tr><td><button type="submit">Sign In</button> </td></tr>
                        <tr></tr>
                    </tbody>        
                </table>  
                <br/><br/>
                <table>
                    <tbody>
                        <tr><td><text>Don't have an account? Sign up!</text></td></tr>
                        <tr><td><button onClick={modalPopUp}> Sign Up</button></td></tr>
                    </tbody>
                </table>  
>>>>>>> wesAfterHours12
            </form>   
            {toggleModal ? <Modal setToggleModal={setToggleModal} postNewUser={postNewUser}/> : null}
       </div>
    </div>
  )
}

export default Login