import React, { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap'


function CarteImg() {
    const [galerie, setGalerie] = useState([
        {nom: "Nature", img: '../img/img_1.jpg' , navlink: '/gallery1'},
        {nom: "Portrait", img: '../img/img_2.jpg' , navlink: '/gallery2'},
        {nom: "People", img: '../img/img_3.jpg' , navlink: '/gallery1'},
        {nom: "Architecture", img: '../img/img_4.jpg' , navlink: '/gallery2'},
        {nom: "Animals", img: '../img/img_5.jpg' , navlink: '/gallery1'},
        {nom: "Sports", img: '../img/img_6.jpg' , navlink: '/gallery2'},
        {nom: "Travel", img: '../img/img_7.jpg' , navlink: '/gallery1'},
        {nom: "People", img: '../img/img_1.jpg' , navlink: '/gallery2'},
        {nom: "Architecture", img: '../img/img_2.jpg' , navlink: '/gallery1'}
    ])
    return (
        <Fragment>
                {galerie.map((el,i) => {
                    return(
                        <div className="col-md-4 mt-3 col-12">
                            <div className="carte">
                                <div className="box">
                                    <img key ={i} src={el.img} alt="" className="w-100" />
                                </div>
                                <div className="caption">
                                    <span className="titre">{el.nom}</span>
                                    <a className="btn" href = {el.navlink}> More photos</a>
                                </div>
                            </div>
                        </div>

                    )
                })}
        </Fragment>
    )
}

export default CarteImg;