import React, { useState, useRef, useEffect } from 'react'
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
  const ctx = useRef<any>()

  useEffect(() => {
    ctx.current = canvas.current?.getContext('2d')
  }, [])

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
        ctx={ctx.current}
        color={color}
      />
      <Toolbox size={size} setSize={setSize} color={color} setColor={setColor} canvas={canvas} ctx={ctx.current} />
    </div>
  )
}

export default App
