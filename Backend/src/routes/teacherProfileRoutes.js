const express = require("express");
const router = express.Router();
const teacherProfileController = require("../controllers/teacherProfileController");
const authenticateToken = require("../middlewares/authMiddleware");

// Create a teacher profile
router.post(
	"/",
	authenticateToken,
	teacherProfileController.createTeacherProfile
);

// Get all teacher profiles
router.get("/", teacherProfileController.getAllTeacherProfiles);

// Get a teacher profile by ID
router.get("/:id", teacherProfileController.getTeacherProfileById);

// Update a teacher profile
router.put(
	"/:id",
	authenticateToken,
	teacherProfileController.updateTeacherProfile
);

// Delete a teacher profile
router.delete("/:id", teacherProfileController.deleteTeacherProfile);

module.exports = router;
