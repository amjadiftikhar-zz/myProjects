import autoSearched from "./searchMeal";
import renderingReview from "./reviewForm";
import showAllMeals from "./showAllMeals";

function allMeals(req, router) {
	const url = `api/meals`;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			showAllMeals(data);		
			renderingReview();
			document.getElementById("sendReview").addEventListener("click", event => {
				event.preventDefault();
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
























