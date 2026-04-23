import express from 'express'
import User from '../../models/user.js'

const router = express.Router();

router.post('/', async(req, res)=>{
    try {
        const [name, email, password] = req.body

        if(!name || !email || !password){
            res.send(400).json({
                message : "All Fields are Required"
            })
        };

        const existingUser = await User.find({email});
        if(existingUser){
            res.send(400).json({
                message : "Email is already registered"
            })
        }

        const newUser = new User({
            name,
            email,
            password
        });

        newUser.save();
        res.send(200).json({
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