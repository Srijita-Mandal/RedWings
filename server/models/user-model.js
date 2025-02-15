const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new  mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

});

//jwt
userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.jwt_secret_key,
        {
            expiresIn: '30d',
        }
        );
    } catch (error) {
        console.log(error);
    }
}

const User = new mongoose.model('user', userSchema);

module.exports = User;