import React, { Component } from 'react';
import Image from "./Image"

class Main extends Component {
    state = { 
        images: []
    }

    handleClick = () => {
        console.log("handle that click!");
        console.log(this);
    } 

    render() { 
        return ( 
            <section>
                <Image clickHandler={this.handleClick} />
            </section>
         );
    }
}
 
export default Main;