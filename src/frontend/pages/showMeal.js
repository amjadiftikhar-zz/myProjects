import reservationForm from "./reservationForm";
import renderMeal from "./renderMeal";

// getting 'meal' as props from meal.js for manipulation
export default function showMeal(meal){
	// call renderfunction for a meal 
	renderMeal(meal);	
	document
		.getElementById("reserveBtn")
		.addEventListener("click", () => {
			document
				.getElementById("root").innerHTML = "";
			document
				.getElementById("form").style.visibility = "visible";
	});
	// calling reservation form function
	reservationForm();
}





