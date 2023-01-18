import React from 'react'
import Cell from './Cell'

function Range() {

  const table = []

  for (let i = 0; i < 169; i++) {
    table.push(<Cell />)
  }

  return (
    <div className='range'>
      {table}
    </div>

  )
}

export default Range
