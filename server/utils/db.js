const mongoose = require("mongoose");
// const mongoose = require("mongoose");
// const URI =  'mongodb://127.0.0.1:27017/rw_admin';
const URI =  process.env.MONGODB_URI;
// mongoose.connect(URI);

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('Connection successful');
    } catch (error) {
        console.error(error);
        process.exit(0);
    }
}

module.exports = connectDB;