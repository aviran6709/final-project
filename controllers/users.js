const UserSchema = require("../models/users");
const bcrypt = require("bcryptjs");
const notFundError = require("../errors/notFundError");
const InvalidDataError = require("../errors/invalidDataError");
const jwt = require('jsonwebtoken');
const midServerError = require("../errors/midServerError");
require('dotenv').config();
const { NODE_ENV, JWT_SECRET } = process.env;



const getUserInfo = (req, res) => {
  const _id = req.user;
  UserSchema.findById(_id)
    .then((user) => {
      res.send(user);
    })
    .catch(console.log);
};

const creatUsers = (req, res ,next) => {
  const { name, email } = req.body;
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) =>
      UserSchema.create({
        email: email,
        name: name,
        password: hash,
      })
    )
    .then((newUser) => {
      res.send({ data: newUser })})
    .catch((err) => {
      if (err.name === "ValidationError") {
        err.statusCode = 403
     next(err)
      } else {
       next()
      }
    });
};


const login =(req,res,next) =>{
let userId
const {email, password} = req.body
UserSchema.findOne({email}) .select('+password')
.then((user) => {
  if (!user) {
    throw new InvalidDataError ('Incorrect password or email');
  }
  console.log(user._id);
   userId = user._id;

  return bcrypt.compare(password, user.password);
})
.then((matched) => {
  if (!matched) {
    // the hashes didn't match, rejecting the promise
  throw new InvalidDataError ('Incorrect password or email');
  }

  
res.send({ token: jwt.sign({ _id: userId }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' }) })
 

}).catch(next)
};




module.exports = { getUserInfo, creatUsers ,login};
