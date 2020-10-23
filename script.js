let iteration = 0;
let btn = document.getElementById('btn');
let container = document.getElementById('container')


function makeGrid(number){
for (i = 0; i<(number*number); i++){
    box = document.createElement('div');
    size = 600/number;          
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.classList.add('box');
    container.appendChild(box);
}}



function resetGrid(number){
  const boxArray = document.querySelectorAll('.box');
  boxArray.forEach(function(box){
    box.remove();   //remove box element from HTML
  })
  makeGrid(number);
}

function userInput(){
  let userNumber = parseFloat(prompt('How many squares per side? Range 1-100', 'Enter Number'));
  if (userNumber <= 100){
    userNumber = Math.round(userNumber);
    resetGrid(userNumber);
    paint();
  }else{
    alert(`${userNumber} is not within 1-100, please try again and click ok`)
  }
}

function paint(){
  const boxArray = document.querySelectorAll('.box');
  boxArray.forEach(box => box.addEventListener('mouseover', function(e){
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;
    if (iteration<9){
        iteration++;
    }else{
        iteration = 0; 
        r=0;g=0;b=0;
    }
    box.style.backgroundColor = `rgb(${r},${g},${b})`
}))};

btn.addEventListener('click', userInput)

makeGrid(16);
paint();

