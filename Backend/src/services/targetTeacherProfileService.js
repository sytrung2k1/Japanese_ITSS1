// targetTeacherProfileService.js

const targetTeacherProfileModel = require("../models/TargetTeacherProfile");

// Create a target-teacher profile association
async function createTargetTeacherProfile(targetId, teacherProfileTargetId) {
	try {
		const result = await targetTeacherProfileModel.createTargetTeacherProfile(
			targetId,
			teacherProfileTargetId
		);
		return result;
	} catch (error) {
		console.error(
			"Error while creating target-teacher profile:",
			error.message
		);
		throw error;
	}
}

// Read a target-teacher profile association by Target ID and TeacherProfile Target ID
async function getTargetTeacherProfile(targetId, teacherProfileTargetId) {
	try {
		const result = await targetTeacherProfileModel.getTargetTeacherProfile(
			targetId,
			teacherProfileTargetId
		);
		return result;
	} catch (error) {
		console.error("Error while getting target-teacher profile:", error.message);
		throw error;
	}
}

// Update a target-teacher profile association by Target ID and TeacherProfile Target ID
async function updateTargetTeacherProfile(
	targetId,
	teacherProfileTargetId,
	newData
) {
	try {
		const result = await targetTeacherProfileModel.updateTargetTeacherProfile(
			targetId,
			teacherProfileTargetId,
			newData
		);
		return result;
	} catch (error) {
		console.error(
			"Error while updating target-teacher profile:",
			error.message
		);
		throw error;
	}
}

// Delete a target-teacher profile association by Target ID and TeacherProfile Target ID
async function deleteTargetTeacherProfile(targetId, teacherProfileTargetId) {
	try {
		const result = await targetTeacherProfileModel.deleteTargetTeacherProfile(
			targetId,
			teacherProfileTargetId
		);
		return result;
	} catch (error) {
		console.error(
			"Error while deleting target-teacher profile:",
			error.message
		);
		throw error;
	}
}

module.exports = {
	createTargetTeacherProfile,
	getTargetTeacherProfile,
	updateTargetTeacherProfile,
	deleteTargetTeacherProfile,
};
