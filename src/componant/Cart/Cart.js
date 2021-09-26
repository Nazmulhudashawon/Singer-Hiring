import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let totalCost = 0;
    let names = [];
    for (const singer of cart) {
        totalCost = totalCost + parseInt(singer.remuneration);
        names = singer;
    };

    return (

        <div className="cart">
            <h4>Total singer added: {props.cart.length}</h4>
            <h5>Total cost: <span>{totalCost}$</span></h5>

            <h5>{names.name}</h5>
            <img src={names.img} alt="" />

            <button className="btn btn-warning">Hire now</button>
        </div>


    );
};

export default Cart;