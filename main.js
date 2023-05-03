leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,450);
    video.position(250,300)
    canvas = createCanvas(550,450);
    canvas.position(900,300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet has been initialized");
}

function draw(){
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference + "px";
    textSize(difference);
    fill('#00FFFF');
    text('Hello', 50, 400);
}

function gotPoses(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX);
        console.log("Right Wrist X = " + rightWristX);
        console.log("Difference = " + difference);
    }
}
