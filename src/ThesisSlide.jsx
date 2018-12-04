import React from 'react'
import { Icon } from './Icon'
import { spot } from './colors'

const containerStyle1 = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignContent: "center",
  color: "white",
  fontSize: "4em",
}

const leftContainerStyle = {
  width: "35%",
  color: spot,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const rightContainerStyle = show => ({
  width: "60%",
  marginLeft: "5%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  visibility: show ? "visible" : "hidden"
})

const provenContainerStyle = {
  margin: "1em 0"
}

const demonstratedContainerStyle = provenContainerStyle

const leftContainerContent = content => (
  content
    ? <div style={{textAlign: "left", marginLeft: "1em"}}>{content}</div>
    : <p style={{fontSize: "4em"}}><Icon>lightbulb</Icon></p>
)

const RightContainer = props => (
  <div style={rightContainerStyle(props.show)}>
    <div style={provenContainerStyle}>
      the only things that are true are things that have been <b>proven</b>
    </div>
    <div style={demonstratedContainerStyle}>
      the only things that are proven are things that have been <b>demonstrated</b>
    </div>
  </div>
)

export const ThesisSlide = props => (
  <div style={containerStyle1}>
    <div style={leftContainerStyle}>
      {leftContainerContent(props.children)}
    </div>
    <RightContainer show={props.index >= 1}/>
  </div>
)
