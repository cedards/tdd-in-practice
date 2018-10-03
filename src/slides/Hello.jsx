import React from 'react'
import { FeatureLine, FeatureSlide } from '../FeatureSlide'

export const Hello = props => (
  <FeatureSlide title="Hello!" icon="info-circle">
    <FeatureLine show={props.index >= 1}>David Edwards</FeatureLine> 
    <FeatureLine show={props.index >= 2}>Engineer, Pivotal Labs</FeatureLine> 
    <FeatureLine show={props.index >= 3}>Veteran TDDer</FeatureLine> 
  </FeatureSlide>
)
