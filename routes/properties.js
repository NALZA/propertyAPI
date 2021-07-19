const express = require('express');
const router = express.Router();

//storage for properties
const properties = [
	{
		id: 1,
		address: {
			addressLine: '51 Tree Street',
			suburb: 'Brunswick',
			city: 'Melbourne',
			postcode: '1234',
		},
		description: '52 Tree Street is a nice home',
		price: 560000.0,
	},
	{
		id: 2,
		address: {
			addressLine: '111 Bush Street',
			suburb: 'MoonePonds',
			city: 'Melbourne',
			postcode: '1224',
		},
		description: '111 Bush Street is not in Brunswick',
		price: 560000.0,
	},
	{
		id: 3,
		address: {
			addressLine: '5 apple Road',
			suburb: 'Brunswick',
			city: 'Melbourne',
			postcode: '1234',
		},
		description: '5 apple Road',
		price: 520000.0,
	},
	{
		id: 4,
		address: {
			addressLine: '5 apple Road',
			suburb: 'TEST',
			city: 'Melbourne',
			postcode: '1234',
		},
		description: '5 apple Road',
		price: 2.0,
	},
	{
		id: 5,
		address: {
			addressLine: '5 apple Road',
			suburb: 'TEST',
			city: 'Melbourne',
			postcode: '1234',
		},
		description: '5 apple Road',
		price: 4.0,
	},
	{
		id: 6,
		address: {
			addressLine: '5 apple Road',
			suburb: 'TEST',
			city: 'Melbourne',
			postcode: '1234',
		},
		description: '5 apple Road',
		price: 6.0,
	},
];

/* GET property listing. */
router.get('/', function (req, res, next) {
	res.json(properties);
});

/* GET property listing by suburb */
router.get('/:suburb', function (req, res, next) {
	const foundProperties = properties.filter(
		(property) => property.address.suburb === req.params.suburb
	);
	//get an average for the properties with the suburb requested
	const average =
		foundProperties.reduce((r, v) => r + v.price, 0) /
		foundProperties.length;
	//append a property called average that relates to the average house price.
	for (const prop of foundProperties) {
		if (prop.price == average) prop.average = 'Equal';
		if (prop.price < average) prop.average = 'Less';
		if (prop.price > average) prop.average = 'Greater';
	}
	console.log(foundProperties);
	res.json(foundProperties);
});

/* Post property listing. */
router.post('/', function (req, res, next) {
	const { body } = req;

	const newProperty = {
		//no facility to delete this will work for autoincrement
		id: properties.length + 1,
		address: {
			addressLine: body.address.addressLine,
			suburb: body.address.suburb,
			city: body.address.city,
			postcode: body.address.postcode,
		},
		description: body.description,
		price: body.price,
	};
	//add the property to the array
	properties.push(newProperty);
	//return the added property
	res.status(201).json(newProperty);
});

module.exports = router;
