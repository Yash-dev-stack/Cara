import express from 'express' ;
import cors from 'cors'
import 'dotenv/config';
import connectToDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import cartRoutes from './routes/cartRoutes.js'

const app = express(); 
const port = process.env.PORT || 3000
connectToDB();

app.use(express.json())
app.use(cors());

// Api endpoints for different routes 
app.use('/api/user', userRouter)
app.use('/api/cart', cartRoutes)


app.get('/', (req, res) => {
  res.send('Cara Api is working')
})



app.listen(port, () => {
  console.log(`App is listining on port:${port}`)
})