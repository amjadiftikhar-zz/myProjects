function reviews(req, router) {
	const url = `api/reviews`;
	fetch(url)
		.then(response => response.json())
		.then(review => {
			// console.log(meal);
			const reviewElement = document.getElementById("root");
			review.forEach(element => {
				const reviewsList = document.createElement("ol");
				reviewsList.innerHTML = `
                <h2>Meal ID: ${element.meal_id}</h2>
			<h2>${element.title}</h2>
			<ul>
				<li>Description:&nbsp </li>
					<p>${element.description}</p>
				<li>Price:&nbsp ${element.stars}.kr</li>
			</ul>
			<button id = "reserveBtn">reserve your meal</button>							
			`;
				reviewElement.appendChild(reviewsList);
			});
		});
}

export default reviews;
