const express = require('express')
const app = express();
const { PORT = 3003} = process.env;

const { errors } = require('celebrate');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/final', {
  useNewUrlParser: true,
}).then(console.log("* mongoDb connected *"))

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const users = require("./routes/users")
const articles = require("./routes/articles");
const midServerError = require('./errors/midServerError');
const notFundError = require('./errors/notFundError');
const { errorLogger, requestLogger } = require('./logger');
const { creatUsers, login } = require('./controllers/users');
const auth = require('./midelweres/auth');


//req log winston
app.use(requestLogger)

app.use( (req,res ,next)=>{
  req.user = {_id :"62934b43ebaa487c5ae570e4"}
  next()
})

app.post(`/signup`,creatUsers)
app.post(`/signin`,login)
app.use(auth)
app.use('/users', users);
app.use('/articles', articles);
app.get('*', () =>{throw new notFundError("page not found 404")})

app.use(errors());
app.use(midServerError)

//winston logger
app.use(errorLogger)

app.listen(PORT, () => {
    console.log(`link to server on ${PORT}` );
  });