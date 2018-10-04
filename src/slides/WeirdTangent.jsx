import React from 'react'

const containerStyle = {
  display: "flex",
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  padding: "15em",
}

const headingStyle = {
  color: "white",
  fontSize: "5em",
  textAlign: "center",
}

export const WeirdTangent = props => (
  <div style={containerStyle}>
  <h1 style={headingStyle}>"A weird tangent that I promise is really relevant and is in fact the fundamental premise for this entire webinar"</h1>
  </div>
)
