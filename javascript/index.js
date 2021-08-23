
/*menu responsive*/
const hamburguer = document.querySelector('.menu-ham');
const links = document.querySelector('ul');
const bars = document.querySelectorAll('.menu-ham span');
hamburguer.addEventListener('click', function () {
	links.classList.toggle('show');
	bars.forEach(function (child) {
		child.classList.toggle('animation');
	});
});

/*slider*/
let box = document.querySelectorAll('.box-clip-path');
box.forEach(function (popup) {
	popup.addEventListener('click',
		function () {
			popup.classList.toggle('active');
		});
});


let Ball = document.getElementsByClassName("ball");
document.onmousemove = function() {

  //get innerWidth,innerheight for browser
  
    //get horizontal coordinate of the onmousemove
    let x = event.clientX * 100 / window.innerWidth + "%";

    //get the verticle coordinate of onmousemove
    let y = event.clientY * 100 / window.innerHeight + "%";

    for(let i=0;i<2;i++) {
        Ball[i].style.left = x;
        Ball[i].style.top = y;
        Ball[i].style.transform = "translate(-"+x+", -"+y+")";
    }
  
}
