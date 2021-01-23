import React from 'react'
import './Toolbox.scss'

interface ToolboxProps {
  size: number
  setSize: any
  color: string
  setColor: any
  canvas: any
  ctx: any
}

const Toolbox = ({ color, setColor, setSize, size, canvas, ctx }: ToolboxProps) => {
  const increase = () => {
    if (size >= 50) {
      return setSize(50)
    }

    setSize((size: number) => (size += 5))
  }

  const decrease = () => {
    if (size <= 5) {
      return setSize(5)
    }

    setSize((size: number) => (size -= 5))
  }

  const onColorChange = () => {}

  const clear = () => {
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
  }

  return (
    <div className='toolbox'>
      <button className='decrease' onClick={decrease}>
        -
      </button>
      <span className='size'>{size}</span>
      <button className='increase' onClick={increase}>
        +
      </button>
      <input type='color' id='color' onChange={onColorChange} />
      <button className='clear' onClick={clear}>
        X
      </button>
    </div>
  )
}

export default Toolbox
