// targetTeacherProfileRoute.js
const express = require("express");
const targetTeacherProfileController = require("../controllers/targetTeacherProfileController");
const router = express.Router();
const authenticateToken = require("../middlewares/authMiddleware");

// Create a target-teacher profile association
router.post(
	"/",
	authenticateToken,
	targetTeacherProfileController.createTargetTeacherProfile
);

// Read a target-teacher profile association by Target ID and TeacherProfile Target ID
router.get(
	"/:targetId/:teacherProfileTargetId",
	authenticateToken,
	targetTeacherProfileController.getTargetTeacherProfile
);

// Update a target-teacher profile association by Target ID and TeacherProfile Target ID
router.put(
	"/:targetId/:teacherProfileTargetId",
	authenticateToken,
	targetTeacherProfileController.updateTargetTeacherProfile
);

// Delete a target-teacher profile association by Target ID and TeacherProfile Target ID
router.delete(
	"/:targetId/:teacherProfileTargetId",
	authenticateToken,
	targetTeacherProfileController.deleteTargetTeacherProfile
);

module.exports = router;
