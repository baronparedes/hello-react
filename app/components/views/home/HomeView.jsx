'use strict';

import React from 'react';
import CardList from './CardList'
import HeaderInfo from '../../layout/HeaderInfo'
import { Panel } from 'react-bootstrap/lib'

export default class HomeView extends React.Component {
    render() {
        return (
            <div>
                <HeaderInfo />
                <Panel className="container">
                    Section
                </Panel>
                <CardList />
                <CardList />
            </div>
        );
    }
}