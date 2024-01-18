function dochange() {
    alert("clicked button with JS function");
}

function doconfirm() {
    let message;
    if (confirm("clicked button with JS function") == true) {
        message = "You pressed OK!";
    }
    else {
        message = "Are you sure you want to cancel?";
    }
    document.getElementById("demo").innerHTML = message;
}