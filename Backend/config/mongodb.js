import mongoose from 'mongoose'

const connectToDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log('Database Connected Successfully')
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/ecommerce`)
  } catch (error) {
    console.log('Mongoose database connection failed', error)
  }
}

export default connectToDB;