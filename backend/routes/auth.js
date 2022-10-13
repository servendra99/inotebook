const express=require('express');
const { default: mongoose } = require('mongoose');
const router=express.Router();
const User=require('../models/Users');
const { body, validationResult } = require('express-validator');


//create a user using :POST "/api/auth/createuser".  no login required


router.post('/createuser',[
    body('email','Enter a valid name').isEmail(),
    body('name','Enter a valid mail').isLength({min:3}),
    body('password','password must 5 character').isLength({min:5}),
], async (req,res, next)=>{
   
  //if there are errors return bad request and errors

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
       //check wheather the user with same email exists or not

      let  user= await User.findOne(email : req.body.email);
      if(user){
        return res.status(400).json({error:"sorry a user with this email already exist"})
      }


       user=await  User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          })
        //  .then(user => res.json(user)).
        //  catch(err=> console.log(err));

        //  res.json({error:'Please enter a unique value for email',message:err.message});

          res.send(req.body);

        },
      );


    

module.exports=router;