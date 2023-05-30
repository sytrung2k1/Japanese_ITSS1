const express = require("express");
const router = express.Router();
const targetController = require("../controllers/targetController");
const authenticateToken = require("../middlewares/authMiddleware");

// Create a target
router.post("/", authenticateToken, targetController.createTarget);

// Get all targets
router.get("/", authenticateToken, targetController.getAllTargets);

// Get a target by ID
router.get("/:id", authenticateToken, targetController.getTargetById);

// Update a target
router.put("/:id", authenticateToken, targetController.updateTarget);

// Delete a target
router.delete("/:id", targetController.deleteTarget);

module.exports = router;
