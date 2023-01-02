import React, { useState, useEffect } from 'react'
import Feature1 from './ChangingBackground';

export default function App() {
  const [time, setTime] = useState(0)

  const increment = (value) => {
    let inputValue = value + 1; //1,2
    setTime(inputValue) //time=1
  }

  const decrement = (value) => {
    let inputValue = value - 1; //1,2
    setTime(inputValue) //time=1
  }

  const timeCheck = () => {
    if (time < 0) {
      //alert('Quantity should not be less than 0')//render new component
      setTime(0) //when new component is interacted data is updtae
    }
  }
  useEffect(() => {
    timeCheck()
    // return () => {
    //   second
    // }
  }, [time])

  return (
    <div>
      <div>{time}</div>
      <button type='button' onClick={() => increment(time)}>Add</button>
      <button type='button' onClick={() => decrement(time)}>Delete</button>
      {
        time == 0 && <Feature1 />
      }
    </div>
  )
}
