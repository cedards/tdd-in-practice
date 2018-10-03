import React from 'react'
import { FeatureLine, FeatureSlide } from '../FeatureSlide'

export const TalkIsNot = props => (
  <FeatureSlide title="this talk is not:" icon="times" highlight="bad">
    <FeatureLine show={props.index >= 1}>an intro to TDD</FeatureLine> 
    <FeatureLine show={props.index >= 2}>a cleanroom exercise</FeatureLine> 
    <FeatureLine show={props.index >= 3}>a step-by-step tutorial</FeatureLine> 
  </FeatureSlide>
)

export const TalkIs = props => (
  <FeatureSlide title="this talk is about:" icon="check" highlight="good">
    <FeatureLine show={props.index >= 1}>common problems</FeatureLine> 
    <FeatureLine show={props.index >= 2}>a pattern of thinking</FeatureLine> 
    <FeatureLine show={props.index >= 3}>high-level effects of TDD</FeatureLine> 
  </FeatureSlide>
)

