var paintapp = {};

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
};

paintapp.undo = function() {
    alert("undo");
};
paintapp.redo = function() {
    alert("redo");
};
paintapp.save = function() {
    alert("save");
};
paintapp.load = function() {
    alert("load");
};
paintapp.clear = function() {
    alert("clear");
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