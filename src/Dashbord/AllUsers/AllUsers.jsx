
import { useQuery } from 'react-query';
import AllUserTable from './AllUserTable';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
    const handleUserDelete = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)

            })
    }
    const handlemakeAdmin = (user) => {
        console.log(user)
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)

            })
    }

    return (
        <div>
            {users.length}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role </th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <AllUserTable
                                key={user.email}
                                user={user}
                                index={index}
                                handleUserDelete={handleUserDelete}
                                handlemakeAdmin={handlemakeAdmin}
                            ></AllUserTable>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;