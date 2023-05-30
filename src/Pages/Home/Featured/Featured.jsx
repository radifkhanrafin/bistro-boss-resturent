import featureBackground from "../../../assets/home/featured.jpg";
import Sectiona_title from "../../../Component/Section_Title/Sectiona_title";
import "./Featured.css"
const Featured = () => {
    return (
        <div className="featured-bg bg-fixed text-white  pt-8 my-20 ">
            <div className="bg-opacity-40 bg-black -mt-8">

                <div className="pt-12 "> <Sectiona_title
                    subTitle={'Check it out'}
                    Title={'FROM OUR MENU'}
                ></Sectiona_title>

                </div>

                <div className="flex flex-col md:flex-row gap-16 pb-36 px-36">
                    <div>
                        <img className="w-full md:w-[850px]" src={featureBackground} alt="banner" />
                    </div>
                    <div>
                        <p>March 20, 2023</p>
                        <p> WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </p>
                        <button className="btn btn-outline border-0 border-b-2">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;