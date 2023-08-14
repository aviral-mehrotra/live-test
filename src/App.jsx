import { useState } from 'react'
import './App.css'
import { Button } from '@mui/material'

function App() {
  const [info, setInfo] = useState(null)

  const getRecords = () => {
    fetch("https://aviral-mehrotra.github.io/live-test/get_data")
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
