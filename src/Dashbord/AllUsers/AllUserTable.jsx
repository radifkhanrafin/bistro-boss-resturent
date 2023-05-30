import { FaTrashAlt, FaUsers } from "react-icons/fa";

const AllUserTable = ({ user, index, handleUserDelete ,handlemakeAdmin }) => {
 
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                {user.role === 'admin' ? 'Admin' : <button onClick={()=>handlemakeAdmin(user)}><FaUsers /></button>}
            </td>
            <td>
                <button onClick={()=>handleUserDelete(user)}> <FaTrashAlt /></button>
            </td>
        </tr>
    );
};

export default AllUserTable;