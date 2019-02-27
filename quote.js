// Quote Calculator
var employee;
var revenue;
var total;
var audit;

document.onkeyup = function calc() {
    employee = document.getElementById('employees').value;
    revenue = document.getElementById('revenue').value;
    total = (.5 * employee) + (.0001 * revenue) + (125);
    document.getElementById('quote').innerHTML = '$' + total.toFixed(0);
}

