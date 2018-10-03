import React from 'react'

export const Hideable = Component => props => (
  <span style={props.show === false ? {visibility: "hidden"} : {}}><Component {...props}/></span>
)
