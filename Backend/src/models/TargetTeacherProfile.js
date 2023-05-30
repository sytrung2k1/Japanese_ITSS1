// targetTeacherProfileModel.js
const db = require("../services/db");

// Create a target-teacher profile association
async function createTargetTeacherProfile(targetId, teacherProfileTargetId) {
	const query =
		"INSERT INTO Target_TeacherProfile (Target_id, TeacherProfile_target_id) VALUES (?, ?)";
	const values = [targetId, teacherProfileTargetId];

	try {
		const result = await db.query(query, values);
		return result;
	} catch (error) {
		console.error("Error creating target-teacher profile:", error.message);
		throw error;
	}
}

// Read a target-teacher profile association by Target ID and TeacherProfile Target ID
async function getTargetTeacherProfile(targetId, teacherProfileTargetId) {
	const query =
		"SELECT * FROM Target_TeacherProfile WHERE Target_id = ? AND TeacherProfile_target_id = ?";
	const values = [targetId, teacherProfileTargetId];

	try {
		const result = await db.query(query, values);
		return result;
	} catch (error) {
		console.error("Error getting target-teacher profile:", error.message);
		throw error;
	}
}

// Update a target-teacher profile association by Target ID and TeacherProfile Target ID
async function updateTargetTeacherProfile(
	targetId,
	teacherProfileTargetId,
	newData
) {
	const query =
		"UPDATE Target_TeacherProfile SET Target_id = ?, TeacherProfile_target_id = ? WHERE Target_id = ? AND TeacherProfile_target_id = ?";
	const values = [
		newData.Target_id,
		newData.TeacherProfile_target_id,
		targetId,
		teacherProfileTargetId,
	];

	try {
		const result = await db.query(query, values);
		return result;
	} catch (error) {
		console.error("Error updating target-teacher profile:", error.message);
		throw error;
	}
}

// Delete a target-teacher profile association by Target ID and TeacherProfile Target ID
async function deleteTargetTeacherProfile(targetId, teacherProfileTargetId) {
	const query =
		"DELETE FROM Target_TeacherProfile WHERE Target_id = ? AND TeacherProfile_target_id = ?";
	const values = [targetId, teacherProfileTargetId];

	try {
		const result = await db.query(query, values);
		return result;
	} catch (error) {
		console.error("Error deleting target-teacher profile:", error.message);
		throw error;
	}
}

module.exports = {
	createTargetTeacherProfile,
	getTargetTeacherProfile,
	updateTargetTeacherProfile,
	deleteTargetTeacherProfile,
};
