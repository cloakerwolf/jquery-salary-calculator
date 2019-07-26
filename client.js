console.log('client.js');

$(document).ready(readyNow);




function newEmployee() {
    console.log('newEmployee');
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let ID = $('#idInput').val();
    let title = $('#titleInput').val();
    let annualSalary = $('#annualSalaryInput').val();
 
    // make this one show on dom
    $('.employee').append(`<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${ID}</td>
    <td>${title}</td>
    <td>${annualSalary}</td>
    <td id = "delete">
    </tr>`);
    console.log(firstName);
    console.log(lastName);
    console.log(ID);
    console.log(title);
    console.log(annualSalary);
}
function readyNow() {
    console.log('Dom');
    $('#dataCollection').on('click', newEmployee);
}