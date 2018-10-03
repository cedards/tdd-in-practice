import React from 'react'
import {
  FeatureLine,
  FeatureSlide,
  FeatureSlideContent,
  FeatureSlideHeader,
  FeatureSlideFrame
} from '../FeatureSlide'

export const Epistemology = props => (
  <FeatureSlide title="epistemology" icon="lightbulb">
    <FeatureLine show={props.index >= 1}>studies the nature of knowledge</FeatureLine> 
    <FeatureLine show={props.index >= 2}>"how do we know that we know?"</FeatureLine> 
  </FeatureSlide>
)

export const EpistemologySchools = props => (
  <FeatureSlide title="epistemology" icon="lightbulb">
    <FeatureLine show={props.index >= 1}>empiricism</FeatureLine> 
    <FeatureLine show={props.index >= 2}>constructivism</FeatureLine> 
    <FeatureLine show={props.index >= 3}>rationalism</FeatureLine> 
    <FeatureLine show={props.index >= 4}>idealism</FeatureLine> 
  </FeatureSlide>
)

export const EpistemologicalAttitude = props => (
  <FeatureSlideFrame>
    <FeatureSlideHeader icon="lightbulb">TDD is an<br/><i>epistemological attitude</i>{props.index>0 ? '™' : ''}</FeatureSlideHeader>
    <FeatureSlideContent>
      <FeatureLine show={props.index >= 1}>#TddIsAnEpistemologicalAttitude</FeatureLine> 
    </FeatureSlideContent>
  </FeatureSlideFrame>
)

export const TddStance = props => (
  <FeatureSlide title="TDD is the stance that" icon="lightbulb">
    { props.index <= 1 && 
      <FeatureLine show={props.index === 1}>the only things that are true are things that have been <b><i>proven</i></b></FeatureLine> 
    }
    { props.index === 2 && 
      <FeatureLine>the only things that are proven are things that have been <b><i>demonstrated</i></b></FeatureLine> 
    }
  </FeatureSlide>
)

export const EpistemologyReprise = props => (
  <FeatureSlide title="epistemology of TDD" icon="lightbulb">
    <FeatureLine show={props.index >= 1}>everything important must be proven by demonstration</FeatureLine>
    <FeatureLine show={props.index >= 2}>this shapes how we discuss and make decisions</FeatureLine>
  </FeatureSlide>
)

export const EpistemologyImpact = props => (
  <FeatureSlide title="epistemology of TDD" icon="lightbulb">
    <FeatureLine>how product managers write user stories</FeatureLine>
    <FeatureLine>how teams document their APIs</FeatureLine>
  </FeatureSlide>
)

export const TheFirstQuestion = props => (
  <FeatureSlide title="epistemology of TDD" icon="lightbulb">
    <FeatureLine>the first question:</FeatureLine>
    { props.index <= 1 &&
      <FeatureLine show={props.index === 1} highlight="good">how will we prove that it worked?</FeatureLine>
    }
    { props.index === 2 &&
      <FeatureLine highlight="bad">what is the correct we have to make to service X?</FeatureLine>
    }
    { props.index === 3 &&
      <FeatureLine highlight="good">how will we prove that we have called service X correctly?</FeatureLine>
    }
  </FeatureSlide>
)
