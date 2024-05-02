import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'


function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash)
  console.log(cash);

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  return (
    <>
      <div className='app'>
        <div>{cash}</div>
        <div>
          <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
          <button onClick={() => getCash(Number(prompt()))}>Withdraw cash</button>
        </div>
      </div>
    </>
  )
}

export default App
