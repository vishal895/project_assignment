import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const getProduct = () => {
    setLoading(true);
    axios
      .get(`https://world.openfoodfacts.org/api/v0/product/${id}.json`)
      .then((res) => {
        if (res.status === 200) {
          console.log("API Data:", res.data);
          setProduct(res.data.product);
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div className="container mt-4">
      <NavLink to="/" className="btn btn-primary mb-3">
        Back
      </NavLink>

      {loading ? (
        <div className="text-center">
          <p className="text-muted">Loading...</p>
        </div>
      ) : product ? (
        <div className="card shadow-lg p-4">
          <div className="row">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.product_name || "Product"}
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", objectFit: "contain" }}
                />
              ) : (
                <p className="text-muted">No Image Available</p>
              )}
            </div>

      
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="fw-bold text-primary">{product.product_name || "Product Name Unavailable"}</h4>

              
                {product.code && (
                  <div className="mt-3">
                    <h5 className="fw-bold mb-1">Barcode:</h5>
                    <div className="d-flex align-items-center gap-2 mb-2">
                    <p className="fs-5">{product.code} (EAN / EAN-13)</p>
                    <img
                      src={`https://barcode.tec-it.com/barcode.ashx?data=${product.code}&code=EAN13`}
                      alt="Barcode"
                      className="img-fluid"
                      style={{ maxHeight: "60px" }}
                    />
                    </div>
                    
                  </div>
                )}
                <p>
                  <strong>Ingredients:</strong>{" "}
                  {product.ingredients_text || <span className="text-muted">Not Available</span>}
                </p>
                {product.nutriments && (
                  <div className="mt-3">
                    <h5 className="fw-bold">Nutritional Values (Per 100g)</h5>
                    <ul className="list-unstyled">
                      <li>🔥 Energy: {product.nutriments["energy-kcal_100g"] || "N/A"} kcal</li>
                      <li>🥑 Fat: {product.nutriments.fat_100g || "N/A"} g</li>
                      <li>🍞 Carbs: {product.nutriments.carbohydrates_100g || "N/A"} g</li>
                      <li>🍗 Proteins: {product.nutriments.proteins_100g || "N/A"} g</li>
                    </ul>
                  </div>
                )}

           
                {(product.labels || product.labels_tags) && (
                  <div className="mt-3">
                    <h5 className="fw-bold">Labels & Tags</h5>
                    <p>
                      {product.labels_tags && product.labels_tags.length > 0
                        ? product.labels_tags.join(", ")
                        : "No Labels Available"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DetailPage;

