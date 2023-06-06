const express = require("express");
const router = express.Router();
const targetController = require("../controllers/targetController");
const authenticateToken = require("../middlewares/authMiddleware");

// Create a target
router.post("/", targetController.createTarget);

// Get all targets
router.get("/", targetController.getAllTargets);

// Get a target by ID
router.get("/:id", targetController.getTargetById);

// Update a target
router.put("/:id", targetController.updateTarget);

// Delete a target
router.delete("/:id", targetController.deleteTarget);

module.exports = router;
