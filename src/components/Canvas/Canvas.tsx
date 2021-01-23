import React from 'react'
import './Canvas.scss'

interface CanvasProps {
  isPressed: boolean
  setIsPressed: any
  x: any
  y: any
}

const Canvas = ({ isPressed, setIsPressed, x, y }: CanvasProps) => {
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
      width='800'
      height='700'
      onMouseDown={onCanvasMouseDown}
      onMouseUp={onCanvasMouseUp}
      onMouseMove={onCanvasMouseMove}></canvas>
  )
}

export default Canvas
