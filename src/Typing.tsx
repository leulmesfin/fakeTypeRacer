import React, { useEffect, useRef, useState } from 'react'
import './App.css'

const Typing = () => {
  const originalText = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";
  const [wpmCount, setWpmCount] = useState(0);
  const [typedInput, setTypedInput] = useState('');
  const [cursorPosition, setCursorPosition] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  /* Once the component renders(mounts), we will focus on the input field, allowing a user to type immediately anywhere */
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [])

  /* on key press(when typedInput state changes), we will run the compareText function */
  useEffect(() => {
    compareText(originalText, typedInput);
  }, [typedInput])

  /* This function takes in 2 strings.
   * Splits the strings into chars
   * If the characters match, turn the OG character white,
   * If they don't match, turn OG character red
   * increment cursor for both cases */
  // fix console.log, return values instead
  const compareText = (ogStr: string, typedStr: string)=>  {
    const ogChars = ogStr.split('');
    const typedChars = typedStr.split('');

    ogChars.map( (currChar, index) => {
      if (index >= typedChars.length) {
        console.log('untyped');
      }
      if (currChar === typedChars[index]) {
        console.log('char match!');
      } else {
        console.log('char DID NOT match!');
      }
    })

  }
  /* This updates the state of the userInput field */
  const updateUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypedInput(e.target.value);
  }

  return (
   <div>
     <h1>FakeType</h1>
     <p>WPM: {wpmCount}</p>
    
    <div className="inputField">
      <input type="text" ref={inputRef} value={typedInput} onChange={updateUserInput}></input>
    </div>
     <div className="container">
        <p className="text">{typedInput}</p> 
     </div>
     <div className='typingText'>
      <h2>{originalText}</h2>
     </div>
   </div>
  )
}

export default Typing;