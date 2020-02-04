function mealsId(req, router) {
	const id = req.param.id;
	const url = `api/meals/${id}`;
	fetch(url)
		.then(response => response.json())
		.then(meal => {
			// console.log(meal);
			const rootElement = document.getElementById("root");
			const mealsList = document.createElement("ol");
			mealsList.innerHTML = `
			<div id = "mealSection">
				<div><img class = "image" src="./src/frontend/pages/images/${meal[0].id}.jpg" 
					alt=""></img>
				</div>
				<div class="mealItems">
					<div><h2>${meal[0].title}</h2></div>
					<div>Description:&nbsp${meal[0].description}</div>
					<div>Price:&nbsp ${meal[0].price} DKK</div>
					<div>Rating:&nbsp ${`&#11088;`.repeat(meal[0].stars)}</div>
				</div></br>
				<div>
					<a href="meals"><button class = "backToAll">Back</button></a>
					<button id = "reserveBtn" disabled>Sorry! reservation not possible</button>	
				</div>
			</div>`;
			rootElement.appendChild(mealsList);
			document.getElementById("reserveBtn").addEventListener("click", () => {
				document.getElementById("root").innerHTML = "";
				document.getElementById("form").style.visibility = "visible";
			});
			fetch("/api/availableReservations")
				.then(res => res.json())
				.then(data => {
					data.forEach(element => {
						if (
							element.id == id &&
							element.max_reservations > element.total_reservations
						) {
							document.getElementById("reserveBtn").disabled = false;
							document.getElementById("reserveBtn").textContent =
								"Reserve your meal here!";
						}
					});
				});
			document
				.getElementById("sendReservation")
				.addEventListener("click", event => {
					event.preventDefault();
					const name = document.getElementById("name").value;
					const phone = document.getElementById("phoneNum").value;
					const email = document.getElementById("email").value;
					const number_of_guests = document.getElementById("quantity").value;
					const meal_id = id;
					const reservation = {
						meal_id,
						name,
						phone,
						email,
						number_of_guests
					};
					fetch("/api/reservations", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(reservation)
					})
						.then(response => {
							return response.json();
						})
						.then(reservation => {
							console.log(reservation);
							message.innerHTML = `Thank you for the reservation!`;
						})
						.catch(error => {
							console.log(error);
							alert("fill the form and try again");
						});
				});
		});
}

function renderingForm() {
	const formElement = document.getElementById("form");
	formElement.innerHTML = `
	<form>
	<a class = "toAll" href="meals"><< Back</a><h3 id="mealTitle">MEAL RESERVATION</h3>
		<input class = "input" id = "name" type="text" name="name" placeholder = "your name!">
    	<input class = "input" id = "phoneNum" type="number" name="number" placeholder = "contact number!"></br>
    	<input class = "input" id = "email" type="text" name="email" placeholder = "your email!">
		<input class = "input" id = "quantity" type="number" name="number" placeholder = "number of guests!"></br>
		<button id = "sendReservation">send</button>
		<p id="message"></p>
	</form>`;
}
renderingForm();

export default mealsId;
