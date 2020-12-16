function renderingReview() {
	const reviewElement = document.getElementById("form");
	reviewElement.innerHTML = `
	<div class="form" >
		<form>
			<a class = "toAll" href="meals"><< Back</a>
			<h3 class="formHeader">Review Form</h3>
			<div class="inputfieldClass">
				<input class = "input" id = "name" type="text" name="title" 
					placeholder = "enter title!">
				<input class = "input" id = "description" type="text" 
					name="description" placeholder = "description!"></br>
				<input class = "input" id = "stars" type="number" name="stars" 
					placeholder = "number of stars!">
				<input class = "input" id = "id" type="number" name="id" 
					placeholder = "meals id!"></br>
				<button id = "sendReview" onclick="getFields()" >
					Send
				</button>
				<p id="message"></p>
			</div>
		</form>
	</div>
	`;
}

export default renderingReview;
