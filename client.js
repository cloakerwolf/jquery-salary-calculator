console.log('client.js');

$(document).ready(readyNow);

let totalMonthlyCost= 0;


function newEmployee() {
    //console.log('newEmployee');
    let firstName = $('#firstNameInput').val();  //takes the firstname input
    let lastName = $('#lastNameInput').val();    //takes the lastname input
    let ID = $('#idInput').val();                 //takes the id input
    let title = $('#titleInput').val();           //takes the title input
    let annualSalary = $('#annualSalaryInput').val();  // takes the annualSalary input
    let monthlyCost = annualSalary/12;             //creates monthlyCost
    totalMonthlyCost += monthlyCost;     // adds monthly cost to the global totalMonthlyCost
    // make this one show on dom
    $('.employee').append(`<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${ID}</td>
    <td>${title}</td>
    <td>${annualSalary}</td>
    <td> <button id = "delete">Delete</button></td>
    </tr>`);
    $('.totalMonthly').text(totalMonthlyCost);  //prints totalMonthlyCost in Dom in span inside footer

    $('.info').val(''); //clears the inputs
    // console.log(firstName);
    // console.log(lastName);
    // console.log(ID);
    // console.log(title);
    // console.log(annualSalary);
}

function monthlyCost() {
    // take in annualSalary 
    
    
    // divide annualSalary by 12 to get monthly salary

    // add all monthly salary and print on Dom
}









function readyNow() {
    console.log('Dom');
    $('#dataCollection').on('click', newEmployee);
}