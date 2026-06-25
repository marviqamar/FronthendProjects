let button = document.querySelector('#colr-btn');


let index = 0;
let colors = ['skyblue', 'pink', 'aquamarine', 'grey'];

button.addEventListener('click', () => {

    document.body.style.backgroundColor = colors[index];
    index++;

    if (index === colors.length) {
        index = 0;
    }
    
});