const express = require("express");
const mongoose = require("mongoose");
const mongo = require("./mongo-crud");
const bodyParser = require("body-parser");

main().catch((err) => console.log(err));

async function main() {
	console.log("Connecting to MongoDB...");
	await mongoose.connect(
		"mongodb+srv://admin-mayur:adminpassword@cluster0.dypsu.mongodb.net/?retryWrites=true&w=majority"
	);
	console.log("Connected to MongoDB");
}

bodyParser.urlencoded({ extended: true });
const app = express();
app.use(bodyParser.json());

app.get("/api", (req, res) => {
	res.json({
		users: ["userOne", "userTwo", "userThree"],
	});
});

app.post("/test", (req, res) => {
	res.json(req.body);
});

//ownerData functions

app.get("/api/mongo/owner/findAll", (req, res) => {
	mongo.findOwners({}).then((owner) => {
		res.json(owner);
	});
});

app.get("/api/mongo/owner/findOne", (req, res) => {
	mongo.findOneOwner({ _id: req.query.id }).then((owner) => {
		res.json(owner);
	});
});

app.post("/api/mongo/owner/insert", (req, res) => {
	mongo.insertOneOwner(req.body).then((owner) => {
		res.json(owner);
	});
	// console.log(req.query);
});

app.post("/api/mongo/owner/deleteOne", (req, res) => {
	mongo.deleteOneOwner({ _id: req.query.id }).then((owner) => {
		res.json(owner);
	});
});

//tenant Data functions

app.get("/api/mongo/tenant/findAll", (req, res) => {
	mongo.findTenants({}).then((tenant) => {
		res.json(tenant);
	});
});

app.get("/api/mongo/tenant/findOne", (req, res) => {
	mongo.findOneTenant({ _id: req.query.id }).then((tenant) => {
		res.json(tenant);
	});
});

app.post("/api/mongo/tenant/insert", (req, res) => {
	mongo.insertOneTenant(req.body).then((tenant) => {
		res.json(tenant);
	});
});

app.post("/api/mongo/tenant/deleteOne", (req, res) => {
	mongo.deleteOneTenant({ _id: req.query.id }).then((tenant) => {
		res.json(tenant);
	});
});

//property Data functions

app.get("/api/mongo/property/findAll", (req, res) => {
	mongo.findProperties({}).then((property) => {
		res.json(property);
	});
});

app.get("/api/mongo/property/findOne", (req, res) => {
	mongo.findOneProperty({ _id: req.query.id }).then((property) => {
		res.json(property);
	});
});

app.post("/api/mongo/property/insert", (req, res) => {
	mongo.insertOneProperty(req.body).then((property) => {
		res.json(property);
	});
});

app.post("/api/mongo/property/deleteOne", (req, res) => {
	mongo.deleteOneProperty({ _id: req.query.id }).then((property) => {
		res.json(property);
	});
});

app.post("/api/owner/register", async (req, res) => {
	const data = req.body;
	var propertyData = {
		image: data.imageUrl,
		location: data.location,
		price: data.price,
	};
	await mongo.insertOneProperty(propertyData);
	var property = await mongo.findOneProperty({ location: data.location });
	var ownerData = {
		name: data.name,
		token: data.token,
		property: property._id,
	};
	await mongo.insertOneOwner(ownerData);
	var owner = await mongo.findOneOwner({ name: data.name });
	res.json(owner);
});

app.listen(5000, () => {
	console.log("listening on port 5000");
});
