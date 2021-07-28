//for the history 
function history() {
    return document.getElementsByClassName('history-value').innerText;
};


//for the history value
function getHistory(number) {
    document.getElementsByClassName('history-value').innerText = number;
}


//for the output 
function outPut() {
    return document.getElementsByClassName('output-value').innerText;
};

//output value. This function helps us to 
function getOutput(number) {
    if (number == '') {
        document.getElementsByClassName('output-value').innerText = number;
    } else {
        document.getElementsByClassName('output-value').innerText = formattedNumber(number);
    }
}

//formatted number. This function helps us to return a comma within the value.
function formattedNumber() {
    var num = Number(number);
    var value = num.localeString('en');
    return value;
}


//Reverse the format. This will help us replace the comma to an empty character

function reverseNumber(number) {
    return Number(num.replace(/,/g, ''));
}

//declaring the operator and their ID
var operator = document.getElementsByClassName('operator');
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        alert('the operator click ' + this.id);
    })
}

//Declaring the variables for the numbers 

var numbers = document.getElementsByClassName('number');
for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        alert('the number you clicked is ' + this.id);
    })
}