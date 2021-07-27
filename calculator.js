//for the history 
function history() {
    return document.getElementsByClassName('history-value').innerText();
};


//for the history value
function getHistory(number) {
    document.getElementsByClassName('history-value').innerText = number;
}


//for the output 
function outPut() {
    return document.getElementsByClassName('output-value').innerText;
};

//output value 
function getOutput(number) {
    if (number == '') {
        document.getElementsByClassName('output-value').innerText = number;
    } else {
        document.getElementsByClassName('output-value').innerText = formattedNumber(number);
    }


    //formatted number
    function formattedNumber() {
        var num = Number(number);
        var value = num.localeString('en');
        return value;
    }

    //     // Reverse our number