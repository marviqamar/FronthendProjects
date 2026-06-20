let txtField = document.querySelector('#dataField');

let showCount = document.querySelector('.showCount');

txtField.addEventListener('input', function (){
    let count = txtField.value.length;
    showCount.innerText = count;
    
});

