function homeRouter(req, router) {
	document.body.innerHTML = `
	<div id="navBar">
		<div class="log">
			<a href=""><img class="logo" src="../../../public/images/logo.png" /></a>
		</div>
		<div class="menu">
			<ul id="menuContent">
				<li><a href="/meals">All Meals</a></li>
				<li><a href="mailto:amjadiftikhar_99@hotmail.com.com">Contact</a></li>
			</ul>
		</div>
	</div>				
	<section style="background-image: url('../../../public/images/mealsharing.jpg')">
		<a class= "allMealsBtn" href="/meals">Click Me!</a>	
		Welcome to the meals Homepage	
	</section>	
	<footer>
		<div>
			<img class="copyRight" 
			src="../../../public/images/copyRights.png" alt width="60" height="60">
			</img>
		</div>		
		<div class="socialMediaLinks">
			<img class="copyRight" 
			src="../../../public/images/facebook.png" width="30" height="30">
			</img>
			<img class="copyRight" 
			src="../../../public/images/twitter.png" width="30" height="30">
			</img>
			<img class="copyRight" 
			src="../../../public/images/linkedin.png" width="30" height="30">
			</img>
		</div>		
	</footer>
	`;	
}

export default homeRouter;