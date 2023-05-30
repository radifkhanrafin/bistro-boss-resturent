
import { FaTrashAlt } from 'react-icons/fa';

const FoodTable = ({ row, index, handleDeleteItems }) => {
    const { name, image, price, _id } = row;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <img src={image} alt="food" />
            </td>
            <td>{name}</td>
            <td>${price} </td>
            <td>
                <button onClick={() => { handleDeleteItems(_id) }} className='bg-[#B91C1C] p-3 text-white rounded'><FaTrashAlt /></button>
            </td>
        </tr>
    );
};

export default FoodTable;