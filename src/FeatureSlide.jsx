import React from 'react'

import { Icon } from './Icon'
import { spot, good, bad } from './colors'
import { Hideable } from './Hideable'
import { Highlightable } from './Highlight'

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

export const FeatureSlideHeader = props => (
  <h1 style={titleStyle(props.highlight)}><Icon>{props.icon}</Icon> {props.children}</h1>
)

export const FeatureSlideContent = props => (
  <div style={contentStyle}>{props.children}</div>
)

export const FeatureSlideFrame = props => (
  <div style={containerStyle1}>
    <div style={containerStyle2}>
      {props.children}
    </div>
  </div>
)

export const FeatureSlide = props => (
  <FeatureSlideFrame>
      <FeatureSlideHeader highlight={props.highlight} icon={props.icon}>{props.title}</FeatureSlideHeader>
      <FeatureSlideContent>{props.children}</FeatureSlideContent>
  </FeatureSlideFrame>
)

export const FeatureLine = Highlightable(Hideable(props => (
  <p style={{fontSize: "4em"}}>{props.children}</p>
)))

FeatureLine.defaultProps = {
  show: true
}
