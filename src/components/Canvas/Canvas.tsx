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
  color: string
}

const Canvas = ({ isPressed, setIsPressed, x, y, setX, setY, size, canvas, ctx, color }: CanvasProps) => {
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

      drawCircle(x2, y2)
      drawLine(x, y, x2, y2)

      setX(x2)
      setY(y2)
    }
  }

  function drawCircle(x: number, y: number) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
  }

  function drawLine(x1: number, y1: number, x2: number, y2: number) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
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
