import React, {useState} from 'react'
import "../App.css"


function Login() {
    const [usrForm, setUsrForm] = useState({
        usrName: "",
        pasWord: ""  
    })
    
    function formSubmit(event) {
        event.preventDefault()
        if (usrForm.usrName !== "" && usrForm.pasWord !== "") {
            console.log(usrForm)
        }
        else if (usrForm.usrName === "") {
            alert("Please enter a user Name.")
        }
        else {
            alert("Please enter a user Password.")
        }
    }
    function changeStateFunction(event) {
        setUsrForm({...usrForm, [event.target.name]: event.target.value})
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
                <input type="text" name="usrName" onChange={changeStateFunction} value={usrForm.usrName} />
                <label>Password:</label>  
                <input type="text" name="pasWord" onChange={changeStateFunction} value={usrForm.pasWord} />
                <button type="submit">[X]</button>
            </form>   
            <div className="modal" onClick={modalPopUp} onMouseEnter={changeBackground} onMouseLeave={ReturnBackground}>Don't have an account? Sign up</div>
       </div>
    </div>
  )
}

export default Login