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

const userSchema = new Schema({
    fullName: { type: String, required: true },
    avatar: String,
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: String,
    walletAmount: { type: Number, default: 0 },
    contributionActivities: [{ type: Schema.Types.ObjectId, ref: 'ContributionActivity' }],
});

module.exports = mongoose.model("User", userSchema);
