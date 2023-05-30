// targetTeacherProfileController.js
const targetTeacherProfileService = require("../services/targetTeacherProfileService");

// Create a target-teacher profile association
async function createTargetTeacherProfile(req, res, next) {
	const { targetId, teacherProfileTargetId } = req.body;

	try {
		const result = await targetTeacherProfileService.createTargetTeacherProfile(
			targetId,
			teacherProfileTargetId
		);
		return res.status(200).json(result);
	} catch (error) {
		console.error(
			"Error while creating target-teacher profile:",
			error.message
		);
		return res.status(500).json({ message: error.message });
	}
}

// Read a target-teacher profile association by Target ID and TeacherProfile Target ID
async function getTargetTeacherProfile(req, res, next) {
	const { targetId, teacherProfileTargetId } = req.params;

	try {
		const result = await targetTeacherProfileService.getTargetTeacherProfile(
			targetId,
			teacherProfileTargetId
		);
		return res.status(200).json(result);
	} catch (error) {
		console.error("Error while getting target-teacher profile:", error.message);
		return res.status(500).json({ message: error.message });
	}
}

// Update a target-teacher profile association by Target ID and TeacherProfile Target ID
async function updateTargetTeacherProfile(req, res, next) {
	const { targetId, teacherProfileTargetId } = req.params;
	const newData = req.body;

	try {
		const result = await targetTeacherProfileService.updateTargetTeacherProfile(
			targetId,
			teacherProfileTargetId,
			newData
		);
		return res.status(200).json(result);
	} catch (error) {
		console.error(
			"Error while updating target-teacher profile:",
			error.message
		);
		return res.status(500).json({ message: error.message });
	}
}

// Delete a target-teacher profile association by Target ID and TeacherProfile Target ID
async function deleteTargetTeacherProfile(req, res, next) {
	const { targetId, teacherProfileTargetId } = req.params;

	try {
		const result = await targetTeacherProfileService.deleteTargetTeacherProfile(
			targetId,
			teacherProfileTargetId
		);
		return res.status(200).json(result);
	} catch (error) {
		console.error(
			"Error while deleting target-teacher profile:",
			error.message
		);
		return res.status(500).json({ message: error.message });
	}
}

module.exports = {
	createTargetTeacherProfile,
	getTargetTeacherProfile,
	updateTargetTeacherProfile,
	deleteTargetTeacherProfile,
};
