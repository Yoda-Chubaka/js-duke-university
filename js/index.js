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

// Отменить все изменения
// function resp() {
//     res.innerHTML = " ";
//     console.log("Я четвёртая функция - и я очистила блок")
//   }