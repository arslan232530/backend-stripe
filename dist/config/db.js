import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const url = process.env.MONGOURL;
const connectDB = async () => {
    try {
        await mongoose.connect(url).then(() => {
            console.log("Database Connected Successfully");
        });
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // exit process with failure
    }
};
export default connectDB;
//# sourceMappingURL=db.js.map