'use strict';

import React from 'react';

export default class PageSection extends React.Component {
    render() {
        return (
            <div className="icon-container">
                <a href={this.props.href} className="btn-social btn-outline">
                    <i className={this.props.fa}></i>
                </a>
            </div>

        );
    }
}
