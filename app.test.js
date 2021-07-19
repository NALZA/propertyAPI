const request = require('supertest');
const { response } = require('./app');
const app = require('./app');

describe('Property API', () => {
	//Create a  test to add property with address, sale price, and description.
	//Could make this property not properties ie remove plural
	it('POST /properties --> added property', () => {
		return request(app)
			.post('/properties')
			.send({
				address: {
					addressLine: '5 Peel Street',
					suburb: 'Brunswick',
					city: 'Melbourne',
					postcode: '1234',
				},
				description: '5 Peel Street is a beautiful home',
				price: 120000.0,
			})
			.expect('Content-Type', /json/)
			.expect(201)
			.then((response) => {
				expect(response.body).toEqual(
					expect.objectContaining({
						address: expect.objectContaining({
							addressLine: '5 Peel Street',
							suburb: 'Brunswick',
							city: 'Melbourne',
							postcode: '1234',
						}),
						description: '5 Peel Street is a beautiful home',
						price: 120000.0,
					})
				);
			});
	});
	//test is to retreive a search of all properties.
	it('GET /properties --> array properties', () => {
		return request(app)
			.get('/properties')
			.expect('Content-Type', /json/)
			.expect(200)
			.then((response) => {
				expect(response.body).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							id: expect.any(Number),
							address: expect.objectContaining({
								addressLine: expect.any(String),
								suburb: expect.any(String),
								city: expect.any(String),
								postcode: expect.any(String),
							}),
							description: expect.any(String),
							price: expect.any(Number),
						}),
					])
				);
			});
	});

	//test to show properties with field to indicate if the property is above, below or equal to
	//the avg price for properties in the suburb.
	it('GET /properties/suburb --> array properties filtered', () => {
		return request(app)
			.get('/properties/TEST')
			.expect('Content-Type', /json/)
			.expect(200)
			.then((response) => {
				expect(response.body).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							id: expect.any(Number),
							address: expect.objectContaining({
								addressLine: expect.any(String),
								suburb: 'TEST',
								city: expect.any(String),
								postcode: expect.any(String),
							}),
							description: expect.any(String),
							price: expect.any(Number),
							average: 'Less',
						}),
						expect.objectContaining({
							id: expect.any(Number),
							address: expect.objectContaining({
								addressLine: expect.any(String),
								suburb: 'TEST',
								city: expect.any(String),
								postcode: expect.any(String),
							}),
							description: expect.any(String),
							price: expect.any(Number),
							average: 'Equal',
						}),
						expect.objectContaining({
							id: expect.any(Number),
							address: expect.objectContaining({
								addressLine: expect.any(String),
								suburb: 'TEST',
								city: expect.any(String),
								postcode: expect.any(String),
							}),
							description: expect.any(String),
							price: expect.any(Number),
							average: 'Greater',
						}),
					])
				);
			});
	});

	//test to validate that the average price filter is working as intended.
	it('GET /properties/suburb --> valid array properties filtered', () => {});
});
