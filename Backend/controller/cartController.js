import userModel from '../models/userModel.js';

// controller for add products in cart 
const addToCart = async (request, response) => {
  try {
    const {userId, elemId, size} = request.body;
    
    const userData = await userModel.findById(userId);
    const cartData = await userData.cartData;
    
    if(cartData[elemId]) {
      if(cartData[elemId][size]) {
        cartData[elemId][size] += 1;
      } else {
        cartData[elemId][size] = 1 
      }
    } else {
      cartData[elemId] = {}; 
      cartData[elemId][size] = 1;
    }
    
    await userModel.findByIdAndUpdate(userId, {cartData});
    response.json({success: true, msg: 'product is successfully add to your cart'});
    
  } catch (error) {
   console.log(error)
    response.json({success: false, msg: error.message}) 
  }
}

// controller for update cart 
const updateCart = async (request, response) => {
  try {
    const {userId, elemId, size, quantity} = request.body;
    
    if(!userId) {
      return response.status(400).json({success: false, msg: 'User Id is required'
      })
    }
    
    const userData = await userModel.findById(userId);
    if(!userData) {
      return response.status(404).json({success: false, msg: 'User not found'})
    }
    const cartData = userData.cartData
   
   cartData[elemId][size] = quantity;
   
   await userModel.findByIdAndUpdate(userId, {cartData})
   return response.status(200).json({success: true, msg: 'Cart updated successfully'})
  } catch (error) {
       console.log(error)
    response.json({success: false, msg: error.message}) 
  }
}

// controller for get user cart data 
const getCartData = async (request, response) => {
  try {
    const { userId } = request.body;

    // Validate if userId is provided
    if (!userId) {
      return response.status(400).json({ success: false, msg: "User ID is required" });
    }

    // Fetch user data by ID
    const userData = await userModel.findById(userId);

    // Check if user exists
    if (!userData) {
      return response.status(404).json({ success: false, msg: "User not found" });
    }

    // Retrieve cart data
    const cartData = userData.cartData; 

    // Send success response
    response.json({ success: true, cartData });
  } catch (error) {
    console.error("Error fetching cart data:", error);
    response.status(500).json({ success: false, msg: "An error occurred while fetching cart data" });
  }
};


// export controller functions
export  {addToCart, updateCart, getCartData}