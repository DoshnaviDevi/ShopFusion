{/*const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please provide name']
    },
    email:{
        type:String,
        required:[true,'please provide email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'please provide password']
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    verified:{
        type:Boolean,
        default:false
    },
    // Password hash before save
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Password compare method
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};
});
module.exports = mongoose.model("User",userSchema);*/}
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: [true, 'please provide name']
    },
    email: {
        type: String,
        required: [true, 'please provide email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please provide password']
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    verified: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
}
);

// Hash password before save
{/*userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
// Compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
// Generate JWT token
userSchema.methods.generateToken = function () {
    return jwt.sign(
        {
            id: this._id,
            role: this.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '30d'
        }
    );
};*/}
module.exports = mongoose.model('User', userSchema);