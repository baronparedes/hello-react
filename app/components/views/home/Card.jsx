'use strict';

import React from 'react';
import { Well } from 'react-bootstrap/lib'

export default class Card extends React.Component {
    render() {
        return (
            <Well bsSize="lg" className="thumbnail">
                {this.props.children}
            </Well>
        );
    }
}