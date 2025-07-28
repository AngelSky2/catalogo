import React from "react";
import './../styles/ProductCard.css'; // Import the CSS for ProductCard

const ProductCard = ({ producto }) => {
  return (
    <div className="product-card">
      <img src={producto.imagen} alt={producto.nombre} />
      <div className="product-info">
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <div className="product-footer">
          <span className="price">${producto.precio.toFixed(2)} Bs</span>
          <span className="category">{producto.categoria}</span>
        </div>
        <button className="btn-details">Ver Detalles</button>
      </div>
    </div>
  );
};

export default ProductCard;