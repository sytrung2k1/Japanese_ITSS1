// feedbackRoutes.js
const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");
const authenticateToken = require("../middlewares/authMiddleware");

// Create a feedback
router.post("/", authenticateToken, async (req, res, next) => {
	try {
		const result = await feedbackController.createFeedback(req.body);
		return res.status(201).json(result);
	} catch (error) {
		console.error("Error while creating feedback:", error.message);
		return res.status(500).json({ message: error.message });
	}
});

// Read all feedbacks
router.get("/", authenticateToken, async (req, res, next) => {
	try {
		const result = await feedbackController.getAllFeedbacks();
		return res.status(200).json(result);
	} catch (error) {
		console.error("Error while getting feedbacks:", error.message);
		return res.status(500).json({ message: error.message });
	}
});

// Read a feedback by ID
router.get("/:id", authenticateToken, async (req, res, next) => {
	try {
		const feedbackId = req.params.id;
		const result = await feedbackController.getFeedbackById(feedbackId);
		return res.status(200).json(result);
	} catch (error) {
		console.error("Error while getting feedback:", error.message);
		return res.status(500).json({ message: error.message });
	}
});

// Update a feedback by ID
router.put("/:id", authenticateToken, async (req, res, next) => {
	try {
		const feedbackId = req.params.id;
		const result = await feedbackController.updateFeedback(
			feedbackId,
			req.body
		);
		return res.status(200).json(result);
	} catch (error) {
		console.error("Error while updating feedback:", error.message);
		return res.status(500).json({ message: error.message });
	}
});

// Delete a feedback by ID
router.delete("/:id", authenticateToken, async (req, res, next) => {
	try {
		const feedbackId = req.params.id;
		const result = await feedbackController.deleteFeedback(feedbackId);
		return res.status(200).json(result);
	} catch (error) {
		console.error("Error while deleting feedback:", error.message);
		return res.status(500).json({ message: error.message });
	}
});

module.exports = router;
