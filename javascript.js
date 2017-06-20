


var slideshow = {

	photoList:['park','beach','mountain'],

	currentPhoto: 0,

	nextPhoto: function(){
		if (this.currentPhoto < this.photoList.length -1) {
			this.currentPhoto++;
			console.log(this.photoList[this.currentPhoto]);
		} else if (this.currentPhoto = this.photoList.length -1){ 
			this.currentPhoto++;
			console.log('End of slideshow');

		}else {
			console.log('End of slideshow');
		}
		
	},

	 prevPhoto: function(){
		if (this.currentPhoto > 0) {
			this.currentPhoto--;
			console.log(this.photoList[this.currentPhoto]);
		} else{
			console.log('Beginning of the slideshow');

		}
		
	},


	getCurrentPhoto: function (){
		console.log(this.photoList[this.currentPhoto]);
	},


	playInterval: '',

	pause: function(){
		clearInterval(playInterval)  
	},

	play: function(){
		
		this.currentPhoto--;

		
		playInterval = setInterval(function(){

			// console.log(slideshow.currentPhoto);
			// console.log(slideshow.photoList.length - 1);

			if (slideshow.currentPhoto > (slideshow.photoList.length - 1) ){
				
				slideshow.pause();

			} else{ slideshow.nextPhoto(); }
			

		
		}, 1000);

		


		//this.pause();
		

		// if (this.currentPhoto >= this.photoList.length) {
		// 	this.pause();
		// }
		


	}

}