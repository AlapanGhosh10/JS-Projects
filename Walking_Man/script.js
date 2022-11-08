
function init() {
    canvas = document.getElementById("mycanvas")
    canvas.width = 1000;
    canvas.height = 250;
    pos = 0
    pen = canvas.getContext('2d')

    man = {
        x: -60,
    }

    img = document.getElementById("man");
    pen.drawImage(img, man.x, 120, 150, 150);
}

// function update() {

// }

// function draw() {

// }

function bgShift(mv) {
    pos += mv
    canvas.style = `background-position: ${pos}px;`
}

function move(e) {
    if(e.key == 'd') {
        bgShift(-2)
        pen.clearRect(0, 0, 1000, 250)
        man.x += 5;
        pen.drawImage(img, man.x, 120, 150, 150);
    }
    if(e.key == 'a') {
        bgShift(2)
        pen.clearRect(0, 0, 1000, 250)
        man.x -= 5;
        pen.drawImage(img, man.x, 120, 150, 150);
    }
    if(man.x > 900)
        man.x = -60
    if(man.x < -60)
        man.x = 900
}

// function gameloop(){
// 	draw();
// 	update();
// }

init();

// var f = setInterval(gameloop,100);
document.addEventListener('keydown', move)