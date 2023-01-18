import React from 'react'

function Cell() {

  const style = {
    "background-image": 'linear-gradient(to right, #f00, #f00), linear-gradient(to right, #0f0, #0f0)',
    "background-repeat": 'no-repeat',
    "background-size": '44% 100%, 100% 100%',
    "border": '1px solid #000',
    "color": 'black',
  }
  return (
    <div className='cell' style= {style}>
      AA
    </div>
  )
}

export default Cell
