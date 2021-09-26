import React from 'react';
import './Singerdetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Singerdetails = (props) => {
    const { name, Listed, Birthplace, remuneration, img } = props.singerDetails;
    return (

        <div className="singerDetails">
            <div>
                <img src={img} alt="" />
                <h1>{name}</h1>
                <p>{Listed}</p>
                <p>Country: {Birthplace}</p>
                <h5>Remuneration: <span>{remuneration}$</span></h5>
                <button className="btn btn-warning" onClick={() => props.HandleCart(props.singerDetails)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>





    );
};

export default Singerdetails;