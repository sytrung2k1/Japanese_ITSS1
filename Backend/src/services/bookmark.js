// bookmarkService.js

const bookmarkModel = require("../models/Bookmark");

// Create a bookmark
async function createBookmark(data) {
	try {
		const result = await bookmarkModel.createBookmark(data);
		return result;
	} catch (error) {
		console.error("Error while creating bookmark:", error.message);
		throw error;
	}
}

// Read all bookmarks
async function getAllBookmarks() {
	try {
		const result = await bookmarkModel.getAllBookmarks();
		return result;
	} catch (error) {
		console.error("Error while getting bookmarks:", error.message);
		throw error;
	}
}

// Read a bookmark by ID
async function getBookmarkById(bookmarkId) {
	try {
		const result = await bookmarkModel.getBookmarkById(bookmarkId);
		return result;
	} catch (error) {
		console.error("Error while getting bookmark:", error.message);
		throw error;
	}
}

// Update a bookmark by ID
async function updateBookmark(data) {
	try {
		const result = await bookmarkModel.updateBookmark(data);
		return result;
	} catch (error) {
		console.error("Error while updating bookmark:", error.message);
		throw error;
	}
}

// Delete a bookmark by ID
async function deleteBookmark(bookmarkId) {
	try {
		const result = await bookmarkModel.deleteBookmark(bookmarkId);
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
