import React, { useState } from 'react'
import './App.scss'
import Canvas from './components/Canvas/Canvas'
import Toolbox from './components/Toolbox/Toolbox'

const App = () => {
  const [size, setSize] = useState<number>(10)
  const [isPressed, setIsPressed] = useState<boolean>(false)
  const [color, setColor] = useState<string>('black')
  let x
  let y

  return (
    <div className='app'>
      <Canvas isPressed={isPressed} setIsPressed={setIsPressed} x={x} y={y} />
      <Toolbox size={size} setSize={setSize} color={color} setColor={setColor} />
    </div>
  )
}

export default App
