import React, { useState, useRef } from 'react'
import './App.scss'
import Canvas from './components/Canvas/Canvas'
import Toolbox from './components/Toolbox/Toolbox'

const App = () => {
  const [size, setSize] = useState<number>(10)
  const [isPressed, setIsPressed] = useState<boolean>(false)
  const [color, setColor] = useState<string>('black')
  const [x, setX] = useState()
  const [y, setY] = useState()
  const canvas = useRef<HTMLCanvasElement>(null)

  return (
    <div className='app'>
      <Canvas
        isPressed={isPressed}
        setIsPressed={setIsPressed}
        x={x}
        y={y}
        setX={setX}
        setY={setY}
        size={size}
        canvas={canvas}
      />
      <Toolbox size={size} setSize={setSize} color={color} setColor={setColor} canvas={canvas} />
    </div>
  )
}

export default App
