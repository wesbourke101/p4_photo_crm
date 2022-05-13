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
        }
        else { setNewUser({...newUser, ["password"]: "", ["password_confirmation"]: ""})}    
    }

  return (
      <div className="logInDiv"> 
    <div className='modal'>
        <div className='modal_content'>
            <div className='modal_header'>
            <button onClick={() => setToggleModal(false)}>[X]</button>
                <h4 className='modal_title'> Sign Up!</h4>
            </div>
            <div className='modal_body'>
                Please enter your user information.
                <form onSubmit={createUserAccount}>
                        <label>Username:</label>
                        <input name="username" value={newUser.username} onChange={inputWriter} type='text' ></input>
                        <label>Password:</label>
                        <input name="password" value={newUser.password} onChange={inputWriter} type='password'></input>
                        <label>Confirm Password:</label>
                        <input name="password_confirmation" value={newUser.password_confirmation} onChange={inputWriter} type='password'></input>
                        <label>First Name:</label>
                        <input name="first_name" value={newUser.first_name} onChange={inputWriter} type='text'></input>
                        <label>Last Name:</label>
                        <input name="last_name" value={newUser.last_name} onChange={inputWriter} type='text'></input>
                        <label>Title:</label>
                        <input name="title" value={newUser.title} onChange={inputWriter} type='text'></input>
                        <label>Profile Picture Url:</label>
                        <input name="profile_picture" value={newUser.profile_picture} onChange={inputWriter} type='text'></input>
                    <button type="submit">[Sign Up]</button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Modal