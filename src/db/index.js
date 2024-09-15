import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        console.log('MONGODB_URI:', process.env.MONGODB_URI);  // Add this to debug

        const connectioninstance = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: DB_NAME,
          
        });

        console.log(`Database connected successfully at ${connectioninstance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to the database", error);
        process.exit(1);
    }
};
export default connectDB