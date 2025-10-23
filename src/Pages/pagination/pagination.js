import React, { useEffect, useState } from 'react';

const Pagination = () => {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1);
  

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=194");
    const result = await res.json();
    setProductData(result.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalPages = Math.ceil(productData.length / 10);

  return (
    <>
      <div className="grid_portion">
        {productData
          .slice((page - 1) * 10, page * 10)
          .map((item) => (
            <div className="card_box" key={item.id}>
              <img
                src={item.images[0]}
                alt={item.title}
                style={{ width: "100%", height: "100%" }}
              />
              <span>{item.title}</span>
            </div>
          ))}
      </div>

      {productData.length > 0 && (
        <div className="flex_content">
          <span
            onClick={() => page > 1 && setPage(page - 1)}
            style={{ cursor: "pointer" }}
          >
            Prev
          </span>

          {[...Array(totalPages)].map((_, i) => (
            <span
              key={i}
              onClick={() => setPage(i + 1)}
              style={{
                cursor: "pointer",
                fontWeight: page === i + 1 ? "bold" : "normal",
              }}
            >
              {i + 1}
            </span>
          ))}

          <span
            onClick={() => page < totalPages && setPage(page + 1)}
            style={{ cursor: "pointer" }}
          >
            Next
          </span>
        </div>
      )}
    </>
  );
};

export default Pagination;
