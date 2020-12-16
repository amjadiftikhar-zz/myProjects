import renderingReview from "./reviewForm";

// making a function to show all meal
function showAllMeals(data) {
	// accessing root class to render meals
	const rootElement = document.getElementById("root");
	rootElement.innerHTML = "";
	// loop through data we got as an object from meals
	data.forEach(meal => {
		const mealsList = document.createElement("ol");
		mealsList.innerHTML = `
		<div class="mealCard">
			<a class="mealHeader" href="meals/${meal.id}">
				${meal.title} 
			</a>
			<div class="description">Description:&nbsp${meal.description}
			<div class="mealImage">
				<a href="meals/${meal.id}">
				<img class="image" src="../../../public/images/${meal.id}.jpg" 
				alt=""/></a>
			</div>
			</div>
			<div class="specsSection"> 
				<div class="description ">Location:&nbsp${meal.location}</div>
				<div class="description">Price:&nbsp ${meal.price} Dkk</div>
				<div class="description">Rating:&nbsp ${`&#11088;`.repeat(meal.stars)}</div>
			</div>
			<div class="reviewBtnSection">
				<div>
					<a class="reviewBtn" href="meals#form">Submit Review</a>
				</div>
			</div>
		</div>`;
		// appending a meals' list 
		rootElement.appendChild(mealsList);
		// accessing each "review button" and looping through to apply click
		document
			.querySelectorAll(".reviewBtn").forEach(element => {
				element
					.addEventListener("click", () => {
					document
						.getElementById("root").innerHTML = "";
					document
						.getElementById("form").style.visibility = "visible";
			});
		});
		// rendering review form 
		renderingReview();
	});
}

export default showAllMeals;