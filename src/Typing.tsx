import React, { useState } from 'react'
import './App.css'

const Typing = () => {
  const defaultText = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc sollicitudin ipsum ac finibus semper. Suspendisse viverra convallis ex ac posuere. Etiam arcu eros, egestas a dapibus vel, eleifend ut ex. Aliquam erat volutpat. In sit amet eleifend dolor. Suspendisse potenti. Nulla malesuada nisl vitae eros laoreet, vitae auctor nisi rutrum. Nam molestie lorem dolor. Nullam vehicula quis diam viverra dictum. Vivamus sed finibus massa. Vestibulum eu auctor lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis iaculis sollicitudin nisi, non euismod elit pellentesque gravida.";
  const [wpmCount, setWpmCount] = useState(0);

  return (
   <div>
     <h1>FakeType</h1>
     <p>WPM: {wpmCount}</p>

     <div className='typingText'>
      <h2>{defaultText}</h2>
     </div>
   </div>
  )
}

export default Typing;