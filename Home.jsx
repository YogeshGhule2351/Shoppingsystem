import {
    Link
} from "react-router-dom";

import products from "../data/products";

import ProductCard
    from "../components/ProductCard";


function Home({ addToCart }) {

    const featuredProducts =
        products.slice(0, 4);


    return (

        <div>


            {/* HERO */}

            <section className="hero">

                <div className="hero-content">

                    <span>
                        WELCOME TO SHOPEASE
                    </span>


                    <h1>
                        Find Products
                        <br />
                        You Love.
                    </h1>


                    <p>
                        Discover quality products
                        at great prices.
                    </p>


                    <Link
                        to="/products"
                        className="primary-btn"
                    >
                        Shop Now →
                    </Link>

                </div>

            </section>


            {/* CATEGORIES */}

            <section className="section">

                <h2>
                    Shop by Category
                </h2>


                <div className="categories">

                    <Link to="/products">
                        📱
                        <span>
                            Electronics
                        </span>
                    </Link>


                    <Link to="/products">
                        👕
                        <span>
                            Fashion
                        </span>
                    </Link>


                    <Link to="/products">
                        🎒
                        <span>
                            Accessories
                        </span>
                    </Link>

                </div>

            </section>


            {/* FEATURED PRODUCTS */}

            <section className="section">

                <div className="section-header">

                    <h2>
                        Featured Products
                    </h2>


                    <Link to="/products">
                        View All →
                    </Link>

                </div>


                <div className="product-grid">

                    {featuredProducts.map(
                        product => (

                            <ProductCard
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                            />

                        )
                    )}

                </div>

            </section>


            {/* WHY US */}

            <section className="features">

                <div>

                    <span>🚚</span>

                    <h3>
                        Fast Delivery
                    </h3>

                    <p>
                        Quick and reliable
                        delivery.
                    </p>

                </div>


                <div>

                    <span>🔒</span>

                    <h3>
                        Secure Shopping
                    </h3>

                    <p>
                        Your information is
                        protected.
                    </p>

                </div>


                <div>

                    <span>⭐</span>

                    <h3>
                        Quality Products
                    </h3>

                    <p>
                        Carefully selected
                        products.
                    </p>

                </div>

            </section>

        </div>

    );

}


export default Home;