import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageTwo extends Component {
    toPageOne() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>PageTwo</h3>
                <Link to = "/">PageOne</Link>
                <button onClick={this.toPageOne.bind(this)}>ToPageOne</button>
            </div>
        );
    }
}

export default PageTwo;