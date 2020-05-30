function homeRouter(req, router) {
	document.body.innerHTML = `
	<div id="navBar">
		<div class="log">
			<a href=""><img class="logo" src="./src/frontend/pages/images/logo.png" /></a>
		</div>
		<div class="menu">
			<ul id="menuContent">
				<li><a href="/meals">All Meals</a></li>
				<li><a href="mailto:amjadiftikhar_99@hotmail.com.com">Contact</a></li>
			</ul>
		</div>
	</div>				
	<section style="background-image: url('./src/frontend/pages/images/mealsharing.jpg')">
		<a class= "allMealsBtn" href="/meals">Click Me!</a>	
		Welcome to the meals Homepage	
	</section>	
	<footer>
		<div>
			<img class="copyRight" 
			src="./src/frontend/pages/images/copyRights.png" alt width="60" height="60">
			</img>
		</div>		
		<div class="socialMediaLinks">
			<img class="copyRight" 
			src="./src/frontend/pages/images/facebook.png" width="30" height="30">
			</img>
			<img class="copyRight" 
			src="./src/frontend/pages/images/twitter.png" width="30" height="30">
			</img>
			<img class="copyRight" 
			src="./src/frontend/pages/images/linkedin.png" width="30" height="30">
			</img>
		</div>		
	</footer>
	`;
}

export default homeRouter;
