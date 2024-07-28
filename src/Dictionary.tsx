import { useState, useEffect } from 'react';

const Dictionary = () => {
  const [word, setWord] = useState('');

  useEffect(() => {
    console.log('State updated', word);
  })

  return (
    <div>
        <h1>Dictionary</h1>
        <input type="text" onChange={(e) => {
            setWord(e.target.value);
        }}></input>
        <h1>Here is the word you entered: {word} </h1>
    </div>
  )
}

export default Dictionary;