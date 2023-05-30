const db = require("../services/db");

// Create a teacher profile
async function createTeacherProfile(teacherProfileData) {
	const query = `INSERT INTO TeacherProfile 
    (teacher_id, target_id, mail, phone_number, experience, level, tution, address, available_day)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
	const values = [
		teacherProfileData.teacher_id,
		teacherProfileData.target_id,
		teacherProfileData.mail,
		teacherProfileData.phone_number,
		teacherProfileData.experience,
		teacherProfileData.level,
		teacherProfileData.tution,
		teacherProfileData.address,
		teacherProfileData.available_day,
	];

	try {
		const result = await db.query(query, values);
		return result;
	} catch (error) {
		console.error("Error creating teacher profile:", error);
		throw error;
	}
}

// Get all teacher profiles
async function getAllTeacherProfiles() {
	const query = `SELECT * FROM TeacherProfile`;

	try {
		const teacherProfiles = await db.query(query);
		return teacherProfiles;
	} catch (error) {
		console.error("Error getting teacher profiles:", error);
		throw error;
	}
}

// Get a teacher profile by ID
async function getTeacherProfileById(teacherProfileId) {
	const query = `SELECT * FROM TeacherProfile WHERE id = ?`;
	const values = [teacherProfileId];

	try {
		const teacherProfile = await db.query(query, values);
		if (teacherProfile.length === 0) {
			throw new Error("Teacher profile not found");
		}
		return teacherProfile[0];
	} catch (error) {
		console.error("Error getting teacher profile:", error);
		throw error;
	}
}

// Update a teacher profile
async function updateTeacherProfile(teacherProfileId, teacherProfileData) {
	const query = `UPDATE TeacherProfile SET 
    teacher_id = ?, target_id = ?, mail = ?, phone_number = ?, 
    experience = ?, level = ?, tution = ?, address = ?, available_day = ?
    WHERE id = ?`;
	const values = [
		teacherProfileData.teacher_id,
		teacherProfileData.target_id,
		teacherProfileData.mail,
		teacherProfileData.phone_number,
		teacherProfileData.experience,
		teacherProfileData.level,
		teacherProfileData.tution,
		teacherProfileData.address,
		teacherProfileData.available_day,
		teacherProfileId,
	];

	try {
		const result = await db.query(query, values);
		return result;
	} catch (error) {
		console.error("Error updating teacher profile:", error);
		throw error;
	}
}

// Delete a teacher profile
async function deleteTeacherProfile(teacherProfileId) {
	const query = `DELETE FROM TeacherProfile WHERE id = ?`;
	const values = [teacherProfileId];

	try {
		const result = await db.query(query, values);
		return result;
	} catch (error) {
		console.error("Error deleting teacher profile:", error);
		throw error;
	}
}

module.exports = {
	createTeacherProfile,
	getAllTeacherProfiles,
	getTeacherProfileById,
	updateTeacherProfile,
	deleteTeacherProfile,
};
