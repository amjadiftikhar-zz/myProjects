function reviews(req, router) {
	const url = `api/reviews`;
	fetch(url)
		.then(response => response.json())
		.then(review => {
			const reviewElement = document.getElementById("root");
			reviewElement.innerHTML = "";
			review.forEach(element => {
				const reviewsList = document.createElement("ol");
				reviewsList.innerHTML = `
				<div class="reviews">
					<h4>${element.title}</h4>
                	Description:&nbsp${element.description}<br>
					Rating:&nbsp ${`&#11088;`.repeat(element.stars)}<br>
					Date:&nbsp ${element.created_date}
				</div>						
			`;
				reviewElement.appendChild(reviewsList);
			});
		});
}

export default reviews;