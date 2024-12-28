const express = require("express");

const router = express.Router();
const { body } = require("express-validator");
const userController = require('../controllers/user.controller')


router.post('/register', [
  body('fullName.firstName').isLength({ min: 3 }). withMessage('firstname must be of altleast 3 character'),
  body('email').isEmail().withMessage('invalid email'),
  body('password').isLength({ min: 6 }).withMessage('password must be of altleast 6 character')
],
  userController.registerUser
  
)




module.exports = router;