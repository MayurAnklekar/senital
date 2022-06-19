const mongoose = require("mongoose");
var { Schema } = require("mongoose");

const { Property, Owner, Tenant } = require("./mongo-schema");

const findOneProperty = async (query) => await Property.findOne(query);
const findProperties = async (query) => await Property.find(query);

const insertOneProperty = async (data) => {
	let property = new Property(data);
	property.save();
};

const updateOneProperty = async (query, data) =>
	await Property.updateOne(query, {
		$set: data,
	});

const deleteOneProperty = async (query) => await Property.remove(query);

const findOneTenant = async (query) => await Tenant.findOne(query);

const findTenants = async (query) => await Tenant.find(query);

const insertOneTenant = async (data) => {
	let tenant = new Tenant(data);
	tenant.save();
};

const updateOneTenant = async (query, data) =>
	await Tenant.updateOne(query, {
		$set: data,
	});

const deleteOneTenant = async (query) => await Tenant.remove(query);

const findOneOwner = async (query) => await Owner.findOne(query);

const findOwners = async (query) => await Owner.find(query);

const insertOneOwner = async (data) => {
	var owner = new Owner(data);
	owner.save();
};

const updateOneOwner = async (query, data) =>
	await Owner.updateOne(query, {
		$set: data,
	});

const deleteOneOwner = async (query) => awaitOwner.remove(query);

module.exports = {
	findOneProperty,
	findProperties,
	findOneOwner,
	findOwners,
	findOneTenant,
	findTenants,
	insertOneOwner,
	insertOneProperty,
	insertOneTenant,
	updateOneOwner,
	updateOneProperty,
	updateOneTenant,
	deleteOneOwner,
	deleteOneProperty,
	deleteOneTenant,
};
