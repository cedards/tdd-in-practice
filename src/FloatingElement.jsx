import React from 'react'
import { Highlightable } from './Highlight'
import { Hideable } from './Hideable'

const floatingStyle = (offsetX, offsetY) => ({
  position: 'absolute',
  top: offsetY,
  left: offsetX,
  fontSize: "4em",
})

export const FloatingElement = Hideable(Highlightable(props => (
  <p style={floatingStyle(props.offsetX, props.offsetY)}>{props.children}</p>
)))


