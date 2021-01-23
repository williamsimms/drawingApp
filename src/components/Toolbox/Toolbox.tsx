import React from 'react'
import './Toolbox.scss'

const Toolbox = () => {
  return (
    <div className='toolbox'>
      <button id='decrease'>-</button>
      <span id='size'>10</span>
      <button id='increase'>+</button>
      <input type='color' id='color' />
      <button id='clear'>X</button>
    </div>
  )
}

export default Toolbox
