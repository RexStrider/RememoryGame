import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default class Title extends Component {
    // state = {  }
    render() { 
        return ( 
                <Header as="h1" textAlign='center'>
                    Remember Your Clicks!
                </Header>
         );
    }
}