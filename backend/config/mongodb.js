// import mongoose from "mongoose";

// const connectDB = async () => {

//     mongoose.connection.on('connected',() => {
//         console.log("DB Connected");
//     })

//     await mongoose.connect(`mongodb+srv://srijan:@Password1234@e-commerce.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000`)

// }

// export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/e-commerce');

        console.log("DB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1); // Stop the server if DB connection fails
    }

    mongoose.connection.on('connected', () => {
        console.log("MongoDB is connected.");
    });
};

export default connectDB;
