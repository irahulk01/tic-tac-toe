import { useState } from 'react'
import './App.css'
import Block from './component/Block'

function App() {
  const [blockValue, setBlockvalue] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState('x')

  const checkWin = (blockValue: any []) => {
    const winblock = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winblock.length; i++) {
      const [a, b, c] = winblock[i]
      if (blockValue[a] !== null && blockValue[a] === blockValue[b] && blockValue[a] === blockValue[c]) return true
    }
    return false;

  }
const handleClick = (index: number) => {
  const stateCopy = [...blockValue];

  // Prevent clicking filled block
  if (stateCopy[index] !== null) return;

  // Set the clicked block
  stateCopy[index] = currentTurn;
  setBlockvalue(stateCopy);

  // Check for winner after updating
  if (checkWin(stateCopy)) {
    alert(`${currentTurn.toUpperCase()} won the game`);
    return;
  }

  // Switch turn
  setCurrentTurn(currentTurn === "x" ? "o" : "x");
};


  return (
    <div className='board'>
      <div className='row'>
        <Block onClick={() => handleClick(0)} value={blockValue[0]} />
        <Block onClick={() => handleClick(1)} value={blockValue[1]} />
        <Block onClick={() => handleClick(2)} value={blockValue[2]} />
      </div>
      <div className='row'>
        <Block onClick={() => handleClick(3)} value={blockValue[3]} />
        <Block onClick={() => handleClick(4)} value={blockValue[4]} />
        <Block onClick={() => handleClick(5)} value={blockValue[5]} />
      </div>
      <div className='row'>
        <Block onClick={() => handleClick(6)} value={blockValue[6]} />
        <Block onClick={() => handleClick(7)} value={blockValue[7]} />
        <Block onClick={() => handleClick(8)} value={blockValue[8]} />
      </div>
    </div>
  )
}

export default App
