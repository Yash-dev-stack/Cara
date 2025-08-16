import React, { useState, useEffect, useContext } from "react";
import { assets } from "../assets/assets.js";
import { ShopContext } from "../context/ShopContext.jsx";
import { useParams } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts.jsx";

const ProductDetail = () => {
  const { products, currency, addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((elem) => {
      try {
        if (elem._id === productId) {
          setProductData(elem);
          setImage(elem.image[0]);
          return null;
        }
      } catch (error) {
        console.log("Error in fetchProductData function", error);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  return productData ? (
    <div className="border-t-2 transition-opacity duration-500 ease-in pt-10 opacity-100">
      {/*Product Data*/}
      <div className="flex-col sm:flex-row gap-12 sm:gap-12 flex">
        {/*Product Image*/}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-col justify-between sm:justify-normal overflow-x-auto sm:overflow-y-auto w-[18.7%] sm:w-[18.7%]">
            {productData.image.map((elem, index) => (
              <img
                className="w-[24%] sm:w-full flex-shrink-0 sm:mb-3 cursor-pointer"
                key={elem._id || index}
                onClick={() => setImage(elem)}
                src={elem}
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} />
          </div>
        </div>

        {/*Product Details*/}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 ml-2">{productData.name}</h1>
          <div className="flex items-start mt-2 ml-2 gap-1">
            <img className="w-3.5" src={assets.star_icon} />
            <img className="w-3.5" src={assets.star_icon} />
            <img className="w-3.5" src={assets.star_icon} />
            <img className="w-3.5" src={assets.star_icon} />
            <img className="w-3.5" src={assets.star_dull_icon} />
          </div>
          <p className="ml-2 font-medium text-3xl mt-5">
            {currency}
            {productData.price}
          </p>

          <p className="ml-2 md:w-4/5 text-gray-600 mt-5">
            {productData.description}
          </p>

          <div className="flex ml-2 flex-col gap-4 my-8">
            <p>Select size</p>
            <div className="flex gap-2">
              {productData.sizes.map((elem, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 bg-gray-100 border ${
                    elem === size ? "border-tertiary" : ""
                  }`}
                  onClick={() => setSize(elem)}
                >
                  {elem}
                </button>
              ))}
            </div>
            <button
              onClick={() => addToCart(productData._id, size)}
              className="w-44 rounded-2xl px-5 py-2 bg-tertiary text-white text-sm "
            >
              Add to cart
            </button>

            <hr className="mt-8 sm:w-4/5" />
            <div className="flex flex-col flex-1 text-sm text-gray-600 mt-5">
              <p>100% Original Product.</p>
              <p>Cash on delivery available on this product.</p>
              <p>Easy return and exchange policy within 7 Days.</p>
            </div>
          </div>
        </div>
      </div>

      {/*description and reveiw section*/}
      <div className="mt-12">
        <div className="flex">
          <b className="border px-4 py-2 text-sm">Description</b>
          <p className="border px-4 py-2 text-sm">Reveiw(122)</p>
        </div>
        <div className="flex flex-col border px-6 py-6 text-gray-500 text-sm">
          <p>
            An E-commerce consectetur occaecat voluptate nulla cupidatat officia
            ipsum Lorem eiusmod magna Lorem voluptate mollit velit sit et
            consequat sit non non esse laboris amet deserunt ea et aliquip
          </p>
          <p>
            E-commerce website typically consectetur occaecat voluptate nulla
            cupidatat officia ipsum Lorem eiusmod magna Lorem voluptate mollit
            velit sit et consequat sit non non esse laboris amet deserunt ea et
            aliquip
          </p>
        </div>
      </div>

      {/*Related products*/}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <p>Product data is not available</p>
  );
};

export default ProductDetail;
