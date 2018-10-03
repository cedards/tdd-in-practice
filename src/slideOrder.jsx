import React from 'react'
import { TableOfContents } from './TableOfContents'
import { Hello } from './slides/Hello'
import { TalkIsNot, TalkIs } from './slides/TalkIsNot'
import {
  Epistemology,
  EpistemologySchools,
  EpistemologicalAttitude,
  TddStance,
  EpistemologyReprise,
  EpistemologyImpact,
  TheFirstQuestion,
} from './slides/Epistemology'
import { ThesisSlide } from './ThesisSlide'
import {
  DatabaseFeature,
  DbTestDrive,
  IntegratingViaDb,
  UnitVsIntegration,
  WhyAPyramid,
  NotUnitOrIntegration,
  YesFastRobustClear,
} from './slides/Databases'
import {
  ApiFeature,
  ApiTestDrive,
  BeTheChange,
} from './slides/ServiceApi'
import {
  HardIntegrationsFeature,
  HardIntegrationsTestDrive,
  ManualStepsFeature,
  ManualStepsProblem,
  ManualStepsWhatDo,
  EnvironmentSpecificProblem,
  UsualTricks,
  SameTechnique,
  SolidInTheWild,
} from './slides/HardIntegrations'
import { NoteOnTooling } from './slides/Tooling'

const slides = [
  <TableOfContents current={0}/>,
  <TableOfContents current={1}/>,
  <Hello index={0}/>,
  <Hello index={1}/>,
  <Hello index={2}/>,
  <Hello index={3}/>,
  <TalkIsNot index={0}/>,
  <TalkIsNot index={1}/>,
  <TalkIsNot index={2}/>,
  <TalkIsNot index={3}/>,
  <TalkIs index={0}/>,
  <TalkIs index={1}/>,
  <TalkIs index={2}/>,
  <TalkIs index={3}/>,
  <TableOfContents current={1}/>,
  <TableOfContents current={2}/>,
  // A weird tangent
  // epistemology 0
  // epistemology ?
  // epistemology ??
  // epistemology ???
  <Epistemology index={0}/>,
  <Epistemology index={1}/>,
  <Epistemology index={2}/>,
  <EpistemologySchools index={0}/>,
  <EpistemologySchools index={1}/>,
  <EpistemologySchools index={2}/>,
  <EpistemologySchools index={3}/>,
  <EpistemologySchools index={4}/>,
  <EpistemologySchools index={0}/>,
  <EpistemologicalAttitude index={0}/>,
  <EpistemologicalAttitude index={1}/>,
  <TddStance index={0}/>,
  <TddStance index={1}/>,
  <TddStance index={2}/>,
  <ThesisSlide/>,
  <TableOfContents current={2}/>,
  <TableOfContents current={3}/>,
  <DatabaseFeature index={0}/>,
  <DatabaseFeature index={1}/>,
  <DatabaseFeature index={2}/>,
  <DbTestDrive index={0}/>,
  <DbTestDrive index={1}/>,
  <DbTestDrive index={2}/>,
  // GRAPHICS
  <DbTestDrive index={3}/>,
  <DbTestDrive index={4}/>,
  // what really matters how
  // what really matters why
  <DatabaseFeature index={2}/>,
  <DatabaseFeature index={3}/>,
  <DatabaseFeature index={4}/>,
  <DatabaseFeature index={5}/>,
  // GRAPHICS
  <TableOfContents current={3}/>,
  <TableOfContents current={4}/>,
  <IntegratingViaDb/>,
  // GRAPHICS
  <ThesisSlide index={0}>is it true that persistence is working?</ThesisSlide>,
  <ThesisSlide index={1}>is it true that persistence is working?</ThesisSlide>,
  // GRAPHICS
  <ThesisSlide index={1}>is it true that persistence is working?</ThesisSlide>,
  <TableOfContents current={4}/>,
  <TableOfContents current={5}/>,
  <UnitVsIntegration index={0}/>,
  <UnitVsIntegration index={1}/>,
  // unit vs. integration 2
  // GRAPHICS
  <WhyAPyramid index={0}/>,
  <WhyAPyramid index={1}/>,
  // GRAPHICS
  <NotUnitOrIntegration/>,
  <YesFastRobustClear/>,
  <TableOfContents current={5}/>,
  <TableOfContents current={6}/>,
  <ApiFeature index={0}/>,
  <ApiFeature index={1}/>,
  // GRAPHICS
  <ThesisSlide index={0}>what should be true about the service?</ThesisSlide>,
  <ThesisSlide index={1}>what should be true about the service?</ThesisSlide>,
  <ApiTestDrive index={0}/>,
  <ApiTestDrive index={1}/>,
  <ApiTestDrive index={2}/>,
  // example test 0
  // example test 1
  // GRAPHICS
  // contract test tools
  <TableOfContents current={6}/>,
  <TableOfContents current={7}/>,
  // test question 0
  // test question 1
  // test question 2
  <TableOfContents current={7}/>,
  <TableOfContents current={8}/>,
  <BeTheChange index={0}/>,
  <BeTheChange index={1}/>,
  <BeTheChange index={2}/>,
  <BeTheChange index={3}/>,
  <TableOfContents current={8}/>,
  <TableOfContents current={9}/>,
  <HardIntegrationsFeature index={0}/>,
  <HardIntegrationsFeature index={1}/>,
  <HardIntegrationsTestDrive index={0}/>,
  <HardIntegrationsTestDrive index={1}/>,
  <HardIntegrationsTestDrive index={2}/>,
  // GRAPHICS
  <HardIntegrationsFeature index={2}/>,
  <HardIntegrationsFeature index={3}/>,
  <HardIntegrationsTestDrive index={3}/>,
  // GRAPHICS
  <ThesisSlide index={0}>is it true that customers get notified by email upon approval?</ThesisSlide>
  <ThesisSlide index={1}>is it true that customers get notified by email upon approval?>,
  // thesis on email notifications 0
  // thesis on email notifications 1
  <TableOfContents current={9}/>,
  <TableOfContents current={10}/>,
  <ManualStepsFeature index={0}/>,
  <ManualStepsFeature index={1}/>,
  <ManualStepsFeature index={2}/>,
  <ManualStepsProblem/>,
  <ManualStepsWhatDo index={0}/>,
  <ManualStepsWhatDo index={1}/>,
  // GRAPHICS
  <TableOfContents current={10}/>,
  <TableOfContents current={11}/>,
  <EnvironmentSpecificProblem index={0}/>,
  <EnvironmentSpecificProblem index={1}/>,
  <EnvironmentSpecificProblem index={2}/>,
  <UsualTricks/>,
  // GRAPHICS
  // example code contract
  // example code DEV
  // example code QA
  <SameTechnique/>,
  <SolidInTheWild/>,
  <TableOfContents current={11}/>,
  <TableOfContents current={12}/>,
  <NoteOnTooling/>,
  <TableOfContents current={12}/>,
  <TableOfContents current={13}/>,
  <EpistemologyReprise index={0}/>,
  <EpistemologyReprise index={1}/>,
  <EpistemologyReprise index={2}/>,
  <EpistemologyImpact/>,
  <TheFirstQuestion index={0}/>,
  <TheFirstQuestion index={1}/>,
  <TheFirstQuestion index={2}/>,
  <TheFirstQuestion index={3}/>,
  <TableOfContents current={13}/>,
  <TableOfContents current={14}/>,
]

export { slides }
