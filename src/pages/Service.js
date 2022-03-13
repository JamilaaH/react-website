import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

function Service() {
    return (
        <Fragment>
            <header>
            < Navigation />
            </header>
            <section>
                <div className="container">
                    <h2 className="text-center text-light titre">My Services</h2>
                </div>
            </section>
            <Footer/>
        </Fragment>
    );
}

export default Service;