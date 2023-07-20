import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";

const MyCart = () => {
    const [cart] = useCart();

    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className="m-12">
                <h2 className="text-3xl">Total Items : {cart.length}</h2>
                <h2 className="text-3xl">Total Price: ${total}</h2>
                <button className="btn btn-warning btn-sm">PAY</button>
            </div>
        </div>
    );
};

export default MyCart;