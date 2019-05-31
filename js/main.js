var paintapp = {};

var canvas = document.getElementById("canvas"),
    brushSize = "10",
    selectedColor = "#4fc1e9",
    brushType = "Squared",
    counter = 0, //for the undo and redo
    flag = 0; // for flagging when the app is drawing on the canvas

paintapp.start = function() {
    paintapp.bindMenuActions(); //some an ununderstood gilad technic
};

paintapp.bindMenuActions = function() {
    var paintButton = document.getElementById("paint");
    paintButton.addEventListener("click", paintapp.paintButton)
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
    var brushSquaredSmall = document.getElementById("brushSquaredSmall");
    brushSquaredSmall.addEventListener("click", paintapp.getbrush);
    var brushSquaredMedium = document.getElementById("brushSquaredMedium");
    brushSquaredMedium.addEventListener("click", paintapp.getbrush);
    var brushSquaredLarge = document.getElementById("brushSquaredLarge");
    brushSquaredLarge.addEventListener("click", paintapp.getbrush);
    var brushRoundedSmall = document.getElementById("brushRoundedSmall");
    brushRoundedSmall.addEventListener("click", paintapp.getbrush);
    var brushRoundedMedium = document.getElementById("brushRoundedMedium");
    brushRoundedMedium.addEventListener("click", paintapp.getbrush);
    var brushRoundedLarge = document.getElementById("brushRoundedLarge");
    brushRoundedLarge.addEventListener("click", paintapp.getbrush);
    var eraserLarge = document.getElementById("eraser");
    eraserLarge.addEventListener("click", paintapp.eraser);

    canvas.addEventListener("mousedown", function() {
        flag = 1;
    });
    canvas.addEventListener("mousemove", function() {
        draw(event); //couldn't make it work attaching it to the object. So, sorry, global function it is.
    });
    canvas.addEventListener("mouseup", function() {
        flag = 0;
        paintapp.savecurrent.call(); //saving the progress for undo/redo
    });

    var colorButtons = document.getElementsByClassName("circle")
    var i = 0,
        l = colorButtons.length;
    for (i; i < l; i++) {
        if (colorButtons[i].id == "colorWheel") {
            colorButtons[i].addEventListener("click", paintapp.colorWheel);
        }
        colorButtons[i].addEventListener("click", paintapp.color);
    }
}
paintapp.paintButton = function() {
    var blockingDiv = document.getElementById("blockingDiv");
    blockingDiv.style.display = "none";
}

function draw(event) {
    if (flag == 1) {
        var pixel = document.createElement("div");
        pixel.style.backgroundColor = selectedColor;
        pixel.style.width = brushSize + "px";
        pixel.style.height = brushSize + "px";
        if (brushType == "Squared") {
            pixel.style.borderRadius = "0px";
        } else {
            pixel.style.borderRadius = "50%";
        }
        pixel.style.position = "absolute";
        pixel.style.left = event.clientX - event.target.offsetLeft + "px";
        pixel.style.top = event.clientY - event.target.offsetTop + "px";
        canvas.appendChild(pixel);
    }
};

paintapp.color = function(event) {
    var thisButton = document.getElementById(event.target.id);
    thisButton.style.opacity = 1;
    var style = getComputedStyle(thisButton);
    var backgroundColor = style.backgroundColor;
    selectedColor = backgroundColor;
    var loopForOpacity = document.getElementsByClassName("circle");
    opacityLoop(event, loopForOpacity);
    eraser.style.opacity = .7;
}

paintapp.colorWheel = function() {
    var red = document.getElementById("inputRed");
    var green = document.getElementById("inputGreen");
    var blue = document.getElementById("inputBlue");
    var color = "rgba(" + parseInt(red.value) + ", " + parseInt(green.value) + ", " + parseInt(blue.value) + ", 1)";
    colorWheel.style.backgroundColor = color;
    var style = getComputedStyle(colorWheel);
    var backgroundColor = style.backgroundColor;
    selectedColor = backgroundColor;
}

function opacityLoop(event, array) {
    var l = array.length,
        i = 0;
    for (i; i < l; i++) {
        if (array[i].id !== event.target.id)
            array[i].style.opacity = .7;
    }
}

paintapp.getbrush = function(event) {
    var thisButton = document.getElementById(event.target.id);
    thisButton.style.opacity = 1;
    var loopForOpacity = document.getElementsByClassName("fas");
    opacityLoop(event, loopForOpacity);
    switch (event.target.id) {
        case "brushSquaredSmall":
            brushSize = 10;
            brushType = "Squared";
            break;
        case "brushSquaredMedium":
            brushSize = 15;
            brushType = "Squared";
            break;
        case "brushSquaredLarge":
            brushSize = 20;
            brushType = "Squared";
            break;
        case "brushRoundedSmall":
            brushSize = 10;
            brushType = "Rounded";
            break;
        case "brushRoundedMedium":
            brushSize = 15;
            brushType = "Rounded";
            break;
        case "brushRoundedLarge":
            brushSize = 20;
            brushType = "Rounded";
            break;
    }
};

paintapp.eraser = function(event) {
    selectedColor = "white";
    eraser.style.opacity = 1;
    var loopForOpacityOfColors = document.getElementsByClassName("circle");
    opacityLoop(event, loopForOpacityOfColors);
};

paintapp.savecurrent = function() {
    counter++;
    var step = counter;
    var file = canvas.innerHTML;
    localStorage.setItem(step, file);
}
paintapp.undo = function() {
    var deviation = counter - 1;
    var undo = localStorage.getItem(deviation);
    if (undo != null) {
        canvas.innerHTML = undo;
        counter--;
    } else {
        canvas.innerHTML = "";
        counter = 0;
    }
};
paintapp.redo = function() {
    var deviation = counter + 1;
    var redo = localStorage.getItem(deviation);
    if (redo != null) {
        canvas.innerHTML = redo;
        counter++;
    }
};
paintapp.save = function() {
    var file = prompt("Save as: ");
    var fileName = canvas.innerHTML;
    localStorage.setItem(file, fileName);
};
paintapp.load = function() {
    var loadfile = prompt("Please enter the name of your saved file");
    var inputName = localStorage.getItem(loadfile);
    if (inputName != null) {
        canvas.innerHTML = localStorage.getItem(loadfile);
    } else {
        alert("Invalid name");
        load();
    }
};
paintapp.clear = function() {
    canvas.innerHTML = "";
    paintapp.savecurrent.call();
};

paintapp.start();