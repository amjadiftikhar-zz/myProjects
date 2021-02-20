function reviews() {
	const url = `api/reviews`;
	fetch(url)
		.then(response => response.json())
		.then(review => {
			const reviewElement = document.getElementById("root");
			reviewElement.innerHTML = "";
			review.forEach(element => {
				const reviewsList = document.createElement("ol");
				reviewsList.innerHTML = `
				<div class="review">
					<h4 class="reviewHeader">${element.title}</h4>
					<div class="reviewDescription">
						Description:&nbsp${element.description}<br>
					</div>
					<div class="reviewDescription">
						Rating:&nbsp ${`&#11088;`.repeat(element.stars)}<br>
					</div>
					<div class="reviewDescription">
						Date:&nbsp ${element.created_date}
					</div>					
				</div>				
			`;
				reviewElement.appendChild(reviewsList);
			});
		});
}

export default reviews;