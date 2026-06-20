const button = document.querySelector('.calculatebtn');

button.addEventListener('click', function () {

    //select input field and pass its value
    const dob = document.getElementById('dateField').value;

    //Get todays Date object
    let today = new Date ();

    //convert string dateOfBirth into Date object so that we can use Date methods
    let birthDate = new Date(dob);

    //subtract the years
    let age = today.getFullYear() - birthDate.getFullYear();
    console.log('Age = ' + age);

    //Display that age in span tag
    //Select that span tag and show age using 'TextContent'

    document.querySelector('.calculatedAge').textContent = age;
});