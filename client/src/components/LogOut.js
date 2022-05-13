import React from 'react'

function LogOut({logUserOut}) {
    function logMeOut(e) {
        logUserOut()
    }

    return (
        <button id="logOutButtonPosition" className="button-design-2" onClick={logMeOut}> Logout </button>
    )
}

export default LogOut