import React from 'react'

const SingleProduct = ({ name, properties }) => {
  return (
    <div style={{border: '2px solid #000', margin: '1rem 0'}}>
      <p>{name}</p>
      <ul>
        {properties.map((item) => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default SingleProduct;