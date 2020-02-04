// // function searchMeal() {
// const input = document.getElementById("mealSearch");
// const autoSearched = () => {
// 	fetch("/api/meals?title=" + input.value)
// 		.then(response => response.json())
// 		.then(data => {
// 			console.log(data);
// 			const rootElement = document.getElementById("root");
// 			const mealsList = document.createElement("ol");
// 			mealsList.innerHTML = `
// 				<div id = "mealSection">
// 					<div><img class = "image" src="./src/frontend/pages/images/${data[0].id}.jpg"
// 						alt=""></img>
// 					</div>
// 					<div class="mealItems">
// 						<div><h2> ${data[0].id}:&nbsp<a>${data[0].title}</a></h2></div>
// 						<div>Description:&nbsp${data[0].description}</div>
// 						<div>Price:&nbsp ${data[0].price} DKK</div>
// 					</div></br>
//                     <div id="btnDiv">
//                         <a id="reserveMeal">reservation</a>
// 					</div>
//                 </div>`;
// 			rootElement.appendChild(mealsList);
// 			document
// 				.getElementById("reserveMeal")
// 				.addEventListener("click", event => {
// 					event.preventDefault();
// 					document.getElementById("root").innerHTML = "";
// 					document.getElementById("form").style.visibility = "visible";
// 				});
// 		});
// };
// input.addEventListener("input", event => {
// 	event.preventDefault();
// 	document.getElementById("root").innerHTML = "";
// });
// document.getElementById("searchBtn").addEventListener("click", event => {
// 	event.preventDefault();
// 	autoSearched();
// });
// input.addEventListener("keypress", event => {
// 	if (event.keyCode === 13) {
// 		event.preventDefault();
// 		autoSearched();
// 	}
// });

// export default autoSearched;
