var image = document.getElementById("main");

var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");

// Array - list of objects
var imageArray = ["urb-e/URB-E-8.jpg","urb-e/URB-E-13.jpg","urb-e/URB-E-7.jpg","urb-e/URB-E-9.jpg"];
var imageNumber = 0;



function change1(){
	imageNumber = 1;
	image.setAttribute("src",imageArray[imageNumber]);
}

function change2(){
	imageNumber = 2;
	image.setAttribute("src",imageArray[imageNumber]);
}

function change3(){
	imageNumber= 3;
	image.setAttribute("src",imageArray[imageNumber]);
}


function revert(){
	imageNumber= 0;
	image.setAttribute("src",imageArray[imageNumber]);
}

// Ways to call a function
// function();
// setInterval();
// EventListner();

c1.addEventListener("mouseover", change1); 
c1.addEventListener("mouseout", revert);

c2.addEventListener("mouseover", change2); 
c2.addEventListener("mouseout", revert);

c3.addEventListener("mouseover", change3); 
c3.addEventListener("mouseout", revert);






