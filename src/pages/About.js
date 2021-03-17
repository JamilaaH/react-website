import React, { Component, Fragment } from 'react';
import Navigation from '../components/Navigation';

class About extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    < Navigation />
                </header>
                <h1>About</h1>
            </Fragment>
        );
    }
}

export default About;