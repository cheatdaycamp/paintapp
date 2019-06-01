var paintApp = {};

var canvas = document.getElementById("canvas"),
    brushSize = "10",
    selectedColor = "#4fc1e9",
    brushType = "Squared",
    counter = 0, //for the undo and redo
    flag = 0; // for flagging when the app is drawing on the canvas

paintApp.start = function() {
    paintApp.bindMenuActions(); //some an ununderstood gilad technic
};

paintApp.bindMenuActions = function() {

    // buttons actions
    var paintButton = document.getElementById("paint");
    paintButton.addEventListener("click", paintApp.paintButton)
    var undo = document.getElementById("undo");
    undo.addEventListener("click", paintApp.undo);
    var redo = document.getElementById("redo");
    redo.addEventListener("click", paintApp.redo);
    var save = document.getElementById("save");
    save.addEventListener("click", paintApp.save)
    var load = document.getElementById("load");
    load.addEventListener("click", paintApp.load);
    var clear = document.getElementById("clear");
    clear.addEventListener("click", paintApp.clear);
    var eraser = document.getElementById("eraser");
    eraser.addEventListener("click", paintApp.eraser);

    // assigning same function to all brushes buttons trough loop
    var brushButtons = document.getElementsByClassName("brush")
    var j = 0,
        l1 = brushButtons.length;
    for (j; j < l1; j++) {
        brushButtons[j].addEventListener("click", paintApp.getBrush);
    }

    // assigning same function to all color buttons trough loop
    var colorButtons = document.getElementsByClassName("circle")
    var i = 0,
        l2 = colorButtons.length;
    for (i; i < l2; i++) {
        if (colorButtons[i].id == "colorWheel") {
            colorButtons[i].addEventListener("click", paintApp.colorWheel);
        }
        colorButtons[i].addEventListener("click", paintApp.color);
    }

    //canvas on click, drag, mouseup actions
    canvas.addEventListener("mousedown", function() {
        flag = 1;
    });
    canvas.addEventListener("mousemove", function() {
        draw(event);
    });
    canvas.addEventListener("mouseup", function() {
        flag = 0;
        paintApp.savecurrent.call(); //saving the progress for undo/redo
    });

}
paintApp.paintButton = function() {
    var blockingDiv = document.getElementById("blockingDiv");
    blockingDiv.style.display = "none";
}

function draw(event) {
    while (flag == 1) {
        var pixel = document.createElement("div");
        pixel.style.backgroundColor = selectedColor;
        pixel.style.width = brushSize + "px";
        pixel.style.height = brushSize + "px";
        if (brushType == "Squared") {
            pixel.style.borderRadius = "0px";
        } else if (brushType == "Rounded") {
            pixel.style.borderRadius = "50%";
        }
        pixel.style.position = "absolute";
        pixel.style.left = event.clientX - event.target.offsetLeft + "px";
        pixel.style.top = event.clientY - event.target.offsetTop + "px";
        canvas.appendChild(pixel);
    }
};

paintApp.color = function(event) {
    var thisButton = document.getElementById(event.target.id),
        loopForOpacity = document.getElementsByClassName("circle");

    selectedColor = getComputedStyle(thisButton).backgroundColor;
    thisButton.style.opacity = 1;
    opacityLoop(event, loopForOpacity);
    eraser.style.opacity = .7;
}

paintApp.colorWheel = function() {
    var red = document.getElementById("inputRed"),
        green = document.getElementById("inputGreen"),
        blue = document.getElementById("inputBlue"),
        color = "rgba(" + parseInt(red.value) + ", " + parseInt(green.value) + ", " + parseInt(blue.value) + ", 1)";
    colorWheel.style.backgroundColor = color;;
    selectedColor = getComputedStyle(colorWheel).backgroundColor;
}

function opacityLoop(event, array) {
    var l = array.length,
        i = 0;
    for (i; i < l; i++) {
        if (array[i].id !== event.target.id)
            array[i].style.opacity = .7;
    }
}

paintApp.getBrush = function(event) {
    var thisButton = document.getElementById(event.target.id);
    thisButton.style.opacity = 1;
    var loopForOpacity = document.getElementsByClassName("brush");
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

paintApp.eraser = function(event) {
    selectedColor = "white";
    eraser.style.opacity = 1;
    var loopForOpacityOfColors = document.getElementsByClassName("circle");
    opacityLoop(event, loopForOpacityOfColors);
};

paintApp.savecurrent = function() {
    counter++;
    var step = counter,
        file = canvas.innerHTML;
    localStorage.setItem(step, file);
}
paintApp.undo = function() {
    var deviation = counter - 1,
        undo = localStorage.getItem(deviation);
    if (undo != null) {
        canvas.innerHTML = undo;
        counter--;
    } else {
        canvas.innerHTML = "";
        counter = 0;
    }
};
paintApp.redo = function() {
    var deviation = counter + 1,
        redo = localStorage.getItem(deviation);
    if (redo != null) {
        canvas.innerHTML = redo;
        counter++;
    }
};
paintApp.save = function() {
    var file = prompt("Save as: "),
        fileName = canvas.innerHTML;
    localStorage.setItem(file, fileName);
};
paintApp.load = function() {
    var loadfile = prompt("Please enter the name of your saved file"),
        inputName = localStorage.getItem(loadfile);
    if (inputName != null) {
        canvas.innerHTML = localStorage.getItem(loadfile);
    } else {
        alert("Invalid name");
        load();
    }
};
paintApp.clear = function() {
    canvas.innerHTML = "";
    paintApp.savecurrent.call();
};

paintApp.start();