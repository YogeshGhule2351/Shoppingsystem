import {
    useParams,
    Link
} from "react-router-dom";

import products from "../data/products";


function ProductDetails({ addToCart }) {

    const { id } = useParams();


    const product =
        products.find(
            item => item.id === Number(id)
        );


    if (!product) {

        return (

            <section className="not-found">

                <h1>
                    Product Not Found
                </h1>

                <Link to="/products">
                    Back to Products
                </Link>

            </section>

        );

    }


    return (

        <section className="product-details">

            <div className="details-image">

                <img
                    src={product.image}
                    alt={product.name}
                />

            </div>


            <div className="details-content">

                <span className="category">
                    {product.category}
                </span>


                <h1>
                    {product.name}
                </h1>


                <p className="details-rating">
                    ⭐ {product.rating} / 5
                </p>


                <h2>
                    ₹{product.price.toLocaleString()}
                </h2>


                <p className="description">
                    {product.description}
                </p>


                <button
                    className="primary-btn"
                    onClick={() =>
                        addToCart(product)
                    }
                >
                    🛒 Add to Cart
                </button>


                <Link
                    to="/products"
                    className="back-link"
                >
                    ← Back to Products
                </Link>

            </div>

        </section>

    );

}


export default ProductDetails;