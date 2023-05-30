import Sectiona_title from "../../../Component/Section_Title/Sectiona_title";



const Chef_Recommends = () => {
    return (
        <div>
            <Sectiona_title
                subTitle={'Should Try'}
                Title={'CHEF RECOMMENDS'}
            ></Sectiona_title>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">


                    <div className="card w-96 bg-[#F3F3F3] shadow-xl">
                        <figure className="px-5 pt-10">
                            <img src=" https://i.ibb.co/sHrn4Dv/adam-bartoszewicz-fd5n2s-Zs-V5g-unsplash.jpg" alt="foods" className=" h-80 w-full" />
                        </figure>
                        <div className="bg-[#F3F3F3]">
                            <div className="card-body items-center text-center space-y-1">
                                <h2 className="card-title">Caeser Salad</h2>
                                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                                <div className="card-actions">
                                    <button className="bg-[#E8E8E8] w-48 h-11 rounded text-[#BB8506] hover:bg-[#1F2937]">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card w-96 bg-[#F3F3F3] shadow-xl">
                        <figure className="px-5 pt-10">
                            <img src=" https://i.ibb.co/PrFWY9R/ayesha-firdaus-c3es-Wyv-W3-E4-unsplash.jpg" alt="Shoes" className="h-80 w-full" />
                        </figure>
                        <div className="bg-[#F3F3F3]">
                            <div className="card-body items-center text-center space-y-1">
                                <h2 className="card-title">Caeser Salad</h2>
                                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                                <div className="card-actions">
                                    <button className="bg-[#E8E8E8] w-48 h-11 rounded text-[#BB8506] hover:bg-[#1F2937]">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card w-96 bg-[#F3F3F3] shadow-xl">
                        <figure className="px-5 pt-10">
                            <img src=" https://i.ibb.co/9YnDG2Z/alaundra-alford-Bm-Rb-JBoud-Dw-unsplash.jpg" alt="Shoes" className="h-80 w-full" />
                        </figure>
                        <div className="">
                            <div className="card-body items-center text-center space-y-1">
                                <h2 className="card-title">Caeser Salad</h2>
                                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                                <div className="card-actions">
                                    <button className="bg-[#E8E8E8] w-48 h-11 rounded text-[#BB8506] hover:bg-[#1F2937]">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef_Recommends;