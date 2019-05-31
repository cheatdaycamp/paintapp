var paintapp = {};

var canvas = document.getElementById("canvas");

var brushSize = "10";
var selectedColor = "#4fc1e9";
var brushType = "Squared";
var mybrush = [brushSize, selectedColor, brushType];
var counter = 0;

paintapp.start = function() {
    paintapp.bindMenuActions();
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
    var rotateright = document.getElementById("rotateright");
    rotateright.addEventListener("click", paintapp.rotateright);
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
    // ---------------------------------
    canvas.addEventListener("mousedown", paintapp.draw);

    // ---------------------------------
    var color1 = document.getElementById("color1");
    color1.addEventListener("click", paintapp.color);

    var color2 = document.getElementById("color2");
    color2.addEventListener("click", paintapp.color);

    var color3 = document.getElementById("color3");
    color3.addEventListener("click", paintapp.color);

    var color4 = document.getElementById("color4");
    color4.addEventListener("click", paintapp.color);

    var color5 = document.getElementById("color5");
    color5.addEventListener("click", paintapp.color);

    var color6 = document.getElementById("color6");
    color6.addEventListener("click", paintapp.color);

    var color7 = document.getElementById("color7");
    color7.addEventListener("click", paintapp.color);

    var color8 = document.getElementById("color8");
    color8.addEventListener("click", paintapp.color);

    var color9 = document.getElementById("color9");
    color9.addEventListener("click", paintapp.color);

    var color10 = document.getElementById("color10");
    color10.addEventListener("click", paintapp.color);

    var color11 = document.getElementById("color11");
    color11.addEventListener("click", paintapp.color);

    var color12 = document.getElementById("color12");
    color12.addEventListener("click", paintapp.color);

    var color13 = document.getElementById("color13");
    color13.addEventListener("click", paintapp.color);

    var color14 = document.getElementById("color14");
    color14.addEventListener("click", paintapp.color);

    var color15 = document.getElementById("color15");
    color15.addEventListener("click", paintapp.color);

    var color16 = document.getElementById("color16");
    color16.addEventListener("click", paintapp.color);

    var color17 = document.getElementById("color17");
    color17.addEventListener("click", paintapp.color);

    var color18 = document.getElementById("color18");
    color18.addEventListener("click", paintapp.color);

    var color19 = document.getElementById("color19");
    color19.addEventListener("click", paintapp.color);

    var color20 = document.getElementById("color20");
    color20.addEventListener("click", paintapp.color);

    var colorWheel = document.getElementById("colorWheel");
    colorWheel.addEventListener("click", paintapp.colorWheel)
    colorWheel.addEventListener("click", paintapp.color)

};

paintapp.paintButton = function() {
    var blockingDiv = document.getElementById("blockingDiv");

    blockingDiv.style.display = "none";
    // delay it 3 seconds?
}

paintapp.draw2 = function() {
    var mouseDown = canvas.addEventListener('mouseover')
    if (mouseDown == true) {

        var pixel = document.createElement("div");
        // pixel.style.position = "absolute";
        pixel.style.backgroundColor = selectedColor;
        pixel.style.width = brushSize + "px";
        pixel.style.height = brushSize + "px";

        if (brushType == "Squared") {
            pixel.style.borderRadius = "0px";
        } else {
            pixel.style.borderRadius = "50%";
        }

        // div.style.left = ((point.x - brushSize) / 2) + "px"
        // div.style.top = ((point.y - brushSize) / 2) + "px"
        // canvas.appendChild(pixel);
        paintapp.savecurrent.call();
    }
    // canvas.addEventListener('mousemove', )
}

paintapp.draw = function(event) {

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
    var canvasStyle = getComputedStyle(canvas);
    var canvasWidth = canvasStyle.width;
    // pixel.style.display = "inline-block";
    pixel.style.left = event.clientX - event.target.offsetLeft + "px";
    pixel.style.top = event.clientY - event.target.offsetTop + "px";
    canvas.appendChild(pixel);

    paintapp.savecurrent.call();
}


paintapp.color = function(event) {
    var thisButton = document.getElementById(event.target.id);
    thisButton.style.opacity = 1;
    var style = getComputedStyle(thisButton);
    var backgroundColor = style.backgroundColor;
    selectedColor = backgroundColor;

    var loopForOpacity = document.getElementsByClassName("circle");
    for (var i = 0; i < loopForOpacity.length; i++) {
        if (loopForOpacity[i].id !== event.target.id)
            loopForOpacity[i].style.opacity = .7;
    }
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

paintapp.getbrush = function(event) {
    var thisButton = document.getElementById(event.target.id);
    thisButton.style.opacity = 1;
    var loopForOpacity = document.getElementsByClassName("fas");
    for (var i = 0; i < loopForOpacity.length; i++) {
        if (loopForOpacity[i].id !== event.target.id)
            loopForOpacity[i].style.opacity = .7;
    }
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
    for (var i = 0; i < loopForOpacityOfColors.length; i++) {
        loopForOpacityOfColors[i].style.opacity = .7;
    }

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
paintapp.rotateright = function() {
    canvas.style = 'transform: rotate(' + 90 + 'deg)';
};

paintapp.start();