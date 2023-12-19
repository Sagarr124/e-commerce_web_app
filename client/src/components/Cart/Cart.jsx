import { useSelector, useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

import { makeRequest } from "../../utils/makeRequest";
import { removeItemFromCart, resetCart } from "../../redux/cartReducer";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import "./Cart.scss";

const Cart = () => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products?.forEach((item) => (total += item.quantity * item.price));
        return total.toFixed(2);
    };

    const stripePromise = loadStripe(
        "pk_test_51OOlMVCpU5nJql0UxUNs3kX6yHpdPwFjZUUmHZWD7kTSmkyh50JD1lPEc65lFze6IuXrqGF6IXOJqyS18zL1uPgG009PTdY1DO"
    );

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;

            const response = await makeRequest.post("/orders", {
                products,
            });

            await stripe.redirectToCheckout({
                sessionId: response.data.stripeSession.id,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {products?.map((item) => (
                <div className="item" key={item.id}>
                    <img
                        src={process.env.REACT_APP_UPLOAD_URL + item.img}
                        alt=""
                    />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 20)}</p>
                        <div className="price">
                            {item.quantity} x ${item.price}
                        </div>
                    </div>
                    <DeleteOutlinedIcon
                        className="delete"
                        onClick={() => dispatch(removeItemFromCart(item.id))}
                    />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>
                Reset Cart
            </span>
        </div>
    );
};

export default Cart;
