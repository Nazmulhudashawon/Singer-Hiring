import './Singer.css'
import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Singerdetails from '../Singerdetails/Singerdetails';

import './Singer.css'

const Singer = () => {
    const [details, setDetails] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])
    const HandleCart = (singerDetails) => {
        const newCart = [...cart, singerDetails];
        setCart(newCart);
    };
    return (
        <div className="singer-container ">
            <div className="singer">
                {
                    details.map(detail => <Singerdetails singerDetails={detail} name={detail.name} HandleCart={HandleCart}></Singerdetails>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>


        </div>
    );
};

export default Singer;