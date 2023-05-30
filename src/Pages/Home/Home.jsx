import { Helmet } from "react-helmet-async";
import Banner from "../../SharedLayout/Header/Banner";
import Chef_Recommends from "./Chef_Recommends/Chef_Recommends";
import Featured from "./Featured/Featured";
import Food_Category from "./Food_Category/Food_Category";
import Our_Menu from "./Our_Menu/Our_Menu";
import Testomonianl from "./Testomianls/Testomonianl";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
           <Banner></Banner>
           <Food_Category></Food_Category>
           <Our_Menu></Our_Menu>
           <Chef_Recommends></Chef_Recommends>
           <Featured></Featured>
           <Testomonianl></Testomonianl>
        </div>
    );
};

export default Home;