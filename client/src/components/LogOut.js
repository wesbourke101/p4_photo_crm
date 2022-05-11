import React from 'react'

function LogOut({logUserOut}) {
    function logMeOut(e) {
        logUserOut()
    }

    return (
        <button onClick={logMeOut}> <h6>Logout</h6> </button>
    )
}

export default LogOut