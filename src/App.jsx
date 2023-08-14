import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@mui/material'

function App() {
  const [info, setInfo] = useState(null)

  const getRecords = () => {
    fetch("http://localhost:8080/get_data")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setInfo(data)
        console.log("data: ", data)
      })
  }

  return (
    <>
      <Button onClick={getRecords}>get records</Button>
      { info ? <h1>{info.MRData.RaceTable.Races[0].raceName}</h1> : <div/>}
    </>
  )
}

export default App
