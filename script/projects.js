const canvas = document.getElementById("canvasBoard");
let ctx = canvas.getContext("2d");

//variables
let X = 0;
let Y = 0;

let DX = 10;
let DY = 10;

let RADIUS = 10;

//drawing a small circle
let drawball = () => {
    if(document.getElementById("playAnimation").checked){
        ctx.reset();

        ctx.beginPath();
        ctx.arc(X, Y, RADIUS, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();

        //here is to move the ball using the coordinates
        /*X += 5;
        Y += 5;*/

        if(X < 0 || X > canvas.width){
            DX = -DX;
        }

        if(Y < 0 || Y > canvas.height){
            DY = -DY;
        }

        X += DX;
        Y += DY;

    }
    
    requestAnimationFrame(drawball);
};

drawball();