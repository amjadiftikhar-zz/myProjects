const express = require("express");
const pool = require("./../database");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Returns all reviews
router.get("/", (request, response) => {
	pool.query("SELECT * FROM review", function(error, results, fields) {
		if (error) {
			return response.send(error);
		}
		response.json(results);
		// console.log(results);
	});
});

// Returns reviews by id
router.get("/:id", (request, response) => {
	const { id } = request.params;
	pool.query(`SELECT * FROM review WHERE id = ${id}`, function(
		error,
		results,
		fields
	) {
		response.json(results);
		// console.log(results);
	});
});

// Adds a new review
router.post("/", (request, response) => {
	const newReview = request.body;
	pool.query(`INSERT INTO review SET ?`, newReview, function(
		error,
		results,
		fields
	) {
		response.json(results);
		// console.log(results);
	});
});

// Updates the review by id
router.put("/:id", (request, response) => {
	pool.query(
		`UPDATE review SET title = ?, description = ?, stars = ? 
        WHERE id = ?`,
		[
			request.body.title,
			request.body.description,
			request.body.stars,
			request.params.id
		],
		function(error, results, fields) {
			response.send("reviews updated");
			// console.log("reviews updated");
		}
	);
});

// Deletes the review by id
router.delete("/:id", (request, response) => {
	const reviewId = request.params.id;
	pool.query("DELETE FROM review WHERE review.id =?", reviewId, function(
		error,
		results,
		fields
	) {
		response.send("review deleted successfully");
		// console.log("review deleted successfully");
	});
});

module.exports = router;
