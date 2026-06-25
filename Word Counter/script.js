let inputField = document.querySelector('#txtField');
let showCharCount = document.querySelector('#charCount');
let showWordCount = document.querySelector('#wordCount');

inputField.addEventListener('input', function () {

    let count = inputField.value.length;
    showCharCount.innerText = count;

    let text = inputField.value;
    text = text.trim();
    text = text.split(' ');

    text = text.filter(function(input){
        return input !== '';
    });

    showWordCount.innerText = text.length;

});

