import React from 'react'
import { FeatureLine, FeatureSlide } from '../FeatureSlide'

export const TalkIsNot = props => (
  <FeatureSlide title="This talk is not:" icon="times" highlight="bad">
    <FeatureLine show={props.index >= 1}>An intro to TDD</FeatureLine> 
    <FeatureLine show={props.index >= 2}>A cleanroom exercise</FeatureLine> 
    <FeatureLine show={props.index >= 3}>A step-by-step tutorial</FeatureLine> 
  </FeatureSlide>
)

export const TalkIs = props => (
  <FeatureSlide title="This talk is about:" icon="check" highlight="good">
    <FeatureLine show={props.index >= 1}>Common problems</FeatureLine> 
    <FeatureLine show={props.index >= 2}>A pattern of thinking</FeatureLine> 
    <FeatureLine show={props.index >= 3}>High-level effects of TDD</FeatureLine> 
  </FeatureSlide>
)

