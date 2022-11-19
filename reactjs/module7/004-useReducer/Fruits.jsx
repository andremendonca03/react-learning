import React from 'react';

const Fruits = ({fruitsArr, dispacthFruitsArr}) => {
  return (
    <div>
      <div>{fruitsArr}</div>
      <button onClick={() => dispacthFruitsArr({type: "REMOVE", payload: "banana"})}>
        Remove from Fruits Component
      </button>
    </div>
  )
}

export default Fruits;