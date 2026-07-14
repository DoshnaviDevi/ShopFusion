{/*const User = require('../model/User');
const bcrypt = require('bcryptjs');
const { StatusCodes } = require("http-status-codes");
res.status(StatusCodes.CREATED).json({
    message: "User registered successfully"
});
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }
        // Create new user
        const newUser = new User({
            name,
            email,
            password
        });
        await newUser.save();
        res.status(201).json({
            message: 'User registered successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
};
const loginUser = async(req,res)=>{
    res.send("I am a login user")
}
const logoutUser = async(req,res)=>{
    res.send("I am logout user")
}
module.exports = { registerUser, loginUser,logoutUser};
*/}
{/*en = async(req,res)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expires:'30d'});
}
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = awconst User = require('../model/User');
const bcrypt = require('bcryptjs');
const { StatusCodes } = require("http-status-codes");
const { JsonWebTokenError } = require('jsonwebtoken');
const generateTokait User.findOne({ email });
        if (existingUser) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'User already exists'
            });
        }
    
            catch(error){
            console.log(error)
            }
    
        //TODOS:Hash the password before saving to the database
        //TODOS:Implement JWT token generation authentication
        //TODOS:OTP sending and verifaction for email confirmation
        //TODOS:WELCOME MAIL
        const salt = await bcrypt.genSalt(10);
         const hashedPassword = await bcrypt.hash(password,salt);
         const user = User.create({name,email,password:hashedPassword});
         if(user){
            const otp = Math.floor(100000+Math.random()*900000).toString();
            const message = `Welcome to ShopFusion,${name}!Your otp for ShopFusion registration is:${otp}`;
            await sendEmail(email,'Welcome to ShopFusion -Your OTP for Registration',message)
             return res.status(StatusCodes.CREATED).json({
                message: 'User registered successfully.pleasecheck your email for the otp'
            });
        }
        const newUser = new User({
            name,
            email,
            password
        });
        await newUser.save();
        return res.status(StatusCodes.CREATED).json({
            message: 'User registered successfully'
        });
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'Server error'
        });
    }
};

const loginUser = async (req, res) => {
    res.send("I am a login user");
};

const logoutUser = async (req, res) => {
    res.send("I am logout user");
};

module.exports = { registerUser, loginUser, logoutUser };*/}
{/*const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require("http-status-codes");
// const sendEmail = require('../utils/sendEmail');

const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
    );
};

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'User already exists'
            });
        }

        //TODOS: Hash the password before saving to the database
        //TODOS: Implement JWT token generation authentication
        //TODOS: OTP sending and verification for email confirmation
        //TODOS: Welcome Mail

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        if (user) {
            // Uncomment when sendEmail is ready
            const otp = Math.floor(
                100000 + Math.random() * 900000
            ).toString();

            const message =
                `Welcome to ShopFusion, ${name}! ` +
                `Your OTP for registration is: ${otp}`;

            await sendEmail(
                email,
                'Welcome to ShopFusion - Your OTP for Registration',
                message
            );
            return res.status(StatusCodes.CREATED).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                role:user.role,
                token:generateToken(user._id)
              //  message: 'User registered successfully',
               // token: generateToken(user._id)
            });
        }
        else{
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: 'Invalid user data'
        });
    }
    else{
        res.status(StatusCodes.BADREQUEST).json({message:'Invalid user data'})
    }
}
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'Server error'
        });
    }
};

const loginUser = async (req, res) => {
    res.send("I am a login user");
};

const logoutUser = async (req, res) => {
    res.send("I am logout user");
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser
};*/}
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require("http-status-codes");
 const sendEmail = require('../utils/sendEmail');
const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
    );
};
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'User already exists'
            });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        if (user) {
            const otp = Math.floor(
                100000 + Math.random() * 900000
            ).toString();
            const message =
                `Welcome to ShopFusion, ${name}! ` +
                `Your OTP for registration is: ${otp}`;
             await sendEmail(
                email,
                 'Welcome to ShopFusion - Your OTP for Registration',
                 message
             );
            return res.status(StatusCodes.CREATED).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
            });
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'Invalid user data'
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'Server error'
        });
    }
};
{/*const loginUser = async (req, res) => {
    try{
        const user = await User.find({email});
        if(user && (await bcrypt.compare(password,user.password))){
            res.json({
                _id:user._id,
                name:user.name,
                email:user.email,
                role:user.role,
                token:generateToken(user._id)
            });
        }
        else{
             res.status(StatusCodes.BAD_REQUEST).json({message:'Invalid email or password'});
        }
    }
    catch(error){
        res.status(500).json({message:'server error'})
    }
};*/}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check input exists
        if (!email || !password) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "Email and password required"
            });
        }

        // find user (IMPORTANT: findOne)
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "Invalid email or password"
            });
        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "Invalid email or password"
            });
        }

        // success response
        return res.status(StatusCodes.OK).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        });

    } catch (error) {
        console.log("LOGIN ERROR:", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Server error"
        });
    }
};
const getUsers = async (req, res) => {
    try{
        const users = await User.find({}).select('-password');
        res.json(users);
    }catch(error){
        res.status(500).json({
            message:'server error'
        })
    }
}
module.exports = {
    registerUser,
    loginUser,
    getUsers
};
