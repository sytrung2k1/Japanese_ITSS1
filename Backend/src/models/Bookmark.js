// bookmarkModel.js
const db = require("../services/db");

// Create a bookmark
async function createBookmark(data) {
	const query = `INSERT INTO Bookmark 
    (studentId, teacher_profile_id, target_id, status) 
    VALUES (?, ?, ?, ?)`;
	const values = [
		data.studentId,
		data.teacher_profile_id,
		data.target_id,
		data.status,
	];

	try {
		const result = await db.query(query, values);
		return result;
	} catch (error) {
		console.error("Error while creating bookmark:", error.message);
		throw error;
	}
}

// Read all bookmarks
async function getAllBookmarks() {
	const query = "SELECT * FROM Bookmark";

	try {
		const result = await db.query(query);
		return result;
	} catch (error) {
		console.error("Error while getting bookmarks:", error.message);
		throw error;
	}
}

// Read a bookmark by ID
async function getBookmarkById(bookmarkId) {
	const studentId = bookmarkId.studentId;
	const teacher_profile_id = bookmarkId.teacher_profile_id;
	const query =
		"SELECT * FROM Bookmark WHERE studentId = ? AND teacher_profile_id = ?";
	const values = [studentId, teacher_profile_id];

	try {
		const result = await db.query(query, values);
		return result;
	} catch (error) {
		console.error("Error while getting bookmark:", error.message);
		throw error;
	}
}

// Update a bookmark by ID
async function updateBookmark(data) {
	try {
		const studentId = data.studentId;
		const teacher_profile_id = data.teacher_profile_id;
		const query = `UPDATE Bookmark SET
    target_id = ?,
    status = ?
    WHERE studentId = ? AND teacher_profile_id = ?`;

		const mBookmark = await getBookmarkById(data);
		const bookmark = mBookmark[0];
		const values = [
			data.target_id || bookmark.target_id,
			data.status || bookmark.status,
			studentId,
			teacher_profile_id,
		];

		const result = await db.query(query, values);
		return result;
	} catch (error) {
		console.error("Error while updating bookmark:", error.message);
		throw error;
	}
}

// Delete a bookmark by ID
async function deleteBookmark(bookmarkId) {
	const studentId = bookmarkId.studentId;
	const teacher_profile_id = bookmarkId.teacher_profile_id;
	const query =
		"DELETE FROM Bookmark WHERE studentId = ? AND teacher_profile_id = ?";
	const values = [studentId, teacher_profile_id];

	try {
		const result = await db.query(query, values);
		return result;
	} catch (error) {
		console.error("Error while deleting bookmark:", error.message);
		throw error;
	}
}

module.exports = {
	createBookmark,
	getAllBookmarks,
	getBookmarkById,
	updateBookmark,
	deleteBookmark,
};
