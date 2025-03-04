import mongoose, { ConnectOptions } from "mongoose"

const connectToDatabase = async () => {
  mongoose.set("strictQuery", false)

  mongoose.connect(`${process.env.MONGO_URL!}`, {} as ConnectOptions)

  const conn = mongoose.connection.on("connected", () => {
    console.log("Database Connected")
  })

  return { conn }
}

export default connectToDatabase
