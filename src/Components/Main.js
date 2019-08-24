import React, { Component } from 'react';
import Header from "./Header"
import NavBar from "./NavBar"
import Image from "./Image"

class Main extends Component {
    state = { 
        score: 0,
        id_ary: [],
        high_score: 0
    }

    handleClick = image_id => {

        if (this.state.id_ary.includes(image_id)) {
            this.setState({
                ...this.state,
                id_ary: [],
                score: 0
            })
        }
        else {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    score: prevState.score+1,
                    id_ary: [...prevState.id_ary, image_id],
                    high_score: (prevState.high_score < prevState.score + 1) ?
                                prevState.score + 1 :
                                prevState.high_score
                }
            })
        }
    }

    render() { 
        console.log({...this.state});
        return ( 
            <section>
                <NavBar score={this.state.score} high_score={this.state.high_score} />
                <Header />
                <Image clickHandler={this.handleClick} />
            </section>
        );
    }
}
 
export default Main;