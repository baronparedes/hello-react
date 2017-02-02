'use strict';

import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap/lib'

export default class HeaderInfo extends React.Component {
    render() {
        return (
            <div id="hero-header">
                <Jumbotron>
                    <div className="container">
                        <h1>Hello, world!</h1>
                        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <p><Button bsStyle="primary">Learn more</Button></p>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}