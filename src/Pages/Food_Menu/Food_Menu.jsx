import { Helmet } from 'react-helmet-async';
import menubgImage from "../../assets/menu/banner3.jpg";
import dessertbg from "../../assets/menu/dessert-bg.jpeg";
import pizzabg from "../../assets/menu/pizza-bg.jpg";
import saladbg from "../../assets/menu/salad-bg.jpg";
import soupbg from "../../assets/menu/soup-bg.jpg";
import Sectiona_title from '../../Component/Section_Title/Sectiona_title';
import Food_Category from './Food_Category/Food_Category';
import useMenu from '../../customHooks/useMenu';
import Menu_Cover from '../../Component/Menu_Cover/Menu_Cover';
const Food_Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(popularMenu => popularMenu.category === "offered")
    const dessert = menu.filter(popularMenu => popularMenu.category === "dessert")
    const salad = menu.filter(popularMenu => popularMenu.category === "salad")
    const pizza = menu.filter(popularMenu => popularMenu.category === "pizza")
    const soup = menu.filter(popularMenu => popularMenu.category === "soup")
    return (
        <div>
            <Helmet>
                <title>menu</title>
            </Helmet>

            <Menu_Cover
                img={menubgImage}
                title={"our menu"}
                subTitle={"would you like to try a dish"}
            ></Menu_Cover>

            <div>
                <Sectiona_title
                    subTitle={"don't miss"}
                    Title={"today's offer"}
                ></Sectiona_title>

                <Food_Category
                    items={offered}
                ></Food_Category>
            </div>

            {/* desserts  */}

            <Food_Category
                items={dessert}
                title='dessert'
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                img={dessertbg}
            ></Food_Category>

            {/* pizza  */}

            <Food_Category
                items={pizza}
                title='pizza'
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                img={pizzabg}
            ></Food_Category>

            {/* salad  */}

            <Food_Category
                items={salad}
                title='salad'
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                img={saladbg}
            ></Food_Category>


            {/* soups  */}

            <Food_Category
                items={soup}
                title='soup'
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                img={soupbg}
            ></Food_Category>

        </div>
    );
};

export default Food_Menu;