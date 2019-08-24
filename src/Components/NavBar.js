import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

export default class NavBar extends Component {
    render() { 
        return ( 
            <section>
                <Header as="h2" floated='left'>
                    Rememory
                </Header>
                <Header as="h2" floated='right'>
                    High Score: {this.props.high_score}
                </Header>
                <Header as="h2" floated='right'>
                    Score: {this.props.score}
                </Header>
            </section>
        );
    }
}