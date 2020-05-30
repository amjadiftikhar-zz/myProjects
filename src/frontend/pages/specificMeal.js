export default function specificMeal(data){
    const rootElement = document.getElementById("root");
	rootElement.innerHTML = "";
	const mealsList = document.createElement("ol");
	mealsList.innerHTML = `
		<div class = "mealSection">
			<div class = "meal">
				<h2> ${data[0].id}:&nbsp<a>${data[0].title}</a></h2>
				<div>Description:&nbsp${data[0].description}
				<img class = "image" src="./src/frontend/pages/images/${data[0].id}.jpg"
				alt=""></img></div>
				<div>Location:&nbsp${data[0].location}</div>
				<div>Price:&nbsp ${data[0].price} DKK</div>					
				<div id="btnDiv">
					<a href="meals"><button class = "backToAll">Back</button></a>
	            	<button id = "reserveBtn" disabled>Sorry! reservation not possible</button>
				</div>
			</div>						
		</div>`;
	rootElement.appendChild(mealsList);
	document.getElementById("reserveBtn").addEventListener("click", event => {
		event.preventDefault();
		document.getElementById("root").innerHTML = "";
		document.getElementById("form").style.visibility = "visible";
	});
}