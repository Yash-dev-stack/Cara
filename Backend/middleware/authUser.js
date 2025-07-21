import jwt from 'jsonwebtoken';

const authUser = async (request, response, next) => {
 const {token} = request.headers;
 
 if(!token) {
   return response.json({success: false, msg: 'Not authorized login again' })
 }
 try {
   const decodeToken = jwt.verify(token, process.env.JWT_SECRET)
   request.body.userId = decodeToken.id;
   next()
 } catch (error) {
   console.log(error);
   response.json({success: false, msg: error.message})
   
 }
}

export default authUser;