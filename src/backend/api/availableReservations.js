const express = require("express");
const pool = require("./../database");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Get meals that still has available reservations

router.get("/", (request, response) => {
	pool.query(
		`SELECT meal.id, meal.title,  
    SUM(reservation.number_of_guests) AS total_reservations, 
    meal.max_reservations
    FROM meal 
    JOIN reservation ON reservation.meal_id = meal.id
    WHERE reservation.number_of_guests < meal.max_reservations
    GROUP BY reservation.meal_id`,
		function(error, results, fields) {
			response.json(results);
			console.log(results);
		}
	);
});

module.exports = router;
