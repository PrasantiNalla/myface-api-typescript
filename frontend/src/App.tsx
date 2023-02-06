import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Posts } from './Posts'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <Posts />
    </div>
  )
}

export default App
