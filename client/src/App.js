import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState({})

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

    </div>
  )
}

export default App