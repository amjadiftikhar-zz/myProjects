function reservationForm() {
	const formElement = document.getElementById("form");
	formElement.innerHTML = `
	<div class="form">
		<form>
			<a class = "toAll" href="meals"><< Back</a>
			<h3>MEAL RESERVATION</h3>
			<div class="inputfieldClass">
				<input class = "input" id = "name" type="text" placeholder = "your name!">
    			<input class = "input" id = "phoneNum" type="number" placeholder = "contact number!"></br>
    			<input class = "input" id = "email" type="text" placeholder = "your email!">
				<input class = "input" id = "quantity" type="number" placeholder = "number of guests!"></br>
				<button id = "sendReservation" onclick="getFields()" >Send</button>
				<p id="message"></p>
			</div>
		</form>;
	</div>
	`;
}

export default reservationForm;
