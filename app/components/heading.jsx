import React from 'react';

class Heading extends React.Component {
  render() {
    return <div className="panel-heading">Hello! {this.props.name}</div>;
  }
}

export default Heading;