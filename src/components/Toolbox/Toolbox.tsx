import React from 'react'
import './Toolbox.scss'

interface ToolboxProps {
  size: number
  setSize: any
  color: string
  setColor: any
}

const Toolbox = ({ color, setColor, setSize, size }: ToolboxProps) => {
  const increase = () => {}
  const decrease = () => {}

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
