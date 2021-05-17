import React from 'react'
import {
  FeatureLine,
  FeatureSlide,
  FeatureSlideContent,
  FeatureSlideHeader,
  FeatureSlideFrame
} from '../FeatureSlide'
import { FloatingElement } from '../FloatingElement'

const QMark1 = props => (
  <FloatingElement show={props.index >= 1 && props.index < 4} highlight="bad" offsetY={props.y} offsetX={props.x}>?</FloatingElement>
)
const QMark2 = props => (
  <FloatingElement show={props.index >= 2 && props.index < 4} highlight="bad" offsetY={props.y} offsetX={props.x}>?</FloatingElement>
)
const QMark3 = props => (
  <FloatingElement show={props.index === 3} highlight="bad" offsetY={props.y} offsetX={props.x}>?</FloatingElement>
)

export const Epistemology = props => (
  <FeatureSlide title="epistemology" icon="lightbulb">
    <QMark1 index={props.index} y="100px" x="100px"/>
    <QMark1 index={props.index} y="0px" x="420px"/>
    <QMark1 index={props.index} y="0px" x="820px"/>
    <QMark1 index={props.index} y="350px" x="620px"/>
    <QMark1 index={props.index} y="400px" x="360px"/>
    <QMark1 index={props.index} y="70px" x="1020px"/>

    <QMark2 index={props.index} y="100px" x="300px"/>
    <QMark2 index={props.index} y="40px" x="620px"/>
    <QMark2 index={props.index} y="0px" x="820px"/>

    <QMark2 index={props.index} y="600px" x="600px"/>
    <QMark2 index={props.index} y="500px" x="800px"/>
    <QMark2 index={props.index} y="300px" x="500px"/>
    <QMark2 index={props.index} y="500px" x="400px"/>
    <QMark2 index={props.index} y="450px" x="700px"/>
    <QMark2 index={props.index} y="450px" x="100px"/>

    <QMark2 index={props.index} y="250px" x="1000px"/>
    <QMark2 index={props.index} y="350px" x="800px"/>
    <QMark2 index={props.index} y="450px" x="900px"/>
    <QMark2 index={props.index} y="550px" x="1200px"/>

    <QMark2 index={props.index} y="150px" x="1100px"/>
    <QMark2 index={props.index} y="250px" x="1200px"/>
    <QMark2 index={props.index} y="350px" x="1300px"/>
    <QMark2 index={props.index} y="450px" x="1000px"/>

    <FloatingElement show={props.index === 3} offsetX="500px" offsetY="325px"><img src="images/epistemology.png" width="800px"/></FloatingElement>
    <QMark3 index={props.index} y="360px" x="620px"/>
    <QMark3 index={props.index} y="360px" x="690px"/>
    <QMark3 index={props.index} y="410px" x="570px"/>
    <QMark3 index={props.index} y="410px" x="740px"/>
    <QMark3 index={props.index} y="460px" x="620px"/>
    <QMark3 index={props.index} y="460px" x="690px"/>

    <FeatureLine show={props.index >= 4 && props.index < 6}>studies the nature of knowledge</FeatureLine> 
    <FeatureLine show={props.index >= 5 && props.index < 6}>"how do we know that we know?"</FeatureLine> 

    <FloatingElement show={props.index >= 6} offsetY="350px" offsetX="500px">empiricism</FloatingElement>
    <FloatingElement show={props.index >= 7} offsetY="250px" offsetX="1000px">constructivism</FloatingElement>
    <FloatingElement show={props.index >= 8} offsetY="0px" offsetX="750px">rationalism</FloatingElement>
    <FloatingElement show={props.index >= 9} offsetY="60px" offsetX="350px">idealism</FloatingElement>
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
      <FeatureLine show={props.index === 1}>the only things that are true<br/>are things that have been<br/><b><i>proven</i></b></FeatureLine> 
    }
    { props.index === 2 && 
      <FeatureLine>the only things that are proven<br/>are things that have been<br/><b><i>demonstrated</i></b></FeatureLine> 
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
    <FeatureLine>how product managers write<br/>user stories</FeatureLine>
    <FeatureLine>how teams document their APIs<br/><br/></FeatureLine>
  </FeatureSlide>
)

export const TheFirstQuestion = props => (
  <FeatureSlide title="epistemology of TDD" icon="lightbulb">
    <FeatureLine>the first question:</FeatureLine>
    { props.index <= 1 &&
      <FeatureLine show={props.index === 1} highlight="good">how will we prove that it worked?<br/><br/><br/></FeatureLine>
    }
    { props.index === 2 &&
      <FeatureLine highlight="bad">what is the correct call we have to make to service X?<br/><br/></FeatureLine>
    }
    { props.index === 3 &&
      <FeatureLine highlight="good">how will we prove that we have called service X correctly?<br/><br/></FeatureLine>
    }
    { props.index === 4 &&
      <FeatureLine highlight="bad">how will we make the service performant under load?<br/><br/></FeatureLine>
    }
    { props.index === 5 &&
      <FeatureLine highlight="good">how will we prove that the service is performant under load?<br/><br/></FeatureLine>
    }
    { props.index === 6 &&
      <FeatureLine highlight="bad">how will we handle disaster recovery?<br/><br/></FeatureLine>
    }
    { props.index === 7 &&
      <FeatureLine highlight="good">how will we prove that we can recover from disasters?<br/><br/></FeatureLine>
    }
  </FeatureSlide>
)
