import React, { useState, useEffect, useContext } from "react";
import Products from "../components/Products.jsx";
import { ShopContext } from "../context/ShopContext";
import Newsletter from "../components/Newsletter.jsx";
const Shop = () => {
  const { products, currency, headingStyle } = useContext(ShopContext);

  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevent");
  const [showFilter, setShowFilter] = useState(false);

  const applyFilter = () => {
    let productCopy = products.slice();
    if (category.length > 0) {
      productCopy = productCopy.filter((elem) =>
        category.includes(elem.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((elem) =>
        subCategory.includes(elem.subCategory)
      );
    }
    setFilterProduct(productCopy);
  };

  const sortProduct = () => {
    let fCopy = filterProduct.slice();

    switch (sortType) {
      case "low-high":
        setFilterProduct(fCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProduct(fCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((elem) => elem !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((elem) => elem !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  useEffect(() => {
    try {
      applyFilter();
    } catch (error) {
      console.log("Error in applyFilter function", error);
    }
  }, [products, category, subCategory]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div>
      <div className="bg-shopHero bg-cover w-full h-[20vh] flex items-center  justify-center text-center flex-col p-[14px]">
        <h1 className="text-[27px] sm:text-[40px] font-extrabold leading-[54px] text-white ">
          #Shop Now
        </h1>
        <p className="text-white font-medium">
          Save more with coupons & upto 70% off
        </p>
      </div>

      <div className="w-full flex justify-between flex-col sm:flex-row mt-10">
        {/*Right side*/}
        <div className=" flex flex-col items-start  sm:mt-6 min-w-75 px-5 sm:py-10  gap-6">
          <h3
            className="sm:text-2xl text-3xl font-semibold mb-3"
            onClick={() => setShowFilter(true)}
          >
            Filters
          </h3>

          {/*Category*/}

          <div className=" sm:w-[99%] border border-gray-500 px-5  rounded-md  py-5  sm:mb-5 text-start">
            <h4 className="text-md sm:text-xl font-medium mb-2">Categories</h4>
            <div className="gap-1">
              <p className="flex gap-2 items-center">
                <input
                  onChange={toggleCategory}
                  type="checkbox"
                  value={"Mens"}
                />{" "}
                Mens
              </p>
              <p className="flex gap-2 items-center">
                <input
                  onChange={toggleCategory}
                  type="checkbox"
                  value={"Womens"}
                />{" "}
                Womens
              </p>
            </div>
          </div>

          {/*Sub Category*/}
          <div className="sm:w-[99%] border border-gray-500 rounded-md  py-5 px-5 text-start">
            <h4 className="text-xl font-medium mb-2">Type</h4>
            <div className="gap-1">
              <p className="flex gap-2 items-center">
                <input
                  onChange={toggleSubCategory}
                  type="checkbox"
                  value={"Topwear"}
                />{" "}
                Topwear
              </p>
              <p className="flex gap-2 items-center">
                <input
                  onChange={toggleSubCategory}
                  type="checkbox"
                  value={"Bottomwear"}
                />{" "}
                Bottomwear
              </p>
            </div>
          </div>
        </div>
        {/*Left side*/}

        <div className="mt-6 w-full px-4 sm:px-6 flex-1">
          <div className="flex items-center justify-between flex-row">
            <h1 className="text-3xl sm:text-5xl font-medium ">
              Our Collections{" "}
            </h1>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2  py-1 sm:py-2 text-sm text-gray-400 rounded"
            >
              <option value="relevent">Short by: Relevent </option>
              <option value="low-high">Short by: Low to High </option>
              <option value="high-low">Short by: High to Low </option>
            </select>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 px-6 py-5">
            {filterProduct.map((elem, index) => (
              <Products
                key={elem._id || index}
                image={elem.image}
                name={elem.name}
                price={elem.price}
                id={elem._id}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="my-12">
        <Newsletter />
      </div>
    </div>
  );
};

export default Shop;
