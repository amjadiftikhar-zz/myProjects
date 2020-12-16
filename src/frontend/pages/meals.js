import showAllMeals from "./showAllMeals";
import autoSearched from "./searchedMeal";

// function for all meals
function allMeals(req, router) {
	// api call for all meals
	const url = `api/meals`;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			// show all meal function call and passing data
			showAllMeals(data);	
			// accessing classe send review button
			document
				.getElementById("sendReview")
				.addEventListener("click", event => {
				event.preventDefault();
				// accessing form elements
				const title = document.getElementById("name").value;
				const description = document.getElementById("description").value;
				const stars = document.getElementById("stars").value;
				const meal_id = document.getElementById("id").value;
				const reviews = {
					title,
					description,
					stars,
					meal_id
				};
				// reviews api call to make post request
				fetch("/api/reviews", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(reviews)
				})
					.then(response => {
						return response.json();
					})
					.then(review => {
						console.log(review);
						return (message.innerHTML = `Thank you for the input!`);
					})
					.catch(error => {
						console.log(error);
						return alert("fill the form and try again");
					});
			});
		});
}

export default allMeals;
























