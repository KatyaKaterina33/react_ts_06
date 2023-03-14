import {useState} from 'react';
import React from 'react';

import {Button} from './components/Button.js';
import {Display} from './components/Display.js';

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log('rendering with counter value = ', counter);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);
  return (
    <div>
      <Display counter = {counter} />
      <Button handleClick = {increaseByOne} text = 'plus' />
      <Button handleClick = {decreaseByOne} text = 'minus' />
      <Button handleClick = {setToZero} text = 'zero' />
    </div>
  );
}

export default App;