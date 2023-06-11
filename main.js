leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;

function setup(){
    canvas=createCanvas(500,500)
    canvas.position(800,70)
    video=createCapture(VIDEO);
    video.size(500,250);
    poseNet=ml5.poseNet(video, modelDone);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("black");
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("#00ff0a");
    text('Krish',50,400);
}

function modelDone(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}