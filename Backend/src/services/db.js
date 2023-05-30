const mysql = require("mysql2/promise");
const config = require("../config/config.js");

let connection = null;
async function createConnection() {
	connection = await mysql.createConnection(config.db);
}

async function query(sql, params) {
	if (!connection) {
		await createConnection();
	}
	const [results] = await connection.execute(sql, params);
	return results;
}

async function getPool() {
	return await mysql.createPool(config.db);
}

module.exports = {
	query,
	getPool,
	createConnection,
};
