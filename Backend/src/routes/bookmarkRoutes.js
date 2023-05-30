// bookmarkRoute.js
const express = require("express");
const router = express.Router();
const bookmarkController = require("../controllers/bookmarkController");
const authenticateToken = require("../middlewares/authMiddleware");

// Create a bookmark
router.post("/", authenticateToken, async (req, res, next) => {
	try {
		const result = await bookmarkController.createBookmark(req.body);
		return res.status(200).json(result);
	} catch (error) {
		console.error("Error while creating bookmark:", error.message);
		return res.status(500).json({ message: error.message });
	}
});

// Read all bookmarks
router.get("/", authenticateToken, async (req, res, next) => {
	try {
		const result = await bookmarkController.getAllBookmarks();
		return res.status(200).json(result);
	} catch (error) {
		console.error("Error while getting bookmarks:", error.message);
		return res.status(500).json({ message: error.message });
	}
});

// Read a bookmark by ID
router.get("/:id", authenticateToken, async (req, res, next) => {
	try {
		const bookmarkId = req.params.id;
		const result = await bookmarkController.getBookmarkById(bookmarkId);
		return res.status(200).json(result);
	} catch (error) {
		console.error("Error while getting bookmark:", error.message);
		return res.status(500).json({ message: error.message });
	}
});

// Update a bookmark by ID
router.put("/:id", authenticateToken, async (req, res, next) => {
	try {
		const bookmarkId = req.params.id;
		const result = await bookmarkController.updateBookmark(
			bookmarkId,
			req.body
		);
		return res.status(200).json(result);
	} catch (error) {
		console.error("Error while updating bookmark:", error.message);
		return res.status(500).json({ message: error.message });
	}
});

// Delete a bookmark by ID
router.delete("/:id", authenticateToken, async (req, res, next) => {
	try {
		const bookmarkId = req.params.id;
		const result = await bookmarkController.deleteBookmark(bookmarkId);
		return res.status(200).json(result);
	} catch (error) {
		console.error("Error while deleting bookmark:", error.message);
		return res.status(500).json({ message: error.message });
	}
});

module.exports = router;
