const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const bcrypt = require("bcryptjs");

const home = async(req, res) => {
    try {
        res.status(200).send({message: 'Welcome home'});
    } catch (error) {
        res.status(500).send({message: 'error home page'});
    }
}
const register = async(req, res) => {
    try {
        const {username, email, phone, password} = req.body; 
        const userExist = await User.findOne({email: email});

        if (userExist)
            return res.status(400).send({message: "Email already exist"});

        const saltValue = 10;
        const hash = await bcrypt.hash(password, saltValue);

        const userCreated = await User.create({username, email, phone, password : hash});
        return res.status(201).send({message: "REgistration successful", token : await userCreated.generateToken(), userId :userCreated._id.toString()});
    } catch (error) {
        // res.status(500).send({message: 'Internal server error'});
        next(error);
    }
}
const login = async(req, res) => {
    try {
        const { email, password} = req.body; 
        const userExist = await User.findOne({email: email});

        if (!userExist)
            return res.status(400).send({message: "Invalid Credentials"});

        const user = await bcrypt.compare(password, userExist.password);
        if (user) {
            res.status(200).send({
                message: "Login successful", 
                token : await userExist.generateToken(), 
                userId :userExist._id.toString()
            });
        }
        else {
            res.status(401).send({message: "Invalid Credentials"});
        }
    } catch (error) {
        // res.status(500).send({message: 'Internal server error'});
        next(error);
    }
}
const contact = async (req, res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({message: "message send successfully"})
    } catch (error) {
        return res.status(500).json({message: "message not sent"})
    }
};
module.exports = {home, register, login, contact};