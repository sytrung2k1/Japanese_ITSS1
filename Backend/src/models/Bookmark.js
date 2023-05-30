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
	const query = "SELECT * FROM Bookmark WHERE id = ?";
	const values = [bookmarkId];

	try {
		const result = await db.query(query, values);
		return result;
	} catch (error) {
		console.error("Error while getting bookmark:", error.message);
		throw error;
	}
}

// Update a bookmark by ID
async function updateBookmark(bookmarkId, data) {
	const query = `UPDATE Bookmark SET
    studentId = ?,
    teacher_profile_id = ?,
    target_id = ?,
    status = ?
    WHERE id = ?`;
	const values = [
		data.studentId,
		data.teacher_profile_id,
		data.target_id,
		data.status,
		bookmarkId,
	];

	try {
		const result = await db.query(query, values);
		return result;
	} catch (error) {
		console.error("Error while updating bookmark:", error.message);
		throw error;
	}
}

// Delete a bookmark by ID
async function deleteBookmark(bookmarkId) {
	const query = "DELETE FROM Bookmark WHERE id = ?";
	const values = [bookmarkId];

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
