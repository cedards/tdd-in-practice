import React from 'react'
import {
  FeatureSlideFrame,
  FeatureSlideHeader,
  FeatureSlideContent,
  FeatureLine,
} from '../FeatureSlide'

export const NoteOnTooling = props => (
  <FeatureSlideFrame>
    <FeatureSlideHeader icon="cog"><i>be ruthless</i></FeatureSlideHeader>
    <FeatureSlideContent>
      <FeatureLine>your tests <i>must</i> be fast</FeatureLine>
      <FeatureLine>you <i>must</i> be able to run them on your machine</FeatureLine>
      <FeatureLine>the tradeoff is enormous</FeatureLine>
    </FeatureSlideContent>
  </FeatureSlideFrame>
)

