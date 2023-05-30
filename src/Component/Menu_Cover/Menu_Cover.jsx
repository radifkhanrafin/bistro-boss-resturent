import { Parallax } from 'react-parallax';

const Menu_Cover = ({ img, title, subTitle }) => {
    return (
        <Parallax
        className='rounded-md'
            bgImage={img}
            blur={{ min: -35, max: 35 }}
            renderLayer={percentage => (
                <div
                    style={{
                        
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            <div className="hero h-[600px]" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center  text-white bg-black px-32 rounded-md py-12 bg-opacity-50">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl uppercase font-bold">{title}</h1>
                        <p className="mb-5 uppercase">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>


    );
};

export default Menu_Cover;