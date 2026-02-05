function calculate(operation) {
    let leftnum = parseFloat(document.getElementById("leftnum").value);
    let rightnum = parseFloat(document.getElementById("rightnum").value);
    let result = 0;

    if (isNaN(leftnum) || isNaN(rightnum)) {
        document.getElementById("result").innerText = "Enter valid numbers!";
        return;
    }

    switch (operation) {
        case 'add':
            result = leftnum + rightnum;
            break;
        case 'subtract':
            result = leftnum - rightnum;
            break;
        case 'multiply':
            result = leftnum * rightnum;
            break;
        case 'divide':
            if (rightnum === 0) {
                document.getElementById("result").innerText = "Cannot divide by 0!";
                return;
            }
            result = leftnum / rightnum;
            result = Number.isInteger(result) ? result : result.toFixed(2);
            break;
    }

    document.getElementById("result").innerText = result;
}

function reset() {
    document.getElementById("leftnum").value = "";
    document.getElementById("rightnum").value = "";
    document.getElementById("result").innerText = "0";
}
