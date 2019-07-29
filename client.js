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
    totalMonthlyCost += Math.round(100 * monthlyCost) / 100;     // adds monthly cost to the global totalMonthlyCost
    // make this one show on dom
    $('.employee').append(`<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${ID}</td>
    <td>${title}</td>
    <td>${annualSalary}</td>
    <td> <button id ="delete">Delete</button></td>
    </tr>`);
    $('.totalMonthly').text(totalMonthlyCost);  //prints totalMonthlyCost in Dom in span inside footer
    if (totalMonthlyCost > 20000) {
       // console.log('not enought money!');   tested to make sure it worked
        $('.totalMonthly').css('background-color', 'red') // target location of totalMonthlyCost and turned the background red when the total is more than 20000
    }

    $('.info').val(''); //clears the inputs
    // console.log(firstName);
    // console.log(lastName);
    // console.log(ID);
    // console.log(title);
    // console.log(annualSalary);
}

function deleteEmployee() {
    //console.log('delete');
    // find the monthly cost of the line about to be deleted
    
     $(this).parent().parent().remove(); //targets and removes the parent of the parent of the delete that i click if i just do $(this).remove and click the button it would only delete the button
}



function readyNow() {
   // console.log('Dom');
    $('#dataCollection').on('click', newEmployee); //dataCollection is the submit button when clicked run newEmployee function
    $('.employee').on('click','#delete', deleteEmployee); //when i click on a delete button for a specific employee it runs the deleteEmployee function
}