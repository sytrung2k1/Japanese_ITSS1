const targetService = require("../services/target");

// Create a target
async function createTarget(req, res, next) {
	try {
		const result = await targetService.createTarget(req.body);
		return res.status(200).json(result);
	} catch (error) {
		console.error("Error while creating target", error.message);
		return res.status(500).json({ message: error.message });
	}
}

// Get all targets
async function getAllTargets(req, res, next) {
	try {
		const targets = await targetService.getAllTargets();
		return res.status(200).json(targets);
	} catch (error) {
		console.error("Error while getting targets", error.message);
		return res.status(500).json({ message: error.message });
	}
}

// Get a target by ID
async function getTargetById(req, res, next) {
	const targetId = req.params.id;
	try {
		const target = await targetService.getTargetById(targetId);
		return res.status(200).json(target);
	} catch (error) {
		console.error("Error while getting target", error.message);
		return res.status(500).json({ message: error.message });
	}
}

// Update a target
async function updateTarget(req, res, next) {
	const targetId = req.params.id;
	const targetData = req.body;
	try {
		const target = await targetService.updateTarget(targetId, targetData);
		return res.status(200).json(target);
	} catch (error) {
		console.error("Error while updating target", error.message);
		return res.status(500).json({ message: error.message });
	}
}

// Delete a target
async function deleteTarget(req, res, next) {
	const targetId = req.params.id;
	try {
		const result = await targetService.deleteTarget(targetId);
		return res.status(200).json(result);
	} catch (error) {
		console.error("Error while deleting target", error.message);
		return res.status(500).json({ message: error.message });
	}
}

module.exports = {
	createTarget,
	getAllTargets,
	getTargetById,
	updateTarget,
	deleteTarget,
};
