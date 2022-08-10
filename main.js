function setup(){
    video=createCapture(VIDEO);
    video.size(550 , 500);
    canvas=createCanvas(550 , 500);
    canvas.position(560 , 150);
    poseNet=ml5.poseNet(video , modelLoaded);
    poseNet.on('pose  '  , gotPoses);
}

function draw(){
    background('#969A97');
    textsize(difference);
    fill('#FFE787');
    text('Vikas' , 60 , 400);

}

function modelLoaded() {

    console.log('PoseNet Is Initialized');


}

function gotPoses(results){

    if(results.length > 0)

    {
        console.log(results);
        leftwristX=results[0].pose.leftwrist.X;
        rightwristX=results[0].pose.rightwrist.X;
        console.log("leftwristX" + leftwristX + "rightwristX=" + rightwristX);
        difference=floor(leftwristX - rightwristX);
        console.log("difference=" + difference);

    }

}

leftwristX=0;
rightwristX=0;
difference=0;