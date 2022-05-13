import '../App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './Login';
import AddProject from './AddProject';
import SingleProjectView from './SingleProjectView';
import ClientView from './ClientView';
import Header from './Header';
import FullProjectNav from './FullProjectNav';
import PhotographerHome from './PhotographerHome';

  function App() {
    const [currentUser, setCurrentUser] = useState([])
    const [currentUserProjects, setCurrentUserProjects] = useState([])
    const [currentProject, setCurrentProject] = useState([])
    let navigate = useNavigate();
/////////////////////wes getting wild
    const [userId, setUserId] = useState(0)
    const [userType, setUserType] = useState('')
    const [toggleState, setToggleState] = useState(true)
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
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
      }, [currentProject])

      useEffect(() => {
        fetch(`/${userType}/${userId}`)
        .then( res => res.json())
        .then( data => {
          setCurrentUser(data)
          setCurrentUserProjects(data.projects)
        })
        .catch( error => console.log(error.message));
      }, [toggleState])
//////////////////////////////////////////////////////////////////
///////// Update Project ///////////

function onUpdateProject(updateProject) {
  fetch (`/projects/${currentProject.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      status: updateProject.status,
    })
  })
  .then (res => res.json())
  .then (data => setCurrentProject(data))
}
///////// Update Project ///////////
//////////////////////////////////////////////////////////////////
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
          setUserId(data.id)
          if(data.bio) {
            setUserType("photographers")
          } else {
            setUserType("clients")
          }
          setToggleState(!toggleState)
          if(data.bio) { 
            navigate(`/home`)
          } else {
            navigate(`/my_projects`)
          }
      })
      .catch( error => console.log(error.message));
    }
//////////////////////////////////////////////////////////////////    
//////////////////////////////////////////////////////////////////
    function logUserOut() {
      fetch(`/logout`, {
          method: "DELETE"
      })
      .catch( error => console.log(error.message));
      setCurrentUser([])
      navigate(`/`)
    }
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
  function postNewUser(newUser) {
      fetch(`/clients`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
          },
          body: JSON.stringify(
              newUser
          )
      })
      .then( res => res.json())
      .then( data => console.log(data))
      .catch( error => console.log(error.message));
  }
/////////////////////////////////////////////////
   function postNewProjy(newProjy) {
    fetch(`/projects`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(
            newProjy
        )
    })
    .then( res => res.json())
    .then( data => {
      console.log(data)
      setToggleState(!toggleState)
    })
    .catch( error => console.log(error.message));
 }
 //////////////////////////////////////////////////////////////////////

 function onDeleteProject(idToDelete) {
  fetch (`/projects/${idToDelete}`,{
    method: "DELETE"
  })
  setToggleState(!toggleState)
  navigate('/my_projects')
 }
//////////////////////////////////////////////////////////////////////

  return (
    <div className="bg-slate-600">
      <h1>Paragon.io</h1>
      <div className="bg-blue-500">
        {currentUser.id ? <Header logUserOut={logUserOut} currentUser={currentUser}/> : null}
          <Routes>
            <Route path="/" element={<Login loginFunction={loginFunction} postNewUser={postNewUser}/>}></Route>
            {currentUser.bio ?   
                <>
                  <Route path="/home" element={<PhotographerHome currentUserProjects={currentUserProjects} currentUser={currentUser} setCurrentProject={setCurrentProject} currentProject={currentProject}/>} />
                  <Route path="/project/:id" element={<FullProjectNav currentProject={currentProject}/>} /> 

                </> 
              : 
                <>
                  <Route path="/my_projects" element={<ClientView currentProject={currentProject} setCurrentProject={setCurrentProject} currentUserProjects={currentUserProjects} currentUser={currentUser}/>} />
                  <Route path="/add_project" element={<AddProject postNewProjy={postNewProjy} currentUser={currentUser}/>} />
                  <Route path="/my_projects/:id" element={<SingleProjectView setCurrentProject={setCurrentProject} />} /> 
                  <Route path="/project/:id" element={<FullProjectNav onDeleteProject={onDeleteProject} currentProject={currentProject} onUpdateProject={onUpdateProject}/>} /> 
                </>}
          </Routes>
       </div>   
    </div>
  );
}
export default App;
