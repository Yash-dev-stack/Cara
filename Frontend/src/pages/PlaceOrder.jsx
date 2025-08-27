import React, { useState } from "react";
import CartTotal from "../components/CartTotal.jsx";
import { assets } from "../assets/assets.js";
import axios from "axios";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const { user, clearCart, backendUrl } = useContext(ShopContext);
  const [method, setMethod] = useState("cod");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const userId = user ? user._id : "";

  // Empty form data
  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setStreet("");
    setCity("");
    setState("");
    setZipCode("");
    setCountry("");
    setPhone("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const orderData = {
      userId,
      firstName,
      lastName,
      email,
      street,
      city,
      state,
      zipCode,
      country,
      phone,
      paymentMethod: method,
    };

    // console.log("Submitting order with data:", orderData);
    setLoading(true);

    // Validate all the fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !street ||
      !city ||
      !state ||
      !zipCode ||
      !country ||
      !phone
    ) {
      toast.error("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${backendUrl}/api/order/create`,
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("caraToken"),
          },
        }
      );

      if (response.data.success) {
        clearForm();
        clearCart();
        toast.success(response.data.message);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Failed to create order");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-4 sm:pt-14 min-h-[80vh] border-t p-7"
    >
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <h2 className="text-3xl font-medium">Delivery Information</h2>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            className="border border-gray-300 py-1.5 px-3.5 w-full rounded "
          />
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            value={lastName}
            className="border border-gray-300 py-1.5 px-3.5 w-full rounded "
          />
        </div>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 py-1.5 px-3.5 w-full rounded "
        />
        <input
          type="text"
          placeholder="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className="border border-gray-300 py-1.5 px-3.5 w-full rounded "
        />

        <div className="flex gap-3">
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            placeholder="City "
            value={city}
            className="border border-gray-300 py-1.5 px-3.5 w-full rounded "
          />
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="border border-gray-300 py-1.5 px-3.5 w-full rounded "
          />
        </div>

        <div className="flex gap-3">
          <input
            type="number"
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Zip code"
            value={zipCode}
            className="border border-gray-300 py-1.5 px-3.5 w-full rounded "
          />
          <input
            type="text"
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
            value={country}
            className="border border-gray-300 py-1.5 px-3.5 w-full rounded "
          />
        </div>
        <input
          type="number"
          value={phone}
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
          className="border border-gray-300 py-1.5 px-3.5 w-full rounded "
        />
      </div>

      {/* Second div */}

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-8 min-w-80">
          <p className="text-2xl font-medium text-black mb-6">
            Payment methods
          </p>

          <div
            onClick={() => setMethod("razorpay")}
            className="border px-2 py-4 border-gray-500 flex items-center flex-row rounded mb-3 "
          >
            <p
              className={`w-4 h-4 border mr-12 rounded-full ${
                method === "razorpay" ? "bg-tertiary" : ""
              } `}
            ></p>
            <img src={assets.razorpay} className="w-40" />
          </div>

          <div
            onClick={() => setMethod("stripe")}
            className="border px-2 py-4 border-gray-500 flex items-center flex-row rounded mb-3 "
          >
            <p
              className={`w-4 h-4 border mr-12 rounded-full ${
                method === "stripe" ? "bg-tertiary" : ""
              } `}
            ></p>
            <img src={assets.stripe} className="" />
          </div>

          <div
            onClick={() => setMethod("cod")}
            className="border px-2 py-4 border-gray-500 flex items-center flex-row rounded "
          >
            <p
              className={`w-4 h-4 border mr-12 rounded-full ${
                method === "cod" ? "bg-tertiary" : ""
              } `}
            ></p>
            <p className="text-2xl text-gray-800 font-medium">
              Cash on delivery
            </p>
          </div>

          <button
            type="submit"
            className=" mt-5 w-45 text-center cursor-pointer text-xl ml-12 bg-tertiary text-white px-8 py-5 rounded-xl font-medium "
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
