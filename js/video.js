var video,volumeSlider;
function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	console.log("Play Video");
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	video.playbackRate *= 0.8;
	console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);

}

function skipAhead() {
	video.currentTime += 60;

	if(video.currentTime >= video.duration){
		video.currentTime = 0;
		video.playbackRate = 1;
	}

	console.log("Current location is "+ video.currentTime);
	}


function mute() {
	if (video.muted){
		console.log("Unmuted");
		video.muted = false;
	}

	else{
		console.log("muted");
		video.muted = true;
	}
}

function changeVolume() {
	var slider = document.getElementById("volumeSlider")
	var vol = document.getElementById("volume")
	vol.innerHTML = video.volume * 100 + '%'
	video.volume = slider.value / 100;
	console.log("Volume is " + video.volume * 100 + '%');
}


function gray() {
	video.style.filter = "grayscale(100%)";
	console.log("In grayscale");
}

function color() {
	video.style.filter = "grayscale(0%)";
	console.log("In color");
}
