let iteration = 0;
let btn = document.getElementById('btn');
let container = document.getElementById('container')

for (i = 0; i<256; i++){
    box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
}

btn.addEventListener('click', resetGrid)
function resetGrid(){
    number = parseFloat(prompt('How many squares per side would you like the \
grid to have? Maximum 100'));
    grid = 700/number;
    const square = document.querySelectorAll('.box')
    square.forEach(square => {
    this.style.cssText = `width: ${grid}px; height: ${grid}; background-color
            :black`;
})};


function paint(e){
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;
    if (iteration<9){
        iteration++;
    }else{
        iteration = 0; 
        r=0;g=0;b=0;
    }
    this.style.cssText = `background-color: rgb(${r},${g},${b})`
}

const boxArray = document.querySelectorAll('.box');
boxArray.forEach(boxArray => boxArray.addEventListener('mouseover', paint));
