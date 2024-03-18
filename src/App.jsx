import { useState } from 'react'
import CounterMain from './components/CounterMain'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterMain/>
    </>
  )
}

export default App
