import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import CharStatus from './components/types.ts';

const Typing = () => {
  const originalText = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";
  const [wpmCount, setWpmCount] = useState(0);
  const [typedInput, setTypedInput] = useState('');
  const [statusArr, setStatusArr] = useState<CharStatus[]>([]);
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
    setStatusArr(compareText(originalText, typedInput));
    // val is an array where each elt has the obj: {currChar, status}
  }, [typedInput])

  /* This function takes in 2 strings.
   * Splits the strings into chars
   * If the characters match, turn the OG character white,
   * If they don't match, turn OG character red
   * increment cursor for both cases */
  // fix console.log, return values instead
  const compareText = (ogStr: string, typedStr: string): CharStatus[] =>  {
    const ogChars = ogStr.split('');
    const typedChars = typedStr.split('');

    // returns an array where each char is assigned an obj detailing the char and status
    const statusArr = ogChars.map( (currChar, index) => {
      if (index >= typedChars.length) {
        return {currChar, status: 'untyped'};
      }
      if (currChar === typedChars[index]) {
        return {currChar, status: 'correct'};
      } else {
        return {currChar, status: 'incorrect'};
      }
    })
    return statusArr;
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
        {
          statusArr.map( (character) => (
            <span className={character.status !== 'untyped' ? character.status : ''}> 
              {character.currChar}
            </span>
          ))
        }
        {/* <p className="text">{typedInput}</p>  */}
     </div>
     <div className='typingText'>
      <h2>{originalText}</h2>
     </div>
   </div>
  )
}

export default Typing;