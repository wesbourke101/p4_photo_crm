import React, {useState} from 'react'


function Modal({setToggleModal, postNewUser}) {
    const [newUser, setNewUser] =useState({
        username: "",
        password: "",
        password_confirmation: "",
        first_name: "",
        last_name: "",
        title: "",
        profile_picture: ""
    })
    function inputWriter(e) {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }
    function createUserAccount(e) {
        e.preventDefault()
        if (newUser.password === newUser.password_confirmation) {
            postNewUser(newUser)
            setToggleModal(false)
        }
        else { setNewUser({...newUser, ["password"]: "", ["password_confirmation"]: ""})}    
    }

  return (
    <div className="logInModal "> 
        <div className='modal'>
            <div className='modal_content'>
                <div className='modal_header'>
                <button onClick={() => setToggleModal(false)}>[X]</button>
                    <h4 className='modal_title'> Sign Up!</h4>
                </div>
                <div className='modal_body'>
                    <text>Please enter your user information.</text>
                    <form onSubmit={createUserAccount}>
                        <table className="tableCss">
                            <tbody>
                                <tr><td> <label>Username:</label> </td><td><input id="inputStyle" name="username" value={newUser.username} onChange={inputWriter} type='text' ></input></td></tr>
                                <tr><td> <label>Password:</label></td><td> <input id="inputStyle" name="password" value={newUser.password} onChange={inputWriter} type='password'></input></td></tr>
                                <tr><td> <label>Confirm Password:</label></td><td><input id="inputStyle" name="password_confirmation" value={newUser.password_confirmation} onChange={inputWriter} type='password'></input></td></tr>
                                <tr><td> <label>First Name:</label></td><td> <input id="inputStyle" name="first_name" value={newUser.first_name} onChange={inputWriter} type='text'></input></td></tr>   
                                <tr><td> <label>Last Name:</label></td><td><input id="inputStyle" name="last_name" value={newUser.last_name} onChange={inputWriter} type='text'></input></td></tr>    
                                <tr><td> <label>Title:</label></td><td> <input id="inputStyle" name="title" value={newUser.title} onChange={inputWriter} type='text'></input></td></tr>    
                                <tr><td> <label>Profile Picture Url:</label></td><td> <input id="inputStyle" name="profile_picture" value={newUser.profile_picture} onChange={inputWriter} type='text'></input></td></tr>    
                            </tbody>
                        </table>           
                            <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal