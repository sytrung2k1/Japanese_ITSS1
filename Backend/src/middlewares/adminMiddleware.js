// Example middleware function
function requireAdminRole(req, res, next) {
	const roles = {
		1: "admin",
		2: "teacher",
		3: "student",
	};
	const userRole = req.userRole; // Assuming role is stored in req.user.role
	console.log(userRole);
	if (roles[userRole] === "admin") {
		// User has the "admin" role, proceed to the next middleware or route handler
		console.log("admin");
		next("route");
	} else {
		next();
		// User does not have the "admin" role, send an error response
		// return res.status(403).json({ message: "Access denied" });
	}
}

// Apply the admin role middleware to all routes
// app.use(requireAdminRole);

module.exports = requireAdminRole;
