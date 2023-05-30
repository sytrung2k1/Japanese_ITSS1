const Target = require("../models/Target");

// Create a target
async function createTarget(targetData) {
	try {
		const result = await Target.createTarget(targetData);
		return result;
	} catch (error) {
		console.error("Error creating target:", error);
		throw error;
	}
}

// Get all targets
async function getAllTargets() {
	try {
		const targets = await Target.getAllTargets();
		return targets;
	} catch (error) {
		console.error("Error getting targets:", error);
		throw error;
	}
}

// Get a target by ID
async function getTargetById(targetId) {
	try {
		const target = await Target.getTargetById(targetId);
		if (!target) {
			throw new Error("Target not found");
		}
		return target;
	} catch (error) {
		console.error("Error getting target:", error);
		throw error;
	}
}

// Update a target
async function updateTarget(targetId, targetData) {
	try {
		const target = await Target.updateTarget(targetId, targetData);
		if (!target) {
			throw new Error("Target not found");
		}
		return target;
	} catch (error) {
		console.error("Error updating target:", error);
		throw error;
	}
}

// Delete a target
async function deleteTarget(targetId) {
	try {
		const target = await Target.deleteTarget(targetId);
		if (!target) {
			throw new Error("Target not found");
		}
		await target.destroy();
		return { message: "Target deleted successfully" };
	} catch (error) {
		console.error("Error deleting target:", error);
		throw error;
	}
}

module.exports = {
	createTarget,
	getAllTargets,
	getTargetById,
	updateTarget,
	deleteTarget,
};
