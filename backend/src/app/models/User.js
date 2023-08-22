// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     fullName: { type: String, required: true },
//     phoneNumber: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// });

// module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    //require
    fullName: { type: String, required: true },
    password: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true },

    avatar: {type: String, default: ''},
    phoneNumber: { type: String, default: '0123456'},
    address: {type: String, default: 'HCM'},
    walletAmount: { type: Number, default: 0 },
    contributionActivities: [{ type: Schema.Types.ObjectId, ref: 'ContributionActivity' }],
});

userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  });
  
  userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) return cb(err);
      cb(null, isMatch);
    });
  };

module.exports = mongoose.model("User", userSchema);
