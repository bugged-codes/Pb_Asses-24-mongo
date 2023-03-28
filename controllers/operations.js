const mongo = require('../database/db-operations');

const empInsertOne = async (req, res) => {
	const incomingData = req.body;
	try {
		// const result = await insert2dbOne(incomingData);
		const result = await mongo.insert2dbOne(incomingData);
		console.log(`Result is: `, result);
		return res.status(200).send({ response: { message: `Controller and Database are working fine.` }, actionPerformed: { message: `One document was successfully added in collection.`, result: result }, data: incomingData });
	} catch (error) {
		console.log(`Something went wrong while inserting single document`, error);
		res.status(500).send({ message: `Something went wrong while inserting single document` });
	}
	// return res.status(200).send({ response: { message: `Controller is working.` }, actionPerformed: result, data: incomingData });
};

module.exports = { empInsertOne };
