import specificMeal from "./specificMeal";
// import reservationForm from "./reservationForm";

const input = document.getElementById("searchMeal");
// function for autosearched Meal
const autoSearched = () => {
	// api call and concatenat input value
	fetch("/api/meals?title=" + input.value)
		.then(response => response.json())
		.then(data => {
			specificMeal(data);
			// reservationForm();
			// meal reservation api call to evaluate if meal is available to reserve
			fetch("/api/availableReservations")
				.then(res => res.json())
				.then(data => {
					data.forEach(element => {
						if (
							element.id == data[0].id &&
							element.max_reservations > element.total_reservations
						) {
							document.getElementById("reserveBtn").disabled = false;
							document.getElementById("reserveBtn").textContent =
								"Reserve your meal";
						}
					});
				});
			// send reservation button and form classes access to fill up info
			document
				.getElementById("sendReservation")
				.addEventListener("click", event => {
					event.preventDefault();
					const customer_name = document.getElementById("name").value;
					const phone_number = document.getElementById("phoneNum").value;
					const e_mail = document.getElementById("email").value;
					const number_of_guests = document.getElementById("quantity").value;
					const meal_id = data[0].id;
					const reservations = {
						meal_id,					
						customer_name,
						phone_number,
						e_mail,
						number_of_guests
					};
					// reservation api call for post method
					fetch("/api/reservations", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(reservations)
					})
					.then(response => {
						return response.json();
					})
					.then(reservation => {
						// console.log(reservation);
						return message.innerHTML = `Thank you for the reservation!`;
					})
					.catch(error => {
						console.log(error);
						return alert("fill the form and try again");
					});
				});
		});
};
// event listener to keep the DOM empty
input.addEventListener("input", event => {
	event.preventDefault();
});
// access search button
document
	.getElementById("searchBtn")
	.addEventListener("click", event => {
	event.preventDefault();	
	document.getElementById("form").innerHTML = "";
	// autoSearched function call on click
	if(input.value === "") {
		alert("Write some text to search")
	} else {
		autoSearched();
	}	
});
// key press event apply
input.addEventListener("keypress", event => {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("root").innerHTML = "";
		document.getElementById("form").innerHTML = "";
		// auto search function call 
		if(input.value === "") {
			alert("Write some text to search")
		} else {
			autoSearched();
		}	
	}
});

export default autoSearched;