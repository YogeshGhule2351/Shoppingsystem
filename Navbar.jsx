import {
    Link,
    NavLink
} from "react-router-dom";


function Navbar({ cart }) {

    const cartCount = cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );


    return (

        <header className="navbar">

            <div className="nav-container">


                <Link
                    to="/"
                    className="logo"
                >
                    🛍️ ShopEase
                </Link>


                <nav>

                    <NavLink to="/">
                        Home
                    </NavLink>

                    <NavLink to="/products">
                        Products
                    </NavLink>

                    <NavLink to="/about">
                        About
                    </NavLink>

                    <NavLink
                        to="/cart"
                        className="cart-link"
                    >
                        🛒 Cart

                        {cartCount > 0 && (

                            <span className="cart-count">
                                {cartCount}
                            </span>

                        )}

                    </NavLink>

                </nav>

            </div>

        </header>

    );

}


export default Navbar;