import React from "react";

const FoodCard = ({ product }) => {
  return (
    <div
      className="card border-0 shadow-lg p-3 d-flex flex-column align-items-center"
      style={{
        width: "270px",
        height: "420px",
        borderRadius: "16px",
        background: "#E3F2FD", 
      }}
    >
    
      <div className="text-center" style={{ width: "100%", height: "160px" }}>
        <img
          className="img-fluid rounded"
          src={product.image_url}
          alt="Product"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
            borderRadius: "12px",
            backgroundColor: "#fff",
            padding: "5px",
          }}
        />
      </div>

    
      <div className="card-body text-center p-2 d-flex flex-column justify-content-between w-100">
        <h6 className="mb-2 fw-bold text-dark text-truncate" title={product.product_name}>
          {product.product_name || "No Name Available"}
        </h6>

        <p className="text-start small mb-1 text-truncate" title={product.categories}>
          <strong className="text-primary">Category:</strong> {product.categories || "N/A"}
        </p>

        <p className="text-start small mb-1 text-truncate" title={product.ingredients_text}>
          <strong className="text-success">Ingredients:</strong> {product.ingredients_text || "N/A"}
        </p>

        <p className="text-start small mb-1">
          <strong className="text-danger">Nutrition Grade:</strong> {product.nutrition_grades || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default FoodCard;


