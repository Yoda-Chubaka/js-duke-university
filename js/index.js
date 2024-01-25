function doChange() {
    alert("clicked button with JS function");
}

function doConfirm() {
    var message;
    if (confirm("clicked button with JS function") == true) {
        message = alert("You pressed OK!");
    }
    else {
        message = alert("Are you sure you want to cancel?");
    }
    // document.getElementById("demo").innerHTML = message;
}

function changeColor() {
    var colorBox1 = document.getElementById("card1");
    var colorBox2 = document.getElementById("card2");
    var colorBox3 = document.getElementById("card3");
    var colorBox4 = document.getElementById("card4");

    colorBox1.className = "viseVersaColor";
    colorBox2.className = "viseVersaColor";
    colorBox3.className = "viseVersaColor";
    colorBox4.className = "viseVersaColor";
}

function changeColorOfCanvas() {
    var colorCanvasBox1 = document.getElementById("canvas-box1");
    var colorCanvasBox2 = document.getElementById("canvas-box2");

    colorCanvasBox1.className = "changeCanvasColor";
    colorCanvasBox2.className = "changeCanvasColor";
}

function changeText() {
    var textBox1 = document.getElementById("card1");
    var textBox2 = document.getElementById("card2");
    var textBox3 = document.getElementById("card3");
    var textBox4 = document.getElementById("card4");

    textBox1.innerHTML = "Hello world! It's my first JS function😎";
    textBox2.innerHTML = "Hello world! It's my first JS function😎";
    textBox3.innerHTML = "Hello world! It's my first JS function😎";
    textBox4.innerHTML = "Hello world! It's my first JS function😎";
}

function doBlue() {
    var colorBox1 = document.getElementById("canvas-box1");
    var colorBox2 = document.getElementById("canvas-box2");
    colorBox1.style.backgroundColor = "blue";
    colorBox2.style.backgroundColor = "blue";
}

function doYellow() {
    var colorBox1 = document.getElementById("canvas-box1");
    var colorBox2 = document.getElementById("canvas-box2");
    colorBox1.style.backgroundColor = "yellow";
    colorBox2.style.backgroundColor = "yellow";
}

function drawRectangles() {
    var colorBox1 = document.getElementById("canvas-box1");
    var colorBox2 = document.getElementById("canvas-box2");
    var ctx1 = colorBox1.getContext("2d");
    ctx1.fillStyle = "white";
    ctx1.fillRect(10,10,40,40);
    ctx1.fillRect(60,10,40,40);
    ctx1.fillRect(110,10,40,40);
    ctx1.fillRect(160,10,40,40);
    ctx1.fillRect(210,10,40,40);
    ctx1.fillRect(260,10,40,40);
    ctx1.font = "28px Arial";
    ctx1.fillText("🎪",10,40);
    ctx1.fillText("🎪",60,40);
    ctx1.fillText("🎪",110,40);
    ctx1.fillText("🎪",160,40);
    ctx1.fillText("🎪",210,40);
    ctx1.fillText("🎪",260,40);
    var ctx2 = colorBox2.getContext("2d");
    ctx2.fillStyle = "white";
    ctx2.fillRect(10,10,40,40);
    ctx2.fillRect(60,10,40,40);
    ctx2.fillRect(110,10,40,40);
    ctx2.fillRect(160,10,40,40);
    ctx2.fillRect(210,10,40,40);
    ctx2.fillRect(260,10,40,40);
    ctx2.font = "28px Arial";
    ctx2.fillText("🎃",10,40);
    ctx2.fillText("🎃",60,40);
    ctx2.fillText("🎃",110,40);
    ctx2.fillText("🎃",160,40);
    ctx2.fillText("🎃",210,40);
    ctx2.fillText("🎃",260,40);
}

function clearContext() {
    var colorBox1 = document.getElementById("canvas-box1");
    var colorBox2 = document.getElementById("canvas-box2");
    var ctx1 = colorBox1.getContext("2d");
    var ctx2 = colorBox2.getContext("2d");
    ctx1.clearRect(0,0,colorBox1.width, colorBox1.height);
    ctx2.clearRect(0,0,colorBox2.width, colorBox2.height);
}

function doColor() {
    var dd1 = document.getElementById("square-canvas-box1");
    var colorInput = document.getElementById("clr");
    var color = colorInput.value;
    dd1.style.backgroundColor = color;
}

function doSquare() {
    var dd1 = document.getElementById("square-canvas-box1");
    var sizeInput = document.getElementById("sldr");
    var size = sizeInput.value;
    var ctx = dd1.getContext("2d");
    ctx.clearRect(0, 0, dd1.width, dd1.height);
    ctx.fillStyle="yellow";
    ctx.fillRect(10, 10, size, size);
    ctx.fillStyle="green";
    ctx.fillRect(parseInt(size)+20,10,size,size);
}





var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
// малюватиме, лише якщо натискати на мишку (спрацьовує лише з натиснутою кнопкою)
var isPainting = false;

function setWidth(value) {
    if (isNumeric(value)) {
        paintcanvas.width = value;
    }
}

function setHeight(value) {
    if (isNumeric(value)) {
        paintcanvas.height = value;
    }
}

function clearCanvas() {
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle(x, y) {
    // щоразу починайте нове коло (circle)
    context.beginPath();
    // малюйте коло з радіусом 2*PI навколо заданої точки
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}

// перевірте, щоб value було числовим значенням
function isNumeric(value) {
    // стандартна функція JavaScript, аби визначити, чи рядок можна перетворити рядок на число 
    return !isNaN(value);
}

function startPaint() {
    isPainting = true;
}

function endPaint() {
    isPainting = false;
}

function doPaint(x, y) {
    if (isPainting === true) {
        paintCircle(x, y);
    }
}

function changeColor(newColor) {
    color = newColor;
}

function resizeBrush(newSize) {
    radius = newSize;
    document.getElementById("sizeOutput").value = newSize;
}
