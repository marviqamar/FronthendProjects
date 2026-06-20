const createbutton = document.querySelector('.addbtn');
const textField = document.getElementById('txtField');
const noteslist = document.querySelector('.lowerDiv');


createbutton.addEventListener('click', function () {
    let tastdesc = textField.value;

    if (tastdesc === "") return;

    const note = document.createElement('div');
    note.className = "note";
    note.textContent = tastdesc;

    const deleteIcon = document.createElement('span');
    deleteIcon.className = "material-symbols-outlined delete-icon";
    deleteIcon.textContent = "clear";

    note.appendChild(deleteIcon);
    noteslist.appendChild(note);
    textField.value = "";

    deleteIcon.addEventListener('click', function () {
        noteslist.removeChild(note);
    })

})