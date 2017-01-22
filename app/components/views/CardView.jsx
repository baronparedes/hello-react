'use strict';

import React from 'react';
import Card from '../layout/Card'
import { Grid, Row, Col } from 'react-bootstrap/lib'

export default class PageSection extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={6} md={4}>
                        <Card>Card 1</Card>
                    </Col>
                    <Col sm={6} md={4}>
                        <Card>Card 2</Card>
                    </Col>
                    <Col sm={6} md={4}>
                        <Card>Card 3</Card>
                    </Col>
                </Row>
            </Grid>
        );
    }
}