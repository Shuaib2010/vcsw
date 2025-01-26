var speechrecognition=window.webkitSpeechRecognition;
var recognition= new speechrecognition();
var Textbox=document.getElementById('textbox');
var camera=document.getElementById("camera");
Webcam.set({
	width: 500,
	height:350,
	image_format: 'jpeg',
	jpeg_quality: 90
})
function take_selfie(){
	Webcam.snap(function(data_uri){
	document.getElementById("result").innerHTML='<img src="'+data_uri+'"/>'
	})
}

function start() {
	Textbox.innerHTML="";
	recognition.start();
}

 function speech(){
 	var synth= window.speechSynthesis;
 	var data= "taking your picture in 5 seconds";
 	var utterThis=new SpeechSynthesisUtterance(data);
 	synth.speak(utterThis);
 	Webcam.attach(camera);
 	setTimeout(function(){
 		take_selfie();
 	},5000)
 }

recognition.onresult=function(event){
	console.log(event);
	var content=event.results[0][0].transcript;
	Textbox.innerHTML=content;
	console.log(content);
	if(content=="my selfie please"){
		console.log("taking selfie...");
		speech();
	}
}