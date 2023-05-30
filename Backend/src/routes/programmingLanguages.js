const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authMiddleware");

// Public route (no authentication required)
router.get("/public", (req, res) => {
	res.json({ message: "Public route." });
});

// Protected route (requires authentication)
router.get("/protected", authenticateToken, (req, res) => {
	res.json({ message: "Protected route.", user: req.user });
});

module.exports = router;
