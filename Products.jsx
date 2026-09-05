import {
    useState
} from "react";

import products from "../data/products";

import ProductCard
    from "../components/ProductCard";


function Products({ addToCart }) {

    const [search, setSearch] =
        useState("");

    const [category, setCategory] =
        useState("All");


    const categories = [
        "All",
        "Electronics",
        "Fashion",
        "Accessories"
    ];


    const filteredProducts =
        products.filter(product => {

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    );


            const matchesCategory =
                category === "All" ||
                product.category === category;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    return (

        <section className="section products-page">

            <div className="page-heading">

                <h1>
                    All Products
                </h1>

                <p>
                    Explore our collection
                    of quality products.
                </p>

            </div>


            {/* SEARCH */}

            <div className="search-box">

                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={event =>
                        setSearch(
                            event.target.value
                        )
                    }
                />

                🔍

            </div>


            {/* CATEGORIES */}

            <div className="category-buttons">

                {categories.map(item => (

                    <button
                        key={item}
                        className={
                            category === item
                                ? "selected"
                                : ""
                        }
                        onClick={() =>
                            setCategory(item)
                        }
                    >
                        {item}
                    </button>

                ))}

            </div>


            {/* PRODUCTS */}

            {filteredProducts.length > 0 ? (

                <div className="product-grid">

                    {filteredProducts.map(
                        product => (

                            <ProductCard
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                            />

                        )
                    )}

                </div>

            ) : (

                <div className="empty">

                    <h2>
                        No products found
                    </h2>

                    <p>
                        Try another search.
                    </p>

                </div>

            )}

        </section>

    );

}


export default Products;