exports.seed = async function(knex) {
	await knex("dogs").truncate()
	await knex("dogs").insert([
		{ breed: "weimaraner" },
		{ breed: "basset hound" },
		{ breed: "mastiff" },
		{ breed: "dobermann" },
	])
}
