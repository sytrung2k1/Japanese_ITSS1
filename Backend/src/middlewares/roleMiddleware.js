// Example middleware function
function requireRole(requiredRole) {
	const roles = {
		1: "admin",
		2: "teacher",
		3: "student",
	};
	return (req, res, next) => {
		const userRole = req.userRole; // Assuming role is stored in the req.user object

		if (roles[userRole] === requiredRole) {
			// User has the required role, proceed to the next middleware or route handler
			next();
		} else {
			// User does not have the required role, send an error response
			res.status(403).json({ message: "Access denied" });
		}
	};
}
module.exports = requireRole;
