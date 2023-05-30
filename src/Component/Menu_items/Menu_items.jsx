/* eslint-disable no-unused-vars */
import React from 'react';


const Menu_items = ({ item }) => {
    const { name, recipe, image, price, category } = item;
    return (
        <div>
            <img src={image} alt="food" />
            <div className='flex gap-8 pr-8  justify-between items-center'>
                <div>
                    <p className='text-2xl '>{name} ------------------</p>
                    <p>{recipe}</p>
                </div>
                <p className='text-yellow-500'>{price}</p>
            </div>
        </div>
    );
};

export default Menu_items;