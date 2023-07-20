import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {

    const { name, recipe, image, price, _id } = item;
    const { user } = useContext(AuthContext);
    const location = useLocation();

    const [, refetch] = useCart();

    const navigate = useNavigate();

    const handleAddToCart = item => {
        console.log(item);
        const cartItem = {menuItemId: _id, name, image, price, email: user.email}
        fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type' : "application/json"
            },
            body: JSON.stringify(cartItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (user) {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added to cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                }
                else {
                    Swal.fire({
                        title: 'Please login to order the food',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Login Now'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/login', {state: {from: location}})
                        }
                    })
                }
            })
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 m-4 px-4 py-2 rounded text-white bg-slate-900 ">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>

                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;