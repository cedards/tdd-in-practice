import React from 'react'
import { FeatureSlide } from './FeatureSlide.jsx'
import { FeatureLine } from './FeatureLine.jsx'
import { TableOfContents } from './TableOfContents'

const slides = [
  <TableOfContents current={0}/>,
  <TableOfContents current={1}/>,
  // Hello 0
  // Hello 1 
  // Hello 2
  // Hello 3
  // Talk is not 0
  // Talk is not 1
  // Talk is not 2
  // Talk is not 3
  // Talk is 0
  // Talk is 1
  // Talk is 2
  // Talk is 2
  // TOC 1
  // TOC 2
  // A weird tangent
  // epistemology 0
  // epistemology ?
  // epistemology ??
  // epistemology ???
  // epistemology 0
  // epistemology 1
  // epistemology 2
  // epistemology 0
  // epistemology a
  // epistemology b
  // epistemology c
  // epistemology d
  // epistemology 0
  // epistemological attitude
  // epistemological attitude TM
  // epistemological attitude hashtag
  // tdd is the stance 0
  // tdd is the stance A
  // tdd is the stance B
  // thesis
  // TOC 2
  // TOC 3
  // db feature 0
  // db feature 1
  // db feature test drive 0
  // db feature test drive 1
  // db feature test drive 2
  // GRAPHICS
  // what really matters 0
  // what really matters highlight
  // what really matters how
  // what really matters why
  // db feature 0
  // db feature bad
  // db feature good 1
  // db feature good 2
  // GRAPHICS
  // TOC 3
  // TOC 4
  // integrating via db
  // GRAPHICS
  // thesis on persistence 0
  // thesis on persistence 1
  // thesis on persistence 2
  // GRAPHICS
  // thesis on persistence 2
  // TOC 4
  // TOC 5
  // unit vs. integration 0
  // unit vs. integration 1
  // unit vs. integration 2
  // GRAPHICS
  // why a pyramid 0
  // why a pyramid 1
  // GRAPHICS
  // not unit or integration
  // yes fast robust clear
  // TOC 5
  // TOC 6
  // api feature 0
  // api feature 1
  // GRAPHICS
  // thesis on service 0
  // thesis on service 1
  // test drive api feature 0
  // test drive api feature 1
  // example test 0
  // example test 1
  // GRAPHICS
  // contract test tools
  // TOC 6
  // TOC 7
  // test question 0
  // test question 1
  // test question 2
  // TOC 7
  // TOC 8
  // not on board 0
  // not on board 1
  // not on board 2
  // not on board 3
  // TOC 8
  // TOC 9
  // hard integration feature
  // hard integration test drive 0
  // hard integration test drive 1
  // GRAPHICS
  // what matters 0
  // what matters 1
  // hard integration test drive 2
  // GRAPHICS
  // thesis on email notifications 0
  // thesis on email notifications 1
  // TOC 9
  // TOC 10
  // manual steps feature 0
  // manual steps feature 1
  // manual steps problem
  // manual steps what do 0
  // manual steps what do 1
  // GRAPHICS
  // TOC 10
  // TOC 11
  // environment specific 0
  // environment specific 1
  // environment specific 2
  // usual tricks
  // GRAPHICS
  // example code contract
  // example code DEV
  // example code QA
  // same techniques
  // solid in the wild
  // TOC 11
  // TOC 12
  // be ruthless
  // TOC 12
  // TOC 13
  // epistemology reprise 0
  // epistemology reprise 1
  // epistemology reprise 2
  // epistemology impact
  // the first question 0
  // the first question 1
  // the first question 2
  // the first question 3
  // TOC 13
  // TOC 14
  // thanks
]

export { slides }
