const jwt = require("jsonwebtoken");
const config = require("../config/config");

function authenticateToken(req, res, next) {
	let token = null;

	// Check if token exists in the request headers
	if (req.headers.authorization) {
		token = req.headers.authorization;
	}
	// Check if token exists in the query parameters
	else if (req.query.token) {
		token = req.query.token;
	}
	// Check if token exists in the cookies
	else if (req.cookies && req.cookies.token) {
		token = req.cookies.token;
	}

	// Check if token is present
	if (!token) {
		return res
			.status(401)
			.json({ message: "Access denied. No token provided." });
	}

	try {
		// Verify the token using your secret key
		const decoded = jwt.verify(token, config.jwtSecret);
		console.log(decoded);
		next();
		// ...
	} catch (error) {
		console.error("Token verification failed:", error);
		return res.status(403).json({ message: "Invalid token." });
	}
}

module.exports = authenticateToken;
