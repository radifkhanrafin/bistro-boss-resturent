import { useContext } from "react";
import { AuthContext } from "../../AuthProvaiders/AuthProvaiders";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import useCart from "../../customHooks/useCart";

const Food_card = ({ item }) => {

  const { user } = useContext(AuthContext);
  const { name, recipe, image, price, _id } = item;
  const navigate = useNavigate();
  const [, refetch] = useCart();

  const handleAddToCart = (item) => {
    console.log(item)
    if (user) {
      const orderitems = { orderId: _id, name, image, price, email: user.email }

      fetch('http://localhost:5000/carts', {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(orderitems)
      })
        .then(res => res.json())
        .then(data => {

          console.log(data)

          if (data.insertedId) {

            refetch()
            let timerInterval
            Swal.fire({
              title: 'Auto close alert!',
              html: 'I will close in <b></b> milliseconds.',
              timer: 1000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                  b.textContent = Swal.getTimerLeft()
                }, 10)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
              }
            })
          }
        })


    }
    else {
      Swal.fire({
        title: 'Please  Login to cart Product',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')

        }
      })
    }

  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Foods" className="rounded-xl" />
      </figure>
      <p className="absolute top-0 right-0 bg-black text-white mt-4 mr-4">{price}</p>
      <div className="card-body items-center text-center space-y-4">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-300 border-yellow-800 text-yellow-700 border-0  border-b-2 w-64 mx-auto ml-6">Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default Food_card;