require("dotenv").config();

const config = {
	db: {
		/* don't expose password or any sensitive info, done only for demo */
		host: process.env.DB_HOST,
		user: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		waitForConnections: true,
		connectionLimit: 10,
		queueLimit: 0,
	},
	listPerPage: 10,
	jwtSecret: process.env.JWT_SECRET,
};
module.exports = config;
