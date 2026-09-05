import { useState } from "react";

import {
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import About from "./pages/About";


function App() {

    const [cart, setCart] = useState([]);


    // ==============================
    // ADD PRODUCT TO CART
    // ==============================

    const addToCart = (product) => {

        setCart((currentCart) => {

            const existingProduct =
                currentCart.find(
                    item => item.id === product.id
                );


            if (existingProduct) {

                return currentCart.map(item =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                );

            }


            return [
                ...currentCart,
                {
                    ...product,
                    quantity: 1
                }
            ];

        });

    };


    // ==============================
    // REMOVE PRODUCT
    // ==============================

    const removeFromCart = (id) => {

        setCart(currentCart =>
            currentCart.filter(
                item => item.id !== id
            )
        );

    };


    // ==============================
    // UPDATE QUANTITY
    // ==============================

    const updateQuantity = (id, change) => {

        setCart(currentCart =>

            currentCart
                .map(item => {

                    if (item.id === id) {

                        return {
                            ...item,
                            quantity:
                                item.quantity + change
                        };

                    }

                    return item;

                })
                .filter(item => item.quantity > 0)

        );

    };


    return (

        <>

            <Navbar cart={cart} />


            <main>

                <Routes>

                    <Route
                        path="/"
                        element={
                            <Home
                                addToCart={addToCart}
                            />
                        }
                    />


                    <Route
                        path="/products"
                        element={
                            <Products
                                addToCart={addToCart}
                            />
                        }
                    />


                    <Route
                        path="/products/:id"
                        element={
                            <ProductDetails
                                addToCart={addToCart}
                            />
                        }
                    />


                    <Route
                        path="/cart"
                        element={
                            <Cart
                                cart={cart}
                                removeFromCart={
                                    removeFromCart
                                }
                                updateQuantity={
                                    updateQuantity
                                }
                            />
                        }
                    />


                    <Route
                        path="/about"
                        element={<About />}
                    />


                    <Route
                        path="*"
                        element={
                            <div className="not-found">

                                <h1>
                                    404
                                </h1>

                                <p>
                                    Page not found.
                                </p>

                            </div>
                        }
                    />

                </Routes>

            </main>


            <Footer />

        </>

    );

}


export default App;