Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera")
Webcam.attach('#camera')
function clickme()
{
    Webcam.snap(function(data_uri){
        document.getElementById("action").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
    });
}
console.log(ml5.version)
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Bx3OCv5-e/model.json',modelloaded)
function modelloaded(){
    console.log('modelloaded')
}
function speak(){
    var speaksynth=window.speechSynthesis;
    speakdata1="the first prediction is"+prediction1
    speakdata2="the first prediction is"+prediction2
var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2)
speaksynth.speak(utterthis)
}
function check(){
    img=document.getElementById('capture_img')
classifier.clasify(img.getresult)
}
function getresult(error,result){
    if (error) {
        console.log(error)
    }
    else{
        console.log(result)
        document.getElementById("result1").innerHTML=result[0].label
        document.getElementById("result2").innerHTML=result[1].label
    }