import reservationForm from "./reservationForm";
import specificMeal from "./specificMeal";

const input = document.getElementById("searchMeal");
const autoSearched = () => {
	fetch("/api/meals?title=" + input.value)
		.then(response => response.json())
		.then(data => {
			specificMeal(data);
			reservationForm();
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
					const meal_id = data[0].id;
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
};
input.addEventListener("input", event => {
	event.preventDefault();
	document.getElementById("root").innerHTML = "";
});
document.getElementById("searchBtn").addEventListener("click", event => {
	event.preventDefault();
	autoSearched();
});
input.addEventListener("keypress", event => {
	if (event.keyCode === 13) {
		event.preventDefault();
		autoSearched();
	}
});

export default autoSearched;