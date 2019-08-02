const doc = document;
const currentImg = doc.querySelector('.active');
const imgs = doc.querySelectorAll('.images img');
const imgOpacity = .5;

//Set the first image opacity
imgs[0].style.opacity = imgOpacity;
//Pointer to last selected thumbnail image
let thumbPointer = imgs[0];
//Loop through the images and add a click event
imgs.forEach(img => img.addEventListener('click', clickImage));

function clickImage (e) {
//Check if the target we clicked on is the same picture
	if(e.target === thumbPointer) {
	//true, return it and not do anything else		
		return
	}	
	else {
	//false, change the main image with the one clicked on
	currentImg.src = e.target.src;
	//Add fade in class
	currentImg.classList.add('image-fade');
	//Change the opacity to opacity variable
	e.target.style.opacity = imgOpacity;
	//Reset the opacity of last photo
	thumbPointer.style.opacity = 1;
	//Update photo Pointer
	thumbPointer = e.target;
	}
}
//Remove fade-in class after .5 seconds
setTimeout( () => {currentImg.classList.remove('image-fade');} , 500);












// console.log(imgs);
