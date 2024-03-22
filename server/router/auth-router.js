const express = require('express');
const router = express.Router();
const validate = require("../middlewares/validate-middleware");
const {signupSchema, loginSchema} = require("../validators/auth-validator");


// const {home, register}= require('../controller/auth-controller');
const authController = require('../controller/auth-controller');


// const {home} = require('../controller/auth-controller');
// const {register} = require('../controller/auth-controller');

// router.get("/", (req, res) => {
//     res.status(200).send('Welcome2');
// });
// router.get("/register", (req, res) => {
//     res.status(200).send('Welcome2 to register page');
// });

router.route("/").get(authController.home);
router.route("/register").post(validate(signupSchema), authController.register);
router.route("/login").post(validate(loginSchema), authController.login);
router.route("/contact").post(authController.contact);

module.exports = router;