// targetTeacherProfileRoute.js
const express = require("express");
const targetTeacherProfileController = require("../controllers/targetTeacherProfileController");
const router = express.Router();

// Create a target-teacher profile association
router.post("/", targetTeacherProfileController.createTargetTeacherProfile);

// Read a target-teacher profile association by Target ID and TeacherProfile Target ID
router.get(
	"/:targetId/:teacherProfileTargetId",
	targetTeacherProfileController.getTargetTeacherProfile
);

// Update a target-teacher profile association by Target ID and TeacherProfile Target ID
router.put(
	"/:targetId/:teacherProfileTargetId",
	targetTeacherProfileController.updateTargetTeacherProfile
);

// Delete a target-teacher profile association by Target ID and TeacherProfile Target ID
router.delete(
	"/:targetId/:teacherProfileTargetId",
	targetTeacherProfileController.deleteTargetTeacherProfile
);

module.exports = router;
