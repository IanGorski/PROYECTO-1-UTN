import React from "react";

function ProductCard({ name, price }) {
    return (
        <div>
            <h2>{name}</h2>
            <span>El precio de mi producto es ${price - price * 0.21}</span>
        </div>
    );
}

export default ProductCard;

