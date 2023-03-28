require('dotenv').config();
const express = require('express');
const app = express();
const mongooseConnection = require('./database/mongoose-connection');
const router = require('./routes/router');

app.use(express.json());
app.use(router);

app.listen(process.env.PORT, async () => {
	try {
		await mongooseConnection();
		console.log('Listening on port: ', process.env.PORT);
	} catch (e) {
		console.log(e);
	}
});
