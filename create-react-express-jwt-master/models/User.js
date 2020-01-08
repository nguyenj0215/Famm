const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    default: "https://img.icons8.com/nolan/64/000000/help--v2.png"
  },
  family: {
    type: String
  },
  //Change post type to an array through mongoose, instead of updating value every time 
  //just push to the array of posts for this user, maybe clear all of the array once hit 4 indexes
  //when loading posts we can do some dynamic thing like when we click on someones name it loads
  //posts for that user
  post: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

// Execute before each user.save() call
UserSchema.pre('save', function(callback) {
  let user = this;

  // Break out if the password hasn't changed
  if (!user.isModified('password')) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return callback(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return callback(err);
      user.password = hash;
      callback();
    });
  });
});

UserSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;