import React from 'react'

function LogOut({logUserOut}) {
    function logMeOut(e) {
        logUserOut()
    }

    return (
        <button className="button-design-2" onClick={logMeOut}> <h6>Logout</h6> </button>
    )
}

export default LogOut