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
      <Cell index={1} currentIndex={props.current} icon="info-circle">introduction</Cell>
      <Cell index={2} currentIndex={props.current} icon="lightbulb">thesis</Cell>
    </Row>
    <Row>
      <Group>
        <Cell index={3} currentIndex={props.current} icon="database">databases</Cell>
        <Cell index={4} currentIndex={props.current} icon="sitemap">DBs as APIs</Cell>
        <Cell index={5} currentIndex={props.current} icon="custom-triangle">test pyramid</Cell>
      </Group>
      <Group>
        <Cell index={6} currentIndex={props.current} icon="code">service APIs</Cell>
        <Cell index={7} currentIndex={props.current} icon="question">uncertain reqs</Cell>
        <Cell index={8} currentIndex={props.current} icon="hand-holding-heart">be the change</Cell>
      </Group>
      <Group>
        <Cell index={9} currentIndex={props.current} icon="project-diagram">hard integrations</Cell>
        <Cell index={10} currentIndex={props.current} icon="users">manual steps</Cell>
        <Cell index={11} currentIndex={props.current} icon="exchange-alt">abstract tests</Cell>
      </Group>
    </Row>
    <Row>
      <Cell index={12} currentIndex={props.current} icon="cog">tooling</Cell>
      <Cell index={13} currentIndex={props.current} icon="lightbulb">thesis revisited</Cell>
    </Row>
    <Row>
      <Cell index={14} currentIndex={props.current} iconText="? !">q&amp;a</Cell>
    </Row>
  </div>
);

export { TableOfContents };

