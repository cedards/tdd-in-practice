import React from 'react';

import { Icon } from './Icon'

const Row = props => <div class="row">{props.children}</div>

const cellStyle = (index, currentIndex) => {
  if(currentIndex < index) return '';
  if(currentIndex === index) return 'active';
  if(currentIndex > index) return 'complete';
}

const Cell = props => (
  <div class={`cell ${cellStyle(props.index, props.currentIndex)}`}>
    <Icon style={props.iconStyle}>{props.icon}</Icon>{props.iconText}
    {props.currentIndex >= props.index ? ' ' + props.children : ''}
  </div>
)

const Group = props => <div class={`group span-${props.span}`}>{props.children}</div>

const TableOfContents = props => (
  <div className="App">
    <Row>
      <Cell index={1} currentIndex={props.current} icon="info-circle">Introduction</Cell>
      <Cell index={2} currentIndex={props.current} icon="lightbulb">Thesis</Cell>
    </Row>
    <Row>
      <Group>
        <Cell index={3} currentIndex={props.current} icon="database">Databases</Cell>
        <Cell index={4} currentIndex={props.current} icon="sitemap">DBs as APIs</Cell>
        <Cell index={5} currentIndex={props.current} icon="custom-triangle">Test Pyramid</Cell>
      </Group>
      <Group>
        <Cell index={6} currentIndex={props.current} icon="code">Service APIs</Cell>
        <Cell index={7} currentIndex={props.current} icon="question">Uncertain requirements</Cell>
        <Cell index={8} currentIndex={props.current} icon="hand-holding-heart">Be the change</Cell>
      </Group>
      <Group>
        <Cell index={9} currentIndex={props.current} icon="project-diagram">Hard integrations</Cell>
        <Cell index={10} currentIndex={props.current} icon="users">Manual steps</Cell>
        <Cell index={11} currentIndex={props.current} icon="exchange-alt">Abstract tests</Cell>
      </Group>
    </Row>
    <Row>
      <Cell index={12} currentIndex={props.current} icon="cog">Tooling</Cell>
      <Cell index={13} currentIndex={props.current} icon="lightbulb">Thesis revisited</Cell>
    </Row>
    <Row>
      <Cell index={14} currentIndex={props.current} iconText="? !">Q&amp;A</Cell>
    </Row>
  </div>
);

export { TableOfContents };

