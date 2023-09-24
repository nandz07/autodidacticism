import React from 'react'

function UserGreeting() {
    const isLoged=true
  return (
    <div>
        {/* Welcome {isLoged ? 'Nandakumar' : 'Guest'} */}
        Welcome {isLoged && 'Nandakumar'}
        
        </div>
  )
}

export default UserGreeting