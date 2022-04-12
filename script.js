const container = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(container);
container.classList.add('container')



function funcFill(size = 255) {
  htmlNew = ''
  for (let i = 0; i <= size; i ++) {
      htmlNew += "<div class = 'square'></div>";
  }
  container.innerHTML = htmlNew
}
funcFill();


function funcLast() {
  squaresArray = document.querySelectorAll('.square');
  squaresArray.forEach(item => {
      item.addEventListener('mouseover', hover => {
        if(!(hover.target.classList.contains('hover')))
            hover.target.classList.add('hover')
      })
  })
}
funcLast();


function divSize(input) {
    console.log(input)
    let height = 100/input
    console.log(height)
    squaresArray = document.querySelectorAll('.square');
    squaresArray.forEach(item => {
        item.style.width = `${height}%`;
        item.style.height = `${height}%`;
        console.log(item.style.width)
    })

}


let input = 16
const button = document.querySelector('button');
button.addEventListener('click', clearFunc)
function clearFunc() {
    input = prompt('Etcha sketch size?');
    let size= input*input-1
    squaresArray.forEach(item => {
        item.classList.remove('hover')
    })
    funcFill(size);
    divSize(input);
    funcLast();
}

    



