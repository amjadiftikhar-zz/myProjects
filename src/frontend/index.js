import "./index.css";

import SPARouter from "@kodnificent/sparouter";

// all routes imported
import mealRouter from "./pages/meal";
import homeRouter from "./pages/meals";
import allMeals from "./pages/meals";
import reviews from "./pages/reviews";

const options = {
	historyMode: true 
};
const router = new SPARouter(options);

// router use all these routes
router.get("/", homeRouter);
router.get("/meals/{id}", mealRouter);
router.get("/meals", allMeals);
router.get("/reviews", reviews);

router.init();
