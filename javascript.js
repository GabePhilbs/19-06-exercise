



var photoList = ['park','beach'];

var currentPhoto = 0;

function nextPhoto(){
	if (currentPhoto < photoList.length -1) {
		currentPhoto++;
		console.log(photoList[currentPhoto]);
	} else{
		console.log('End of slideshow');

	}
	
}

function prevPhoto(){
	if (currentPhoto > 0) {
		currentPhoto--;
		console.log(photoList[currentPhoto]);
	} else{
		console.log('Beginning of the slideshow');

	}
	
}


function getCurrentPhoto(){
	console.log(photoList[currentPhoto]);
}