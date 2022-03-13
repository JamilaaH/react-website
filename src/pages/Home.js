import React, { Fragment } from 'react';
import CarteImg from '../components/CarteImg';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

function Home(props) {
    return (
        <Fragment>
            <Navigation/>
            <section className="galerie">
            <div className="container">
                <div className="row flex-wrap">
                    <CarteImg/>
                </div>
            </div>
            </section>
        <Footer/>
    </Fragment>
);
}

export default Home;