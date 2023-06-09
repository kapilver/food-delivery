const express = require('express')
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtScrete = "mynameiskapilverma#$"



router.post('/createuser', [body('name').isLength({ min: 5 })], body('email').isEmail(), body('password', "Incorrect password").isLength({ min: 5 }), async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, salt);
    try {
        await User.create({

            name: req.body.name,
            location: req.body.location,
            email: req.body.email,
            password: securePassword

            //date send krne ki zarurtat nhi hai kyuki model me defalut laga diya tha which means wo autometic le lega

        })

        console.log('bodyd data', req.body);
        res.json({ success: true });

    } catch (error) {
        console.log('user not created');
        res.json({ success: false })
    }

})


router.post('/Loginuser',

    [body('email').isEmail(), body('password', "Incorrect password").isLength({ min: 5 })]

    , async (req, res) => {


        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;

        try {
            let userData = await User.findOne({ email });
            if (!userData) {

                return res.status(400).json({ errors: "try logging with correct credintials---------" });
            }

            const passwordComparession = await bcrypt.compare(req.body.password,userData.password)

            if (!passwordComparession) {
            
            }

            const data = {
                user:{

                    id:userData.id
                }

            }
            const authToken = jwt.sign(data, jwtScrete)

            return res.json({ success: true, authToken: authToken })
            // return res.json({ success: true })

        } catch (error) {
            console.log(error);
            res.json({ success: false })
        }

    })

module.exports = router;