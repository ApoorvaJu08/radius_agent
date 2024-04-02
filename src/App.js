import React, { useEffect, useState } from 'react';
import './App.css';
import Box from './Box';

const numberOfBoxes = 7;

const App = () => {



  const [clickedState, setClickedState] = useState({})


   const handleBoxClick = (key) => {
     const newClickedState = {...clickedState, [key]: true}
     setClickedState(newClickedState)
   }

   useEffect(() => {
    if (Object.keys(clickedState).length === numberOfBoxes) {
      const clickedBoxes = Object.keys(clickedState);
      let index = 0;

      const intervalId = setInterval(() => {
        if (index < clickedBoxes.length) {
          const updatedClickedState = { ...clickedState };
          delete updatedClickedState[clickedBoxes[index]];
          setClickedState(updatedClickedState);
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 500);

      return () => clearInterval(intervalId);
    }
  }, [clickedState]);

  
  return (
    <div>
      <div className='first-div flex wrapper-div'>
        <Box boxIndex={0} boxClicked={handleBoxClick} clicked={clickedState[0]}/>
        <Box boxIndex={1} boxClicked={handleBoxClick} clicked={clickedState[1]}/>
        <Box boxIndex={2} boxClicked={handleBoxClick} clicked={clickedState[2]}/>
      </div>
      <div className='second-div flex wrapper-div'>
        <Box boxIndex={3} boxClicked={handleBoxClick} clicked={clickedState[3]}/>
      </div>
      <div className='third-div flex wrapper-div'>
        <Box boxIndex={4} boxClicked={handleBoxClick} clicked={clickedState[4]}/>
        <Box boxIndex={5} boxClicked={handleBoxClick} clicked={clickedState[5]}/>
        <Box boxIndex={6} boxClicked={handleBoxClick} clicked={clickedState[6]}/>
      </div>
    </div>
  )
}

export default App;
