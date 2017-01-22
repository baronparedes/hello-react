'use strict';

import React from 'react';

export default class PageSection extends React.Component {
    render() {
        return (
            <section id={this.props.id}>
                {this.props.children}
            </section>
        );
    }
}