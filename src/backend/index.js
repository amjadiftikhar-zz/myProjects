const express = require("express");
const app = express();
const pool = require("./database");
const router = express.Router();

// All routes are acquired here and stored in a variable
const mealsRouter = require("./api/meals");
const reservationsRouter = require("./api/reservations");
const reviewsRouter = require("./api/reviews");
const availableReservations = require("./api/availableReservations");

const PORT = process.env.PORT || 5000;

const path = require("path");
// Serve the built client html
const buildPath = path.join(__dirname, "../../dist");
app.use(express.static(buildPath));

const buildPathPublic = path.join (__dirname, '../../public');
app.use ('/public', express.static (buildPathPublic));

app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// app.use(bodyParser.json())

// all routes are configured here
router.use("/meals", mealsRouter);
router.use("/reservations", reservationsRouter);
router.use("/reviews", reviewsRouter);
router.use("/availableReservations", availableReservations);

// Base api route
app.use("/api", router);


// Sends all requests back to index.html where the routing lib takes over
app.get("/*", function(req, res) {
	res.sendFile(path.join(__dirname, "./../../dist/index.html"), function(err) {
		if (err) {
			res.status(500).send(err);
		}
	});
});

// Server configured and local port initialized here
app.listen(PORT, () => {
	// console.log(`Server listening on port ${PORT}!`);
	// pool.connect(err => { 
	pool.getConnection(err => {	
		if (err) {
			console.log(`${err}`);
		} else {
			console.log(`Connection successful`);
		}
	});
});
