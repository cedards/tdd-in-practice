import React from 'react'
import { good, bad, spot } from './colors'
import { Hideable } from './Hideable'

export const Good = Hideable(props => (
  <span style = {{color: good}}>{props.children}</span>
))

export const Bad = Hideable(props => (
  <span style = {{color: bad}}>{props.children}</span>
))

export const Spot = Hideable(props => (
  <span style = {{color: spot}}>{props.children}</span>
))

const highlights = {
  good: Good,
  bad: Bad,
  spot: Spot
}

export const Highlightable = Component => props => {
  if(props.highlight === 'good') return <Good><Component {...props}/></Good>
  if(props.highlight === 'bad') return <Bad><Component {...props}/></Bad>
  if(props.highlight === 'spot') return <Spot><Component {...props}/></Spot>
  return <Component {...props}/>
}
