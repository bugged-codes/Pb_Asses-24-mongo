require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const secureUrl = process.env.REMOTE_URL;
const secureDb = process.env.REMOTE_DB;
const urlParams = process.env.REMOTE_URL_PARAMS;

const mongooseConnection = async () => {
	try {
		await mongoose.connect(secureUrl + secureDb + urlParams);
		console.log('Connected to remote db through mongoose.');
		// console.log('dbConnect response: ', dbConnect.connection._connectionString);

		// const first = await mongoose.connection.collection(secureColl).findOne();
		// console.log('First Document is', first);
	} catch (err) {
		console.log('Connection error: ', err);
	}
};

// OR

// const mongooseConnection = mongoose
// 	.connect(secureUrl, { dbName: secureDb })
// 	.then(() => {
// 		console.log('Connected to mongodb');
// 		// console.log('Connection URL: ', mongoose.connection._connectionString);
// 	})
// 	.then(async () => {
// 		const first = await mongoose.connection.collection(secureColl).findOne();
// 		console.log('First Document is', first);
// 	})
// 	.catch((err) => console.log(err));

module.exports = mongooseConnection;
