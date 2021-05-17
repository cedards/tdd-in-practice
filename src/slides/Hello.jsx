import React from 'react'
import { FeatureLine, FeatureSlide } from '../FeatureSlide'

export const Hello = props => (
  <FeatureSlide title="hello!" icon="info-circle">
    <FeatureLine show={props.index >= 1}>Cedar Edwards</FeatureLine>
    <FeatureLine show={props.index >= 2}>engineer, veteran TDDer</FeatureLine>
  </FeatureSlide>
)
