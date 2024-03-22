require("dotenv").config();
const express = require('express');
const app = express();
const router = require('./router/auth-router');
const connectDB = require('./utils/db');
const errorMiddleware = require("./middlewares/error-middleware");
// middleware
app.use(express.json());

// app.use("/", router);
app.use("/api/auth", router);

app.use(errorMiddleware);

// app.get("/", (req, res) => {
//     res.status(200).send('Welcome');
// });
// app.get("/register", (req, res) => {
//     res.status(200).send('Welcome to register page');
// });

const PORT = 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port ${PORT}`);
    });
})
