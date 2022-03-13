import React, { Component, Fragment } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    < Navigation />
                </header>
                <h1>contact</h1>
                <Footer/>
            </Fragment>
        );
    }
}

export default Contact;