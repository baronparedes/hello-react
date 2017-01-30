import React from 'react';
import PageSection from './layout/PageSection'
import CardView from './views/CardView'

import { Panel } from 'react-bootstrap/lib'


export default class AppContent extends React.Component {
  render() {
    return (
      <div>
        <Panel className="container">
          Section
        </Panel>
        <CardView />
        <CardView />
      </div>
    );
  }
}