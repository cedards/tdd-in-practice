import React from 'react'

export const FeatureLine = props => (
  <p style={{fontSize: "4.4em", visibility: props.show ? "visible" : "hidden"}}>{props.children}</p>
)

FeatureLine.defaultProps = {
  show: true
}
