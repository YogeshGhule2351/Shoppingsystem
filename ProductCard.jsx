import {
    Link
} from "react-router-dom";


function ProductCard({
    product,
    addToCart
}) {

    return (

        <div className="product-card">


            <Link
                to={`/products/${product.id}`}
            >

                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                />

            </Link>


            <div className="product-info">

                <span className="category">
                    {product.category}
                </span>


                <h3>
                    {product.name}
                </h3>


                <p className="rating">
                    ⭐ {product.rating}
                </p>


                <div className="product-bottom">

                    <strong>
                        ₹{product.price.toLocaleString()}
                    </strong>


                    <button
                        onClick={() =>
                            addToCart(product)
                        }
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        </div>

    );

}


export default ProductCard;