import { useState } from "react";
import Menu_items from "../../../Component/Menu_items/Menu_items";
import Food_Categorry_Cover from "../Food_Categorry_Cover/Food_Categorry_Cover";
import { Link } from "react-router-dom";
const Food_Category = ({ items, title, subTitle, img }) => {
    const [seeAll, setseeAll] = useState(true);
    return (
        <div>
            {
                title && <Food_Categorry_Cover img={img} title={title} subTitle={subTitle}></Food_Categorry_Cover>
            }
            <div>
                <div className='grid md:grid-cols-2  my-8 gap-6'>
                    {
                        seeAll ?
                            <>
                                {
                                    items.slice(0, 6).map(item => <Menu_items
                                        key={item._id}
                                        item={item}
                                    ></Menu_items>)
                                }
                            </> :
                            <>
                                {
                                    items.map(item => <Menu_items
                                        key={item._id}
                                        item={item}
                                    ></Menu_items>)
                                }
                            </>
                    }
                </div>
                <div className="text-center my-5">
                    {
                        items.length > 4 ? <button className="btn btn-outline border-0 hover:bg-gray-600 border-b-2 w-64 mx-auto" onClick={() => setseeAll(!seeAll)}>{seeAll ? "See more food" : "See less "}</button> : ''
                    }
                    <Link to={`/our_shop/${title}`}>
                        <button className="btn btn-outline  border-0 hover:bg-violet-600 border-b-2 w-64 mx-auto ml-6" >Oredr Now</button>
                    </Link>

                </div>
            </div>
        </div>

    );
};

export default Food_Category;