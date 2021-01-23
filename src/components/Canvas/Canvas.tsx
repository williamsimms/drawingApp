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
  ctx: any
}

const Canvas = ({ isPressed, setIsPressed, x, y, setX, setY, size, canvas, ctx }: CanvasProps) => {
  const onCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsPressed(true)

    setX(e.nativeEvent.offsetX)
    setY(e.nativeEvent.offsetY)
  }

  const onCanvasMouseUp = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    setIsPressed(false)

    setX(undefined)
    setY(undefined)
  }

  const onCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (isPressed) {
      const x2 = e.nativeEvent.offsetX
      const y2 = e.nativeEvent.offsetY
    }
  }

  function drawCircle(x: number, y: number) {}

  function drawLine(x1: number, y1: number, x2: number, y2: number) {}

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
