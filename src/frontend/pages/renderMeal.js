export default function renderMeal(x) {
	const rootElement = document.getElementById("root");
	rootElement.innerHTML = "";
	const mealsList = document.createElement("ol");
	// rendering meal
	mealsList.innerHTML = `
	<div class = "mealSection">
		<div class = "mealCard singleMeal">
			<h2 class="mealHeader">${x[0].title}</h2>
			<div class="mealImage description">
				Description:&nbsp${x[0].description}			 
				<img class="image" src="../../../public/images/${x[0].id}.jpg"
				alt=""></img>
			</div>
			<div class="descriptionSection"> 
				<div class="description">
					Location:&nbsp${x[0].location}
				</div>
				<div class="description ">
					Price:&nbsp ${x[0].price} Dkk
				</div>
				<div class="description ">
					Rating:&nbsp ${`&#11088;`.repeat(x[0].stars)}
				</div>
				<div class="description reserveBtnSection">
					<a href="meals">
						<button class = "backToAll">
							Back
						</button>
					</a>
					<button id="reserveBtn" disabled>
						Sorry! reservation not possible
					</button>
				</div>
			</div> 
		</div>
	</div>`;
	rootElement.appendChild(mealsList);
}