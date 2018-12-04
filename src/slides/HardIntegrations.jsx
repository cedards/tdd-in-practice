import React from 'react'
import {
  FeatureLine,
  FeatureSlide,
} from '../FeatureSlide'
import {
  Highlightable,
  Good,
} from '../Highlight'

const HighlightableSpan = Highlightable(props => <span {...props}/>)

export const HardIntegrationsFeature = props => (
  <FeatureSlide title={props.index >= 2 ? "what really matters?" : "feature:"} icon="project-diagram">
    <FeatureLine show={props.index >= 1}>Given a customer has applied,</FeatureLine> 
    <FeatureLine show={props.index >= 1}>When their app is approved,</FeatureLine> 
    <FeatureLine show={props.index >= 1}>Then <HighlightableSpan highlight={props.index >= 3 ? "good" : ""}>they receive an email that their card is on the way</HighlightableSpan>.</FeatureLine> 
  </FeatureSlide>
)

export const HardIntegrationsTestDrive = props => (
  <FeatureSlide title="test drive!" icon="project-diagram">
    <FeatureLine show={props.index >= 1}>Simulate app approval</FeatureLine> 
    <FeatureLine show={props.index >= 2}>Assert that{props.index < 3 ? '...what?' : <Good> an email is received at the address given in the app</Good>}</FeatureLine> 
  </FeatureSlide>
)

export const ManualStepsFeature = props => (
  <FeatureSlide title="feature:" icon="users">
    <FeatureLine show={props.index >= 1}>Given a customer has applied for a credit card,</FeatureLine> 
    <FeatureLine show={props.index >= 1}>When their app triggers exceptions,</FeatureLine> 
    { props.index <= 1 &&
      <FeatureLine show={props.index === 1}>Then it is sent to the credit office for manual review.</FeatureLine>
    }
    { props.index > 1 &&
      <FeatureLine highlight="good">Then a credit officer sees it in their manual review queue.</FeatureLine>
    }
  </FeatureSlide>
)

export const ManualStepsProblem = props => (
  <FeatureSlide title="problem:" icon="users" highlight="bad">
    <FeatureLine>The manual review queue cannot be driven programmatically :(</FeatureLine>
  </FeatureSlide>
)

export const ManualStepsWhatDo = props => (
  <FeatureSlide title="so what do you do?" icon="users">
    <FeatureLine show={props.index >= 1}>...your best.</FeatureLine>
  </FeatureSlide>
)

export const EnvironmentSpecificProblem = props => (
  <FeatureSlide title="what if my test is environment specific?" icon="exchange-alt">
    <FeatureLine show={props.index >= 1}>Assertions assume a dataset</FeatureLine>
    <FeatureLine show={props.index >= 2}>Steps only work in one env</FeatureLine>
  </FeatureSlide>
)

export const UsualTricks = props => (
  <FeatureSlide title="use the usual tricks" icon="exchange-alt" highlight="good">
    <FeatureLine>Function extraction in jasmine/jest/mocha</FeatureLine>
    <FeatureLine>Abstract classes in JUnit</FeatureLine>
  </FeatureSlide>
)

export const SameTechnique = props => (
  <FeatureSlide title="same technique:" icon="exchange-alt">
    <FeatureLine>running tests across envs with different datasets</FeatureLine>
    <FeatureLine>having local-app, deployed-app variants of browser tests</FeatureLine>
  </FeatureSlide>
)

export const SolidInTheWild = props => (
  <FeatureSlide title="for more on this:" icon="exchange-alt">
    <FeatureLine>SpringOne 2017 talk</FeatureLine>
    <FeatureLine>"SOLID in the Wild", on YouTube</FeatureLine>
  </FeatureSlide>
)

