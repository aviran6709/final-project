const mongo = require('mongoose');

const userSchema = new mongo.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,

  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    require: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
});
module.exports = mongo.model('user', userSchema);
