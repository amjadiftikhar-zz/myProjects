function homeRouter(req, router) {
	document.body.innerHTML = `
	<div id="searchBar">
			<div class="log">
				<a href=""><img src="favicon.ico" alt="" width="50px"/></a>
			</div>
			<div class="menu">
				<ul id="menuContent">
					<li><a href="/meals">All Meals</a></li>
					<li><a href="mailto:webmaster@example.com">Contact</a></li>
				</ul>
			</div>
		</div>				
		<section style="background-image: url('./src/frontend/pages/images/mealsharing.jpg')">
		Welcome to the meals Homepage		
		<footer>
			<img id="copyRight" 
			src="./src/frontend/pages/images/copyRights.png" alt width="100" height="50">
			</img>
		</footer>
		</section>
		`;
}

export default homeRouter;
