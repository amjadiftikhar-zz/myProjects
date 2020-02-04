const express = require("express");
const pool = require("./../database");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Returns all reservations
router.get("/", (request, response) => {
	pool.query("SELECT * FROM reservation", function(error, results, fields) {
		if (error) {
			return response.send(error);
		}
		// results will contain the results of the query
		response.json(results);
		// console.log(results);
	});
});

// Returns reservation by id
router.get("/:id", (request, response) => {
	const { id } = request.params;
	pool.query(`SELECT * FROM reservation WHERE id = ${id}`, function(
		error,
		results,
		fields
	) {
		response.json(results);
		// console.log(results);
	});
});

// Adds a new reservation
router.post("/", (request, response) => {
	const newReservation = request.body;
	pool.query(`INSERT INTO reservation SET ?`, newReservation, function(
		error,
		results,
		fields
	) {
		response.json(results);
		// console.log(results);
	});
});

// Updates the meal by id
router.put("/:id", (request, response) => {
	pool.query(
		`UPDATE reservation SET number_of_guests = ?, meal_id = ?, created_date = ? 
        WHERE id = ?`,
		[
			request.body.number_of_guests,
			request.body.meal_id,
			request.body.created_date,
			request.params.id
		],
		function(error, results, fields) {
			response.send("meal updated");
			// console.log("meal updated");
		}
	);
});

// Deletes the meal by id
router.delete("/:id", (request, response) => {
	const reservationId = request.params.id;
	pool.query(
		"DELETE FROM reservation WHERE reservation.id =?",
		reservationId,
		function(error, results, fields) {
			response.send("meal deleted successfully");
			// console.log("meal deleted successfully");
		}
	);
});

module.exports = router;
