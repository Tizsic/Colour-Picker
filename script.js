//selects the container div within the html file
const container = document.querySelector('#container');

//selects buttons
const rainbowBtn = document.querySelector('#rainbow');
const blackAndWhiteBtn = document.querySelector('#bw');
const eraserBtn = document.querySelector('#eraser');
const colorChangeBtn = document.querySelector('#colorchange');

const header = document.querySelector('#header');
const mySound = new Audio('new_clicker.wav');
let localColor;

//function to create the rainbow boxes
function rainbow() {
    let randomBetween = function (min, max) { return min + Math.floor(Math.random() * (max - min + 1)); };
    let r = randomBetween(0, 255);
    let g = randomBetween(0, 255);
    let b = randomBetween(0, 255);
    let rgb = "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
    return rgb;
}
//function to create black and white boxes
function blackAndWhite() {
    let choosenValue = Math.random() < 0.5 ? 0 : 1;
    if (choosenValue === 0) {
        return "rgb(0, 0, 0)";
    }
    else
        return "rgb(255, 255, 255)";
}
//function to style the container
function styleContainer() {
    container.style.border = '4px solid black';
    container.style.display = 'flexbox';
    container.style.position = 'relative';
    container.style.width = '432px';
    container.style.height = '493px';
    container.style.margin = '0 auto';
}
//function to create the boxes, style and append them
function createBoxes() {
    for (let i = 0; i < 256; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.display = 'inline-block';
        box.style.width = '15px';
        box.style.height = '15px';
        box.style.border = '1px solid black';
        box.style.margin = '5px';
        container.appendChild(box);
    }
}
//upon clicking the black/white button, it will turn the boxes black or white
blackAndWhiteBtn.addEventListener('click', function (e) {
    document.querySelectorAll('.box').forEach(function (box) {
        let value = blackAndWhite();
        box.addEventListener('mouseover', function (e) {
            localColor = blackAndWhite();
            e.target.style.backgroundColor = localColor;
            header.style.color = localColor;
            container.style.border = "4px solid ".concat(localColor), localColor;
            header.style.transform = "scale(1.5)";
            mySound.play();
        });
        box.addEventListener('mouseout', function (e) {
            header.style.transform = "scale(1)";
        });
    });
});
//Upon clicking the rainbow button, it will turn the boxes rainbow
rainbowBtn.addEventListener('click', function (e) {
    document.querySelectorAll('.box').forEach(function (box) {
        box.addEventListener('mouseover', function (e) {
            localColor = rainbow();
            e.target.style.backgroundColor = localColor;
            header.style.color = localColor;
            header.style.transform = "scale(1.5)";
            container.style.border = "4px solid  ".concat(localColor), localColor;
            mySound.play();
        });
        box.addEventListener('mouseout', function (e) {
            document.body.onmouseout = function () {
                header.style.transform = "scale(1)";
            };
        });
    });
});

//resets boxes to clear/eraser
eraserBtn.addEventListener('click', function (e) {
    document.querySelectorAll('.box').forEach(function (box) {
        box.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = "transparent";
            header.style.color = "black";
            container.style.border = "4px solid black";
            mySound.play();
        });
    });
});

//allows you to pick a color
colorChangeBtn.addEventListener('input', function (e) {
    document.querySelectorAll('.box').forEach(function (box) {
        box.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = colorChangeBtn.value;
            header.style.color = "black";
            container.style.border = "4px solid black";
            mySound.play();
        });
    });
});

//refreshes the page/clears all the boxes
document.querySelector('#reset').addEventListener('click', function () {
    location.reload();
});

//main function
function main() {
    styleContainer();
    createBoxes();
}
//calls the main function
main();
