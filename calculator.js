//for the history
function getHistory() {
    return document.getElementsByClassName('history-value');
}

//history value
function printHistory(num) {
    document.getElementsByClassName('history-value').innerText;
};

//For the output
function getOutput() {
    return document.getElementsByClassName('output-value');
}

//Output value.
function printOutput(num) {
    if (num == "") {
        document.getElementsByClassName('output-value').innerText = num;
    } else {
        document.getElementsByClassName('output-value').innerText = formattedNumber(num);
    }
}

//formatted number helps us to include commas in our calculator 
function formattedNumber(num) {
    if (num == '-') {
        return '';
    }
    var n = Number(num);
    var value = n.toLocaleString('en');
    return value;
}

//reverse format to help the calculator go back when we click the backspace
function reverseFormat(num) {
    return Number(num.replace(/,/g, ''));
}

//declaring the variables and assigning them to the operator
var operator = document.getElementsByClassName('operator');
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        if (this.id == 'clear') {
            printHistory("");
            printOutput("");
        } else if (this.id == 'backspace') {
            var output = reverseFormat(getOutput).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        } else {
            var output = getOutput();
            var history = getHistory();
            if (output == '' && history != '') {
                if (isNan(history[history.length - 1])) {
                    hidtory = history.substr(0, history.length - 1);
                }
            }
            if (outpus != "" || history != '') {
                output = output == '' ? output : reverseFormat(output);
                history = history + output;
                if (output = '=') {
                    var result = eval(history);
                    printOutput(result);
                    printHistory('');
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput('');
                }
            }

        }
    })

}

//declaring our number variables
var number = document.getElementsByClassName('number');
for (var i = 0; i < number.length; i++) {
    var output = reverseFormat(getOutput());
    if (output != NaN) {
        output = output.this.id;
        printOutput(output);
    }
}

// //declaring the operator and their ID
// var operator = document.getElementsByClassName('operator');
// for (var i = 0; i < operator.length; i++) {
//     operator[i].addEventListener('click', function() {
//         if (this.id == 'clear') {
//             printHistory("");
//             printOutput("");
//         } else if (this.id == 'backspace') {
//             let output = reverseNumber(getOutput).toString();
//             if (output) {
//                 output = output.substr(0, output.length - 1);
//             }
//         }

//     })
// }

// //Declaring the variables for the numbers and making them work when clicked
// var numbers = document.getElementsByClassName('number');
// for (var i = 0; i < numbers.length; i++) {
//     numbers[i].addEventListener('click', function() {
//         var result = reverseNumber(outPut());
//         if (result != NaN) {
//             result = outPut + this.id;
//             getOutput(result);
//         }
//     })
// }