import express from 'express'
import User from '../../models/user.js'
import bcrypt from "bcryptjs";

const router = express.Router();

router.post('/', async(req, res)=>{
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password){
            return res.status(400).json({
                message : "All Fields are Required"
            })
        };

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message : "Email is already registered"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password : hashedPassword
        });

        await newUser.save();
        res.status(201).json({
            message: "User registered successfully"
        });

        console.log(newUser);
        
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

})

export default router;