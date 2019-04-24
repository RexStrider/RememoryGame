import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( 
            <nav>
                <ul>
                    <li>Rememory</li>
                    <li>Score: {this.props.score}</li>
                    <li>High Score: {this.props.high_score}</li>
                </ul>
            </nav>
         );
    }
}
 
export default NavBar;