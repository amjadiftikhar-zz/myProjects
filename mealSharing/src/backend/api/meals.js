const express = require("express");
const pool = require("./../database");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Get meals that has a price smaller than maxPrice
// Get meals that still has available reservations
// Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
// Get meals that has been created after the date
// Only specific number of meals

router.get("/", (request, response) => {
	const { maxPrice } = request.query;
	const { availableReservations } = request.query;
	const { title } = request.query;
	const { createdAfter } = request.query;
	const { limit } = request.query;
	if (maxPrice) {
		pool.query(`SELECT * FROM meal WHERE price <= ${maxPrice}`, function(
			error,
			results,
			fields
		) {
			response.json(results);
			// console.log(results);
		});
	}
	if (availableReservations) {
		pool.query(
			`SELECT meal.id AS meal_id, meal.title AS meal_title,  
    SUM(reservation.number_of_guests), 
    meal.max_reservations
    FROM meal 
    JOIN reservation ON reservation.meal_id = meal.id
    WHERE reservation.number_of_guests < meal.max_reservations
    GROUP BY reservation.meal_id`,
			function(error, results, fields) {
				response.json(results);
				// console.log(results);
			}
		);
	}
	if (title) {
		pool.query(`SELECT * FROM meal WHERE title LIKE '%${title}%'`, function(
			error,
			results,
			fields
		) {
			if (error) {
				console.log("error", error);
			} else response.json(results);
			// console.log(results);
		});
	}
	if (createdAfter) {
		pool.query(
			`SELECT * FROM meal WHERE created_date >= '${createdAfter}'`,
			function(error, results, fields) {
				if (error) {
					console.log("error", error);
				} else response.json(results);
				// console.log(results);
			}
		);
	}
	if (limit) {
		pool.query(
			`SELECT meal.id, meal.title, meal.description, meal.created_date, meal.location
      FROM meal WHERE meal.price >= 100 ORDER BY id ASC LIMIT ${limit}`,
			function(error, results, fields) {
				if (error) {
					console.log("error", error);
				} else response.json(results);
				// console.log(results);
			}
		);
	}
	// Returns all meals
	else {
		pool.query(
			`SELECT  meal.id, meal.title, meal.description, meal.price, review.stars FROM meal
		INNER JOIN review ON review.meal_id = meal.id`,
			function(error, results, fields) {
				if (error) {
					return response.send(error);
				} else response.json(results);
				//
				// console.log(results);
			}
		);
	}
});

// Returns meal by id
router.get("/:id", (request, response) => {
	const { id } = request.params;
	pool.query(
		`SELECT  meal.id, meal.title, meal.description, meal.price, review.stars FROM meal
	INNER JOIN review ON review.meal_id = meal.id WHERE meal.id = ${id}`,
		function(error, results, fields) {
			if (error) {
				console.log("error", error);
			} else response.json(results);
			// console.log(results);
		}
	);
});

// Adds a new meal
router.post("/", (request, response) => {
	const newMeal = request.body;
	console.log("Meal", newMeal);
	pool.query("INSERT INTO meal SET ?", newMeal, function(
		error,
		results,
		fields
	) {
		if (error) {
			console.log("error", error);
		} else response.json(results);
		// console.log(results);
	});
});

// Deletes the meal by id
router.delete("/:id", (request, response) => {
	const mealID = request.params.id;
	pool.query("DELETE FROM meal WHERE meal.id =?", mealID, function(
		error,
		results,
		fields
	) {
		response.send("meal deleted successfully");
		// console.log("meal deleted successfully");
	});
});

// Updates the meal by id
router.put("/:id", (request, response) => {
	pool.query(
		`UPDATE meal SET title = ?, price = ?, max_reservations = ? 
  WHERE id = ?`,
		[
			request.body.title,
			request.body.price,
			request.body.max_reservations,
			request.params.id
		],
		function(error, results, fields) {
			response.send("meal updated");
			// console.log("meal updated");
		}
	);
});

module.exports = router;
