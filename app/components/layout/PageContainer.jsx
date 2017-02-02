'use strict';

import React from 'react';

export default class PageContainer extends React.Component {
    render() {
        return (
            <div className="container push-bottom">
                {this.props.children}
            </div>
        );
    }
}