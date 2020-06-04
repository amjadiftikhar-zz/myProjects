function showAllMeals(data){
	const rootElement = document.getElementById("root");
	rootElement.innerHTML = "";
	data.forEach(meal => {
		const mealsList = document.createElement("ol");
		mealsList.innerHTML = `
		<div class = "mealSection">
			<div class = "meal">
				<h2><a href="meals/${meal.id}">${meal.id}.${meal.title}
				</a></h2>
				<div>Description:&nbsp${meal.description}
				<a href="meals/${meal.id}">
				<img class = "image" src="../../../public/images/${meal.id}.jpg" 
				alt=""></img></a>
				</div><br>
				<div>Location:&nbsp${meal.location}</div>
				<div>Price:&nbsp ${meal.price} Dkk</div>
				<div>Rating:&nbsp ${`&#11088;`.repeat(meal.stars)}</div>
				<div><a class="reviewBtn href="meals#form">Submit Review</a></div>
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
}

export default showAllMeals;