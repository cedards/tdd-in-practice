import React from 'react'
import {
  FeatureLine,
  FeatureSlide,
  FeatureSlideContent,
  FeatureSlideHeader,
  FeatureSlideFrame,
} from '../FeatureSlide'
import { Good } from '../Highlight'
import { Icon } from '../Icon'
import { FloatingElement } from '../FloatingElement'

const featureSecondLine = index => {
  switch(index) {
    case 0:
    case 1:
    case 2:
      return <FeatureLine show={index === 2}>Then their application is saved to the database</FeatureLine> 
    case 3:
      return <FeatureLine highlight="bad">Then their application is saved to the database</FeatureLine> 
    case 4:
      return <FeatureLine highlight="good">Then an auditor can access their submission</FeatureLine> 
    case 5:
      return <FeatureLine highlight="good">Then a BA can see their submission in queries</FeatureLine> 
  }
}

export const DatabaseFeature = props => (
  <FeatureSlide title="feature:" icon="database">
    <FeatureLine show={props.index >= 1}>When a user submits a cc application,</FeatureLine> 
    { featureSecondLine(props.index) }
  </FeatureSlide>
)

export const DbTestDrive = props => (
  <FeatureSlide title={props.index < 3 ? "test drive!" : "what really matters?"} icon="database">
    <FeatureLine show={props.index >= 1}>Submit the application</FeatureLine> 
    <FeatureLine show={props.index >= 2}>Assert that{ props.index < 4 && '...?'}
      <Good show={props.index >= 4}> the application can be fetched from storage</Good>
    </FeatureLine>
    <FloatingElement show={props.index >= 5} highlight="spot" offsetY="500px" offsetX="200px">how?</FloatingElement>
    <FloatingElement show={props.index >= 6} highlight="spot" offsetY="650px" offsetX="100px"><b>why?</b></FloatingElement>
  </FeatureSlide>
)

export const IntegratingViaDb = props => (
  <FeatureSlide title="integrating via the database" icon="sitemap"/>
)

export const UnitVsIntegration = props => (
  <FeatureSlide title="unit vs. integration:" icon="custom-triangle">
    <FeatureLine show={props.index >= 1}>The testing pyramid says you should have many unit tests, fewer integration tests</FeatureLine> 
  </FeatureSlide>
)

export const WhyAPyramid = props => (
  <FeatureSlideFrame>
    <FeatureSlideHeader icon="">why a {'\u00A0'}<Icon>custom-triangle</Icon>?</FeatureSlideHeader>
    <FeatureSlideContent>
      <FeatureLine show={props.index >= 1}>The testing pyramid is a heuristic to help you create a <Good>fast, robust, clear</Good> suite</FeatureLine> 
    </FeatureSlideContent>
  </FeatureSlideFrame>
)

export const NotUnitOrIntegration = props => (
  <FeatureSlide title='"unit or integration"' icon="times" highlight="bad"/>
)

export const YesFastRobustClear = props => (
  <FeatureSlide title='"fast, robust, clear"' icon="check" highlight="good"/>
)
