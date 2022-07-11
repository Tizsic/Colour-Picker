//selects the container div within the html file
const container = document.querySelector('#container');

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

    //gives each box a random color
    document.querySelectorAll('.box').forEach(function(box) {
        let header = document.querySelector('#header');
        let randomBetween = function (min, max) { return min + Math.floor(Math.random() * (max - min + 1)); };
        let r = randomBetween(0, 255);
        let g = randomBetween(0, 255);
        let b = randomBetween(0, 255);

        const rgb = `rgb(${r},${g},${b})`;
        box.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = rgb;
            header.style.color = rgb;
            header.style.transform = "scale(1.5)";
        });

        box.addEventListener('mouseout', function(e) {
            document.body.onmouseout = () => {
                header.style.transform = "scale(1)";
            }
        });

        
    });
}

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
