import React from 'react'

const Icon = props => {
  const style = props.children === 'custom-triangle'
    ? { transform: "rotate(30deg)", display: "inline-block", position: "relative", top: "5px" }
    : {}
  const iconName = props.children === 'custom-triangle' ? 'play' : props.children

  return <i style={style} class={`fas fa-${iconName}`}></i>
}

export { Icon }
