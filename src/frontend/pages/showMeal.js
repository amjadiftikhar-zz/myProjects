export default function showMeal(meal){
	const rootElement = document.getElementById("root");
	rootElement.innerHTML = "";
	const mealsList = document.createElement("ol");
	mealsList.innerHTML = `
	<div class = "mealSection">
		<div class = "meal">
			<h2>${meal[0].title}</h2>
			<div>Description:&nbsp${meal[0].description}
			<img class = "image" src="./src/frontend/pages/images/${meal[0].id}.jpg" 
			alt=""></img>
			</div><br>
			<div>Location:&nbsp${meal[0].location}</div>
			<div>Price:&nbsp ${meal[0].price} Dkk</div>
			<div>Rating:&nbsp ${`&#11088;`.repeat(meal[0].stars)}</div>
			<div><a href="meals"><button class = "backToAll">Back</button></a>
			<button id="reserveBtn" disabled>Sorry! reservation not possible</button>
			</div>
		</div>
	</div>`;
	rootElement.appendChild(mealsList);
	document.getElementById("reserveBtn").addEventListener("click", () => {
	document.getElementById("root").innerHTML = "";
	document.getElementById("form").style.visibility = "visible";
	});
}