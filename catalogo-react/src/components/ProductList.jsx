import React from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css"; // Import the CSS for ProductList

const ProductList = ({ productos }) => {
    return (
        <section className="product-list-section">
            <div className="container">
                <h2 className="section-title">Nuestros Productos</h2>
                <div className="products-grid">
                    {productos.map((producto) => (
                        <ProductCard key={producto.id} producto={producto} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;
