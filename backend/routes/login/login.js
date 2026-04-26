import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import User from '../../models/user.js';

const router = express.Router();

router.post ('/', async (req, res)=>{
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                message: "All Fields are required"
            })
        }

        const existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(400).json({
                message: "Invalid user Credentials"
            })
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if(!isMatch){
            return res.status(400).json({
                message: "Invalid user Credentials"
            })
        }

        const token = jwt.sign(
            {id: existingUser._id},
            process.env.JWT_PRIVATE_KEY,
            {expiresIn : '1h'}
        );
        

        console.log('Token', token);

        res.status(200).json({
            message: "User logged in successfully"
        });

        return token;
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

export default router;