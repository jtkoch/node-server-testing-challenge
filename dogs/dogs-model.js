const db = require("../data/config")

async function create(data) {
	const [id] = await db("dogs").insert(data)
	return findById(id)
}

async function update(id, data) {
	return null
}

function remove(id) {
	return null
}

function find() {
	return db("dogs")
}

function findById(id) {
	return db("dogs")
		.where("id", id)
		.first()
}

module.exports = {
	create,
	update,
	remove,
	find,
	findById,
}
