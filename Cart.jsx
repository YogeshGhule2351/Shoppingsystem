import {
    Link
} from "react-router-dom";


function Cart({
    cart,
    removeFromCart,
    updateQuantity
}) {


    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                item.price *
                item.quantity,
            0
        );


    if (cart.length === 0) {

        return (

            <section className="empty-cart">

                <div>

                    <div className="empty-icon">
                        🛒
                    </div>

                    <h1>
                        Your Cart is Empty
                    </h1>

                    <p>
                        Add some products to
                        your cart.
                    </p>


                    <Link
                        to="/products"
                        className="primary-btn"
                    >
                        Start Shopping
                    </Link>

                </div>

            </section>

        );

    }


    return (

        <section className="section cart-page">

            <h1>
                Shopping Cart
            </h1>


            <div className="cart-layout">


                {/* CART ITEMS */}

                <div className="cart-items">

                    {cart.map(item => (

                        <div
                            className="cart-item"
                            key={item.id}
                        >

                            <img
                                src={item.image}
                                alt={item.name}
                                loading="lazy"
                            />


                            <div className="cart-item-info">

                                <h3>
                                    {item.name}
                                </h3>

                                <p>
                                    ₹{item.price.toLocaleString()}
                                </p>


                                <div className="quantity">

                                    <button
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                -1
                                            )
                                        }
                                    >
                                        −
                                    </button>


                                    <span>
                                        {item.quantity}
                                    </span>


                                    <button
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                1
                                            )
                                        }
                                    >
                                        +
                                    </button>

                                </div>

                            </div>


                            <button
                                className="remove-btn"
                                onClick={() =>
                                    removeFromCart(
                                        item.id
                                    )
                                }
                            >
                                Remove
                            </button>

                        </div>

                    ))}

                </div>


                {/* SUMMARY */}

                <div className="cart-summary">

                    <h2>
                        Order Summary
                    </h2>


                    <div className="summary-row">

                        <span>
                            Items
                        </span>

                        <span>
                            {cart.reduce(
                                (sum, item) =>
                                    sum +
                                    item.quantity,
                                0
                            )}
                        </span>

                    </div>


                    <div className="summary-row total">

                        <span>
                            Total
                        </span>

                        <strong>
                            ₹{total.toLocaleString()}
                        </strong>

                    </div>


                    <button
                        className="checkout-btn"
                        onClick={() =>
                            alert(
                                "Checkout feature coming soon!"
                            )
                        }
                    >
                        Proceed to Checkout
                    </button>

                </div>

            </div>

        </section>

    );

}


export default Cart;