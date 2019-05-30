var paintapp = {};

var canvas = document.getElementById("canvas");

var brushSize = "10";
var selectedColor = "black";
var brushType = "Squared";
var mybrush = [brushSize, selectedColor, brushType];


paintapp.start = function() {
    paintapp.bindMenuActions();
};

paintapp.bindMenuActions = function() {
    var undo = document.getElementById("undo");
    undo.addEventListener("click", paintapp.undo);
    var redo = document.getElementById("redo");
    redo.addEventListener("click", paintapp.redo);
    var save = document.getElementById("save");
    save.addEventListener("click", paintapp.save)
    var load = document.getElementById("load");
    load.addEventListener("click", paintapp.load);
    var clear = document.getElementById("clear");
    clear.addEventListener("click", paintapp.clear);
    var rotateright = document.getElementById("rotateright");
    rotateright.addEventListener("click", paintapp.rotateright);
    var brushSquaredSmall = document.getElementById("brushSquaredSmall");
    brushSquaredSmall.addEventListener("click", paintapp.brushSquaredSmall);
    var brushSquaredMedium = document.getElementById("brushSquaredMedium");
    brushSquaredMedium.addEventListener("click", paintapp.brushSquaredMedium);
    var brushSquaredLarge = document.getElementById("brushSquaredLarge");
    brushSquaredLarge.addEventListener("click", paintapp.brushSquaredLarge);
    var brushRoundedSmall = document.getElementById("brushRoundedSmall");
    brushRoundedSmall.addEventListener("click", paintapp.brushRoundedSmall);
    var brushRoundedMedium = document.getElementById("brushRoundedMedium");
    brushRoundedMedium.addEventListener("click", paintapp.brushRoundedMedium);
    var brushRoundedLarge = document.getElementById("brushRoundedLarge");
    brushRoundedLarge.addEventListener("click", paintapp.brushRoundedLarge);
    var eraserSmall = document.getElementById("eraserSmall");
    eraserSmall.addEventListener("click", paintapp.eraserSmall);
    var eraserMedium = document.getElementById("eraserMedium");
    eraserMedium.addEventListener("click", paintapp.eraserMedium);
    var eraserLarge = document.getElementById("eraserLarge");
    eraserLarge.addEventListener("click", paintapp.eraserLarge);

    // ---------------------------------
    canvas.addEventListener("click", paintapp.draw);

    // ---------------------------------
    var color1 = document.getElementById("color1");
    color1.addEventListener("click", paintapp.color(this.id))

};
paintapp.draw = function() {
    var newDiv = document.createElement("div");
    newDiv.style.backgroundColor = selectedColor;
    newDiv.style.width = "10px";
    newDiv.style.height = "10px";
    canvas.appendChild(newDiv);
}

paintapp.color = function(someID) {
    var thisButton = document.getElementById(someID);
    console.log(thisButton);
    console.log("hola");
    var target = document.getElementsByClassName("circle");
    for (var i = 0; i < target.length; i++) {
        if (target[i].id !== someID)
            target[i].style.opacity = .7;
    }

    // $(".circle").css("opacity", 1);
    // thisButton.style.opacity = 1;
    // selectedColor = thisButton.style.backgroundColor;
    // console.log(selectedColor)
}

paintapp.brushsize = function() {


}
paintapp.undo = function() {
    alert("undo");
};
paintapp.redo = function() {
    alert("redo");
};
paintapp.save = function() {
    var file = prompt("Save as: ");
    var fileName = canvas.innerHTML;
    localStorage.setItem(file, fileName);
};
paintapp.load = function() {
    var load = prompt("Please enter the name of your saved file");
    var inputName = localStorage.getItem(loadName);
    if (inputName != null) {
        canvas.innerHTML = localStorage.getItem(loadName);
    } else {
        alert("Invalid name");
        load();
    }
};
paintapp.clear = function() {
    canvas.innerHTML = "";
};
paintapp.rotateright = function() {
    alert("rotateright");
};
paintapp.brushSquaredSmall = function() {
    alert("brushSquaredSmall");
};
paintapp.brushSquaredMedium = function() {
    alert("brushSquaredMedium");
};
paintapp.brushSquaredLarge = function() {
    alert("brushSquaredLarge");
};
paintapp.brushRoundedSmall = function() {
    alert("brushRoundedSmall");
};
paintapp.brushRoundedMedium = function() {
    alert("brushRoundedMedium");
};
paintapp.brushRoundedLarge = function() {
    alert("brushRoundedLarge");
};
paintapp.eraserSmall = function() {
    alert("eraserSmall");
};
paintapp.eraserMedium = function() {
    alert("eraserMedium");
};
paintapp.eraserLarge = function() {
    alert("eraserLarge");
};

paintapp.start();