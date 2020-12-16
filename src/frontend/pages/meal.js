import showMeal from "./showMeal"

function mealsId(req, router) {
	const id = req.param.id;
	const url = `api/meals/${id}`;
	fetch(url)
		.then(response => response.json())
		.then(meal => {
			showMeal(meal);
			fetch("/api/availableReservations")
				.then(res => res.json())
				.then(data => {
					data.forEach(element => {
						if (
							element.id == id &&
							element.max_reservations > element.total_reservations
						) {
							document
								.getElementById("reserveBtn").disabled = false;
							document
								.getElementById("reserveBtn").textContent =
								"Reserve your meal";
						}
					});
				});
			document
				.getElementById("sendReservation")
				.addEventListener("click", event => {
					event.preventDefault();
					const customer_name = document.getElementById("name").value;
					const phone_number = document.getElementById("phoneNum").value;
					const e_mail = document.getElementById("email").value;
					const number_of_guests = document
						.getElementById("quantity").value;
					const meal_id = id;
					const reservations = {	
						meal_id,					
						customer_name,
						phone_number,
						e_mail,
						number_of_guests
					};
					fetch("/api/reservations", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(reservations)
					})
					.then(res => {
						return res.json();						
					})
					.then(reservation => {
						console.log(reservation);
						return (message.innerHTML = `
							Thank you for the reservation!`
						);
					})
					.catch(error => {
					 	console.log(error);
					 	return alert("fill the form and try again");
					});
				});
		});
}

export default mealsId;


