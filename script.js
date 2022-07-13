//selects the container div within the html file
const container = document.querySelector('#container');
const rainbowbtn = document.querySelector('#rainbow');
const blackAndWhiteBtn = document.querySelector('#bw');
let header = document.querySelector('#header');
let mouseOverBtn = document.querySelector('#mouseOver');
let clickBtn = document.querySelector('#click');


//function to create the rainbow boxes
function rainbow(){
    let randomBetween = function (min, max) { return min + Math.floor(Math.random() * (max - min + 1)); };
            let r = randomBetween(0, 255);
            let g = randomBetween(0, 255);
            let b = randomBetween(0, 255);
            const rgb = `rgb(${r},${g},${b})`;
            return rgb;
}

//function to create black and white boxes
function blackAndWhite() {
    let choosenValue = Math.random() < 0.5 ?  0: 1;
    if (choosenValue === 0){
        return `rgb(0, 0, 0)`;
    }
    else return `rgb(255, 255, 255)`;
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
        var box = document.createElement('div');
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
blackAndWhiteBtn.addEventListener('click', function(e) {
    document.querySelectorAll('.box').forEach(function(box) {
        const value = blackAndWhite();
        box.addEventListener('mouseover', function(e) {
            let localColor = blackAndWhite();
            e.target.style.backgroundColor = localColor;
            header.style.color = localColor;
            container.style.border = `4px solid ${localColor}`, localColor;
            header.style.transform = "scale(1.5)";
        });  
        
        box.addEventListener('mouseout', function(e) {
            header.style.transform = "scale(1)";
        });
    });
});

//Upon clicking the rainbow button, it will turn the boxes rainbow
rainbowbtn.addEventListener('click', function(e) {
    document.querySelectorAll('.box').forEach(function(box) {
        box.addEventListener('mouseover', function(e) {
            let localColor = rainbow();
            e.target.style.backgroundColor = localColor;
            header.style.color = localColor;
            header.style.transform = "scale(1.5)";
            container.style.border = `4px solid  ${localColor}`, localColor;
        });

        box.addEventListener('mouseout', function(e) {
            document.body.onmouseout = () => {
                header.style.transform = "scale(1)";
            }
        });
    });
});




document.querySelector('#reset').addEventListener('click', () => {
    location.reload();
});

//main function
function main() {
    styleContainer();
    createBoxes();
}
//calls the main function
main();
