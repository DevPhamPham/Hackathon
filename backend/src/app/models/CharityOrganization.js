const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charityOrganizationSchema = new Schema({
    idOrgan: { type: String, required: true },
    name: { type: String, required: true },
    information: String,
    events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
    contact: String,
    status: String,
});

module.exports = mongoose.model("CharityOrganization", charityOrganizationSchema);
