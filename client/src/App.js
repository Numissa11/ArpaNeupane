import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState({})
  const userss = {
    "users" : ['Marc', 'Daniel', 'Melissa']
}

  useEffect(() => {
    fetch("/api").then(
      res => res.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )

  }, []) 
  // empty array at the end so the component only run first time at the render and  not on every render


  return (
    <div>
     {(typeof backendData.users === 'undefined') ? 
     (
      <p>Loading ...</p>
     ): 
     (
      userss.users.map((user, i) => (
        <p key={i}>{user}</p>
      )
      )      
     )
    }
    </div>
  )
}

export default App