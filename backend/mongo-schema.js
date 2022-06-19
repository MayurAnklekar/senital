const mongoose = require("mongoose");
var { Schema } = require("mongoose");

const tenantSchema = new Schema({
	name: String,
	token: String,
	property: { type: Schema.Types.ObjectID, ref: "Owner" },
});

const ownerSchema = new Schema({
	name: String,
	token: String,
	property: { type: Schema.Types.ObjectID, ref: "Property" },
});

const propertySchema = new Schema({
	image: String, //url
	location: String,
	price: Number,
	// ownerName: { type: Schema.Types.ObjectID, ref: "Owner" },
	// tenantName: { type: Schema.Types.ObjectID, ref: "Tenant" },
});

var Tenant = mongoose.model("Tenant", tenantSchema);
var Owner = mongoose.model("Owner", ownerSchema);
var Property = mongoose.model("Property", propertySchema);

module.exports = { Tenant, Owner, Property };
