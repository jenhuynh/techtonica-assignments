import React from 'react'

const Notification = ({ showNotification }) => {
    return (
      //condition checks if 2 of the same letters are inputed by user, show notification. If not, then add nothing.
    <div className={` notification-container ${showNotification ? 'show' : '' }`}>
    <p>You have already entered this letter.</p>
    </div>
    )
}

export default Notification