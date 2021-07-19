var express = require('express');
var router = express.Router();

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
];

/* GET property listing. */
router.get('/', function (req, res, next) {
	res.json(properties);
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

	properties.push(newProperty);

	res.status(201).json(newProperty);
});

module.exports = router;
