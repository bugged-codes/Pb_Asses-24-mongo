const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://bugged-codes:Test123@cluster0.yhddi62.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function mongodbDriver() {
	try {
		await client.connect();
		const db = client.db('Human_Resource');
		const collection = db.collection('Employees');

		// Find the first document in the collection
		const first = await collection.findOne();
		console.log('First Document is', first);
	} catch (error) {
		console.log(error);
	} finally {
		// Close the database connection when finished or an error occurs
		await client.close();
	}
}
// run();

module.exports = mongodbDriver;
