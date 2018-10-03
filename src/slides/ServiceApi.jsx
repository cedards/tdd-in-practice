import React from 'react'
import {
  FeatureLine,
  FeatureSlide,
} from '../FeatureSlide'
import {
  Good
} from '../Highlight'

export const ApiFeature = props => (
  <FeatureSlide title="feature:" icon="code">
    <FeatureLine show={props.index >= 1}>When a user submits a cc application,</FeatureLine> 
    <FeatureLine show={props.index >= 1}>Then a request is sent to the credit check service</FeatureLine> 
  </FeatureSlide>
)

export const ApiTestDrive = props => (
  <FeatureSlide title="testdrive!" icon="code">
    <FeatureLine show={props.index >= 1}>In collaboration with the other team, write {props.index < 2 ? 'a test' : <Good>an executable spec</Good>}</FeatureLine> 
  </FeatureSlide>
)

export const BeTheChange = props => (
  <FeatureSlide title="other teams might not be on board" icon="hand-holding-heart">
    <FeatureLine show={props.index >=1}>Don't let that stop you.</FeatureLine>
    { props.index <= 2 &&
      <FeatureLine show={props.index === 2}>Prove your understanding of the docs with tests</FeatureLine>
    }
    { props.index === 3 &&
      <FeatureLine>Make other teams envious of your CI dashboard!</FeatureLine>
    }
  </FeatureSlide>
)
