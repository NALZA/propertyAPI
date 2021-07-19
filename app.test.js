const request = require('supertest');
const { response } = require('./app');
const app = require('./app');

describe('Property API', () => {
	//first test is to retreive a search of all properties.
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
});
