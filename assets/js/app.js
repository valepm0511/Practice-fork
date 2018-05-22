window.onload = function (){
	var btn = document.getElementById("btnChange");
	var txt = document.getElementById("paragraph");
	var btnMagic = document.getElementById("magic");
	var txtMagic = document.getElementById("text");

	btn.addEventListener('click', function(){
		txt.innerHTML = "<h2>Git & GitHub te amamos</h2>";
	});

	btnMagic.addEventListener('click', function(){
		//txtMagic.innerHTML = "";
		txtMagic.classList.add("disappear");
	});

}