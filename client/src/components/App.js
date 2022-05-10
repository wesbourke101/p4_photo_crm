import '../App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import Login from './Login';
import ClientStatusCards from './ClientStatusCards';
import AddProject from './AddProject';

  function App() {
    const [currentUser, setCurrentUser] = useState([])
    const [currentUserProjects, setCurrentUserProjects] = useState([])
    let navigate = useNavigate();


    useEffect(() => {
      fetch('/auth')
      .then(res => {
        if(res.ok){
          res.json().then(user => { 
            setCurrentUser(user) 
            setCurrentUserProjects(user.projects)
          })
        }
      })
    }, [])

    function loginFunction(username, password) {
      fetch(`/login`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
               Accept: "application/json"
          },
          body: JSON.stringify({
              username,
              password
         })
      })
      .then( res => res.json())
      .then( data =>  {
          setCurrentUser(data)
          setCurrentUserProjects(data.projects)
          navigate(`/my_projects`)
      })
      .catch( error => console.log(error.message));
    }

  const [photoProjects, setPhotoProjects] = useState([])
    useEffect(() => {
      fetch(`http://localhost:3000/projects`)
      .then( res => res.json())
      .then( data => setPhotoProjects(data))
      .catch( error => console.log(error.message)
    )}, [])

    // useEffect(() => {
    //   if (currentUser.id){
    //     fetch(`http://localhost:3000/projects/${currentUser.id}`)
    //     .then( res => res.json())
    //     .then( data => console.log(data))
    //     .catch( error => console.log(error.message));
    //   }  
    // }, [currentUser])
    console.log(currentUserProjects)
  return (
    <div>
        <NavBar />
          <Routes>
            <Route path="/" element={<Login loginFunction={loginFunction} />}></Route>
            <Route path="/my_projects" element={<ClientStatusCards currentUserProjects={currentUserProjects} currentUser={currentUser}/>} />
            <Route path="/add_project" element={<AddProject />} />
          </Routes>
    </div>
  );
}
export default App;
