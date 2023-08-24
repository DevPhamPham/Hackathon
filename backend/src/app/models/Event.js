const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    idOrgan: { type: String, required: true },
    eventName: { type: String, required: true },
    targetInfo: { type: String, required: true },
    image: String,
    audience: String,
    details: String,
    contact: String,
    status: String,
});

module.exports = mongoose.model("Event", eventSchema);
