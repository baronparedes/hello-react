import React from 'react';

export default class AppContent extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}