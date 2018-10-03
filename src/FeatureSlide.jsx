import React from 'react'

import { Icon } from './Icon'
import { spot, good, bad } from './colors'

const containerStyle1 = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box"
}

const containerStyle2 = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box"
}

const titleStyle = highlight => ({
  fontSize: "6em",
  marginLeft: "2em",
  alignSelf: "flex-start",
  color: colorForHighlight(highlight)
})

const colorForHighlight = highlight => {
  if(highlight == "good") return good
  if(highlight == "bad") return bad
  return spot
}

const contentStyle = {
    color: "white",
    alignSelf: "center",
    width: "70%",
    marginLeft: "25%"
}

const FeatureSlide = props => (
  <div style={containerStyle1}>
    <div style={containerStyle2}>
      <h1 style={titleStyle(props.highlight)}><Icon>{props.icon}</Icon> {props.title}</h1>
      <div style={contentStyle}>{props.children}</div>
    </div>
  </div>
)

export { FeatureSlide }
