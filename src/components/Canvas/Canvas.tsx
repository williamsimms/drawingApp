import React from 'react'
import './Canvas.scss'

interface CanvasProps {
  isPressed: boolean
  setIsPressed: any
  x: any
  y: any
  setX: any
  setY: any
  size: number
  canvas: any
}

const Canvas = ({ isPressed, setIsPressed, x, y, setX, setY, size, canvas }: CanvasProps) => {
  const onCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    setIsPressed(true)
  }

  const onCanvasMouseUp = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    setIsPressed(false)
  }

  const onCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    setIsPressed(false)
  }

  return (
    <canvas
      ref={canvas}
      width='800'
      height='700'
      onMouseDown={onCanvasMouseDown}
      onMouseUp={onCanvasMouseUp}
      onMouseMove={onCanvasMouseMove}></canvas>
  )
}

export default Canvas
