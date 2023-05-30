
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Menu_Cover from '../../Component/Menu_Cover/Menu_Cover';
import bgimage from "../../assets/shop/banner2.jpg";
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../customHooks/useMenu';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Tab_Panel from '../../Component/TabPanel/Tab_Panel';

const Our_Shop = () => {

    const [menu] = useMenu()
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams()
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    // console.log(category)
    const dessert = menu.filter(popularMenu => popularMenu.category === "dessert")
    const salad = menu.filter(popularMenu => popularMenu.category === "salad")
    const pizza = menu.filter(popularMenu => popularMenu.category === "pizza")
    const soup = menu.filter(popularMenu => popularMenu.category === "soup")
    const drinks = menu.filter(popularMenu => popularMenu.category === "drinks")


  

    return (
        <div>
            <Helmet>
                <title>Order Now</title>
            </Helmet>
            <Menu_Cover
                img={bgimage}
                title={'OUR SHOP'}
                subTitle={'would you like to try a dish'}
            ></Menu_Cover>

            <Tabs  selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList
                    className=" mb-4 text-center space-x-3"
                >
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                    <Tab_Panel items={salad}></Tab_Panel>
                </TabPanel>
                <TabPanel>
                    <Tab_Panel items={pizza}></Tab_Panel>
                </TabPanel>
                <TabPanel>
                    <Tab_Panel items={soup}></Tab_Panel>
                </TabPanel>
                <TabPanel>
                    <Tab_Panel items={dessert}></Tab_Panel>
                </TabPanel>
                <TabPanel>
                    <Tab_Panel items={drinks}></Tab_Panel>
                </TabPanel>
               
            </Tabs>
        </div>
    );
};

export default Our_Shop;