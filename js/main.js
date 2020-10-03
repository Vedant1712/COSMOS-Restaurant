function changein(a){
	var x = document.getElementsByTagName("body");
	if(a.id == 'eat')
	{
		x[0].style.backgroundImage = "url('./images/main_background1.jpeg')";
		a.style.borderBottom = "3px solid #ffffff";
	}
	if(a.id == 'drink')
	{
		x[0].style.backgroundImage = "url('./images/main_background2.jpg')";
		a.style.borderBottom = "3px solid #ffffff";
	}
	if(a.id == 'visit')
	{
		x[0].style.backgroundImage = "url('./images/main_background3.jpg')";
		a.style.borderBottom = "3px solid #ffffff";
	}
}
function changeout(a){
	var x = document.getElementsByTagName("body");
	if(a.id == 'eat')
	{
		x[0].style.backgroundImage = "url('./images/main_background.jpg')";
		a.style.borderBottom = "none";
	}
	if(a.id == 'drink')
	{
		x[0].style.backgroundImage = "url('./images/main_background.jpg')";
		a.style.borderBottom = "none";
	}
	if(a.id == 'visit')
	{
		x[0].style.backgroundImage = "url('./images/main_background.jpg')";
		a.style.borderBottom = "none";
	}
}
function slide(){
	const burger = document.getElementsByClassName('burger');
	const nav = document.getElementsByClassName('nav-links');
	nav[0].classList.toggle('nav-active');
	burger[0].classList.toggle('toggle');

}