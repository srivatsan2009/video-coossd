video1="";
video2="";
getvideo="";
flag=0;

function preload() {
video1=createVideo("lamborghini.mp4");
video2=createVideo("video.mp4");
}


function setup() {
canvas=createCanvas(480,330);
canvas.center();
video1.hide();
video2.hide();
}

function start() {
objectdetector=ml5.objectDetector("cocossd",modeloaded);
document.getElementById("status").innerHTML="status:detectin' objects";
getvideo=document.getElementById("dropdown").value;


}

function modeloaded() {
console.log("model loaded!");
status=true;

if(getvideo=="lamborghini_video") {
video2.pause();
video1.loop();
flag=1;
}
else {
video1.pause();
video2.loop();
flag=0;
}
}                               

function draw() {
if(flag==1) {
image(video1,0,0,480,330);
}
else {
image(video2,0,0,480,330);
}
}