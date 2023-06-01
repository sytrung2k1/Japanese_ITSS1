const db = require("../services/db");

// Create a target
async function createTarget(targetData) {
	const query = `INSERT INTO Target (target_name) VALUES (?)`;
	const values = [targetData.target_name];

	try {
		const result = await db.query(query, values);
		return result;
	} catch (error) {
		console.error("Error creating target:", error);
		throw error;
	}
}

// Get all targets
async function getAllTargets() {
	const query = `SELECT * FROM Target`;

	try {
		const targets = await db.query(query);
		return targets;
	} catch (error) {
		console.error("Error getting targets:", error);
		throw error;
	}
}

// Get a target by ID
async function getTargetById(targetId) {
	const query = `SELECT * FROM Target WHERE id = ?`;
	const values = [targetId];

	try {
		const target = await db.query(query, values);
		if (target.length === 0) {
			throw new Error("Target not found");
		}
		return target[0];
	} catch (error) {
		console.error("Error getting target:", error);
		throw error;
	}
}

// Update a target
async function updateTarget(targetId, targetData) {
	try {
		const query = `UPDATE Target SET target_name = ? WHERE id = ?`;
		const data = await getTargetById(targetId);
		const values = [targetData.target_name || data.target_name, targetId];

		const result = await db.query(query, values);
		return result;
	} catch (error) {
		console.error("Error updating target:", error);
		throw error;
	}
}

// Delete a target
async function deleteTarget(targetId) {
	const query = `DELETE FROM Target WHERE id = ?`;
	const values = [targetId];

	try {
		const result = await db.query(query, values);
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
