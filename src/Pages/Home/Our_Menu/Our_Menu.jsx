/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Sectiona_title from '../../../Component/Section_Title/Sectiona_title';
import useMenu from '../../../customHooks/useMenu';
import Menu_items from '../../../Component/Menu_items/Menu_items';

const Our_Menu = () => {
   const [menu]=useMenu();
//   console.log(menu)
   const popular=menu.filter(popularMenu=>popularMenu.category === "popular")
    // console.log(popular)
    return (
        <div>
            <Sectiona_title
            subTitle={'Check it out'}
            Title={'From Our Menu'}
            ></Sectiona_title>
            
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    popular.map(item=><Menu_items
                    key={item._id}
                    item={item}
                    ></Menu_items>)
                }
            </div>
        </div>
    );
};

export default Our_Menu;