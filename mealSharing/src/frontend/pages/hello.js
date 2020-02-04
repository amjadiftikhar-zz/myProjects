// function searchMeal() {
// 	const input = document.getElementById("mealSearch");
// 	const autoSearched = () => {
// 		// const url = "api/meals?" + input.value;
// 		fetch("/api/meals?title=" + input.value)
// 			.then(response => response.json())
// 			.then(data => {
// 				// console.log(data);
// 				const rootElement = document.getElementById("root");
// 				const mealsList = document.createElement("ol");
// 				mealsList.innerHTML = `
// 				<div id = "mealSection">
// 					<div><img class = "image" src="./src/frontend/pages/images/${data[0].id}.jpg"
// 						alt=""></img>
// 					</div>
// 					<div class="mealItems">
// 						<div><h2>${data[0].title}</h2></div>
// 						<div>Description:&nbsp${data[0].description}</div>
// 						<div>Price:&nbsp ${data[0].price} DKK</div>
// 					</div></br>
//                     <div id="btnDiv">
//                         <a id="backToAllMeals">Back</a>
//                         <a id="reserveMeal">Reserve your meal here!</a>
// 					</div>
//                 </div>`;
// 				rootElement.appendChild(mealsList);
// 				document.getElementById("reserveMeal").addEventListener("click", (event) => {
//                     // document.getElementById("form").style.visibility = "visible";
//                     event.preventDefault()
//                     console.log("searched meal button clicked");
//                      renderingForm()
//                 });
               
//                 document.getElementById("backToAllMeals").addEventListener("click", event => {
//                     event.preventDefault();
//                     console.log("hello on click backToAll");
                
//                 });
// 			});
// 	};
// 	input.addEventListener("input", event => {
// 		console.log("hello on input");
// 		event.preventDefault();
// 		document.getElementById("root").innerHTML = "";
// 	});
// 	document.getElementById("searchBtn").addEventListener("click", event => {
// 		console.log("hello on click");
// 		event.preventDefault();
// 		autoSearched();
// 	});
// 	input.addEventListener("keypress", event => {
// 		if (event.keyCode === 13) {
// 			console.log("hello on enter");
// 			event.preventDefault();
// 			autoSearched();
// 		}
// 	});
	

// 	// document.getElementById("reserveMeal").addEventListener("click", () => {
// 	//     // document.getElementById("form").style.visibility = "visible";
// 	//     console.log("searched meal button clicked")
// 	// });

// 	// renderingForm();
// 	// fetch("/api/availableReservations")
// 	// 	.then(res => res.json())
// 	// 	.then(data => {
// 	// 		data.forEach(element => {
// 	// 			if (
// 	// 				element.id == id &&
// 	// 				element.max_reservations > element.total_reservations
// 	// 			) {
// 	// 				document.getElementById("reserveBtn").disabled = false;
// 	// 				document.getElementById("reserveBtn").textContent =
// 	// 					"Reserve your meal here!";
// 	// 			}
// 	// 		});
// 	// 	});
// 	// document
// 	// 	.getElementById("sendReservation")
// 	// 	.addEventListener("click", event => {
// 	// 		event.preventDefault();
// 	// 		const name = document.getElementById("name").value;
// 	// 		const phone = document.getElementById("phoneNum").value;
// 	// 		const email = document.getElementById("email").value;
// 	// 		const number_of_guests = document.getElementById("quantity").value;
// 	// 		const meal_id = id;
// 	// 		const reservation = {
// 	// 			meal_id,
// 	// 			name,
// 	// 			phone,
// 	// 			email,
// 	// 			number_of_guests
// 	// 		};
// 	// 		fetch("/api/reservations", {
// 	// 			method: "POST",
// 	// 			headers: {
// 	// 				"Content-Type": "application/json"
// 	// 			},
// 	// 			body: JSON.stringify(reservation)
// 	// 		})
// 	// 			.then(response => {
// 	// 				return response.json();
// 	// 			})
// 	// 			.then(reservation => {
// 	// 				console.log(reservation);
// 	// 				message.innerHTML = `Thank you for the reservation!`;
// 	// 			})
// 	// 			.catch(error => {
// 	// 				console.log(error);
// 	// 				alert("fill the form and try again");
// 	// 			});
// 	// 	});
// }

// export default searchMeal;

// function renderingForm() {
// 	const formElement = document.getElementById("form");
// 	formElement.innerHTML = `
// 	<form>
// 		<h3 id="mealTitle">MEAL RESERVATION</h3>
// 		<input class = "input" id = "name" type="text" name="name" placeholder = "your name!">
//     	<input class = "input" id = "phoneNum" type="number" name="number" placeholder = "contact number!"></br>
//     	<input class = "input" id = "email" type="text" name="email" placeholder = "your email!">
// 		<input class = "input" id = "quantity" type="number" name="number" placeholder = "number of guests!"></br>
// 		<button id = "sendReservation">send</button>
// 		<p id="message"></p>
// 	</form>`;
// }

// {
// 	/* <button id = "reserveMeal" disabled>Sorry! reservation not possible</button> */
// }








// document
// 					.getElementById("reserveMeal")
// 					.addEventListener("click", event => {
// 						document.getElementById("form").style.visibility = "visible";
// 						// event.preventDefault();
// 						// console.log("searched meal button clicked");
// 					});
// 				renderingForm();
// 				//     document.getElementById("backToAllMeals").addEventListener("click", event => {
// 				//         event.preventDefault();
// 				//         console.log("hello on click backToAll");

// 				//     });
// 				fetch("/api/availableReservations")
// 					.then(res => res.json())
// 					.then(dataReservation => {
// 						dataReservation.forEach(element => {
// 							if (
// 								element.id == id &&
// 								element.max_reservations > element.total_reservations
// 							) {
// 								document.getElementById("reserveMeal").disabled = false;
// 								document.getElementById("reserveMeal").textContent =
// 									"Reserve your meal here!";
// 							}
// 						});
// 					});
// 				document
// 					.getElementById(".sendReservation")
// 					.addEventListener("click", event => {
// 						event.preventDefault();
// 						const name = document.getElementById("name").value;
// 						const phone = document.getElementById("phoneNum").value;
// 						const email = document.getElementById("email").value;
// 						const number_of_guests = document.getElementById("quantity").value;
// 						const meal_id = id;
// 						const reservation = {
// 							meal_id,
// 							name,
// 							phone,
// 							email,
// 							number_of_guests
// 						};
// 						fetch("/api/reservations", {
// 							method: "POST",
// 							headers: {
// 								"Content-Type": "application/json"
// 							},
// 							body: JSON.stringify(reservation)
// 						})
// 							.then(response => {
// 								return response.json();
// 							})
// 							.then(reservation => {
// 								console.log(reservation);
// 								message.innerHTML = `Thank you for the reservation!`;
// 							})
// 							.catch(error => {
// 								console.log(error);
// 								alert("fill the form and try again");
// 							});
// 					});
// 			});