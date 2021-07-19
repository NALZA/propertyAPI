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

module.exports = router;
