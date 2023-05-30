import { Helmet } from "react-helmet-async";
import useCart from "../../customHooks/useCart";
import FoodTable from "../FoodTable/FoodTable";
import Swal from "sweetalert2";

const My_Cart = () => {
    const [cart , refetch] = useCart();
    const total = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
    }, 0);

    const handleDeleteItems = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(_id);
                fetch(`http://localhost:5000/carts/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }


    return (
        <div className="my-cart">
            <Helmet>
                <title>Dashbord | My Carts</title>
            </Helmet>
            <div className="flex justify-between mb-8">
                <h3 className="text-3xl font-semibold uppercase">Total orders :{cart.length}</h3>
                <h3 className="text-3xl font-semibold uppercase">Total orders :{total}</h3>
                <button className="btn btn-outline btn-success w-36">PAY</button>
            </div>

            <div className="overflow-x-auto  rounded-md w-full">
                <table className="table bg-transparent  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((row, index) => <FoodTable
                            key={row._id}
                            row={row}
                            index={index}
                            handleDeleteItems={handleDeleteItems}
                        ></FoodTable>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default My_Cart;