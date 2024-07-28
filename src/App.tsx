import { useState } from 'react'
import './App.css'
import Dictionary from './Dictionary'
import Typing from './Typing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <Dictionary /> */}
        <Typing />
      </div>
    </>
  )
}

export default App
