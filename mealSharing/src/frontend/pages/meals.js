// import autoSearched from "./searchMeal";

function allMeals(req, router) {
	// autoSearched();
	const url = `api/meals`;
	fetch(url)
		.then(response => response.json())
		.then(meal => {
			// console.log(meal);
			const rootElement = document.getElementById("root");
			meal.forEach(element => {
				const mealsList = document.createElement("ol");
				mealsList.innerHTML = `
				<div id = "mealSection">	
					<div><img class = "image" src="./src/frontend/pages/images/${element.id}.jpg" 
						alt=""></img>
					</div>
					<div class="mealItems">
						<div><h2> ${element.id}:&nbsp<a href="meals/${element.id}">${
					element.title
				}</a></h2>
					</div>
						<div>Description:&nbsp${element.description}</div>
						<div>Price:&nbsp ${element.price} DKK</div>
						<div>Rating:&nbsp ${`&#11088;`.repeat(element.stars)}</div>						
					</div>
					<div id="reviewDiv">
						<a class="reviewBtn href="meals#form">review</a>
					</div>			
				</div>`;
				rootElement.appendChild(mealsList);
				document.querySelectorAll(".reviewBtn").forEach(element => {
					element.addEventListener("click", () => {
						document.getElementById("root").innerHTML = "";
						document.getElementById("form").style.visibility = "visible";
					});
				});
			});
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
						message.innerHTML = `Thank you for the input!`;
					})
					.catch(error => {
						console.log(error);
						alert("fill the form and try again");
					});
			});
		});
}

function renderingReview() {
	const reviewElement = document.getElementById("form");
	reviewElement.innerHTML = `<form>
	<a id = "toAll" href="meals"><< Back</a><h3>Review Form</h3>
	<input class = "input" id = "name" type="text" name="title" placeholder = "enter title!">
    <input class = "input" id = "description" type="text" name="description" placeholder = "description!"></br>
    <input class = "input" id = "stars" type="number" name="stars" placeholder = "number of stars!">
	<input class = "input" id = "id" type="number" name="id" placeholder = "meals id!"></br>
	<button id = "sendReview">send</button>
	<p id="message"></p>
	</form>`;
}

export default allMeals;
