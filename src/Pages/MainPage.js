import axios from "axios";
import React, { useEffect, useState } from "react";
import FoodCard from "../Component/FoodCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";
import { NavLink } from "react-router-dom";

const MainPage = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [selectcategoryvalue, setSelectCategoryValue] = useState([]);
  const [sortOption, setSortOption] = useState("");

  const categoryOptions = [
    { value: "Beverages", label: "Beverages" },
    { value: "Dairy", label: "Dairy" },
    { value: "Snacks", label: "Snacks" },
  ];

  const page_size = 10;
  const apiUrl = `https://world.openfoodfacts.org/api/v2/search?page_size=${page_size}&page=${pageNo}`;

  const getProductData = () => {
    if (!hasMore) return;
    if (pageNo === 1) setLoading(true);

    axios
      .get(apiUrl)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.products.length === 0) {
            setHasMore(false);
          } else {
            const updatedProducts = [...products, ...res.data.products];
            setProducts(updatedProducts);
            setFilteredData(updatedProducts);
            setPageNo((prev) => prev + 1);
          }
        }
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getProductData();
  }, []);

 
useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (!searchQuery) {
        setFilteredData(products);
      } else {
        const filtered = products.filter(
          (item) =>
            item.product_name
              ?.toLowerCase()
              ?.includes(searchQuery.toLowerCase()) ||
            item.code?.toLowerCase()?.includes(searchQuery.toLowerCase())
        );
        setFilteredData(filtered);
      }
    }, 500); 

    return () => clearTimeout(delayDebounceFn); 
  }, [searchQuery, products]);

  useEffect(() => {
    if (selectcategoryvalue.length === 0) {
      setFilteredData(products);
    } else {
      const categoryFiltered = products.filter((item) =>
        selectcategoryvalue.some((category) =>
          item.categories?.toLowerCase().includes(category.toLowerCase())
        )
      );
      setFilteredData(categoryFiltered);
    }
  }, [selectcategoryvalue, products]);



  useEffect(() => {
    let sortedData = [...filteredData];
  
    if (sortOption === "default") {
      sortedData = [...products]; // Reset to original product order
    } else if (sortOption === "name-asc") {
      sortedData.sort((a, b) => a.product_name?.localeCompare(b.product_name));
    } else if (sortOption === "name-desc") {
      sortedData.sort((a, b) => b.product_name?.localeCompare(a.product_name));
    } else if (sortOption === "nutrition-asc") {
      sortedData.sort((a, b) =>
        (a.nutrition_grades || "").localeCompare(b.nutrition_grades || "")
      );
    } else if (sortOption === "nutrition-desc") {
      sortedData.sort((a, b) =>
        (b.nutrition_grades || "").localeCompare(a.nutrition_grades || "")
      );
    } else if (sortOption === "calories-low") {
      sortedData.sort((a, b) => (a.energy_100g || 0) - (b.energy_100g || 0));
    } else if (sortOption === "calories-high") {
      sortedData.sort((a, b) => (b.energy_100g || 0) - (a.energy_100g || 0));
    }
  
    setFilteredData(sortedData);
  }, [sortOption, products]); // Added `products` to dependency array
  
  

  return (
    <div className="container-fluid mt-4" style={{ overflowX: "hidden" }}>
      <h1 className="text-center mb-5">All Food Products</h1>
      {loading && products.length === 0 ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {!loading && searchQuery && filteredData.length === 0 && (
            <div className="text-center">
              <h4>No results found</h4>
            </div>
          )}
          {filteredData.length > 0 && (
            <div className="container mb-5">
              <div className="d-flex align-items-baseline mb-5 gap-5">
                <div className="d-flex align-items-baseline">
                  <h6>Filter:</h6>
                  <Select
                    isMulti
                    options={categoryOptions}
                    value={categoryOptions.filter((option) =>
                      selectcategoryvalue.includes(option.value)
                    )}
                    onChange={(selectedOptions) =>
                      setSelectCategoryValue(
                        selectedOptions.map((option) => option.value)
                      )
                    }
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                <h6>Sort By:</h6>
                <select
                  className="form-select w-auto"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="name-asc">Product Name (A-Z)</option>
                  <option value="name-desc">Product Name (Z-A)</option>
                  <option value="nutrition-asc">Nutrition Grade (Ascending)</option>
                  <option value="nutrition-desc">Nutrition Grade (Descending)</option>
                  <option value="calories-low">Lowest Calories</option>
                  <option value="calories-high">Highest Calories</option>
                </select>
               </div>

              </div>

              <div
                id="scrollableDiv"
                style={{
                  height: "100vh",
                  overflowY: "auto",
                  overflowX: "hidden",
                  minWidth: "0", 
                  margin: "0",
                  width: "100%",
                  
                }}
              >
                <InfiniteScroll
                  dataLength={filteredData.length}
                  next={() => {
                    if (!searchQuery) {
                      getProductData();
                    }
                  }}
                  hasMore={hasMore && !searchQuery}
                  loader={
                    hasMore && products.length > 0 && !loading ? (
                      <h4 className="text-center">Loading..</h4>
                    ) : null
                  }
                  scrollableTarget="scrollableDiv"
                >
                  <div className="row d-flex flex-wrap justify-content-center mx-0 row-gap-5 pt-4">
                    {filteredData.map((product, index) => (
                      <div
                        key={index}
                        className="col-md-4 d-flex justify-content-center"
                        style={{ maxWidth: "100%" }}
                      >
                       <NavLink className="text-decoration-none" to={`/product/${product.id}` }><FoodCard product={product} /></NavLink> 
                      </div>
                    ))}
                  </div>
                </InfiniteScroll>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MainPage;



