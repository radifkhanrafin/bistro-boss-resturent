

const Sectiona_title = ({subTitle , Title}) => {
    return (
        <div className="text-center my-12">
            <h6 className='text-yellow-500'>--- {subTitle} ---</h6>
            <hr className="w-[400px] mx-auto mt-3 border-y-2 border-gray-300" />
            <h1 className="text-4xl uppercase">{Title}</h1>
            <hr className="w-[400px] mx-auto mt-3 border-y-2 border-gray-300" />
        </div>
    );
};

export default Sectiona_title;