const 
    numbers = document.querySelectorAll('.number'),
    input = document.querySelector('input'),
    clear = document.querySelector('.clear'),
    deleteBtn = document.querySelector('.deleteBtn'),
    percentBtn = document.querySelector('.percentBtn'),
    resultField = document.querySelector('.result'),
    divideBtn = document.querySelector('.divideBtn'),
    equalBtn = document.querySelector('.equal'),
    special = document.querySelectorAll('.special');

//number buttons
numbers.forEach(number => {
    number.addEventListener('click', () => {
        input.value += number.innerHTML;
    })
})

//clear field button
clear.addEventListener('click', () => {
    input.value = "";
    resultField.innerHTML = "";
})

//single line delete button
deleteBtn.addEventListener('click', () => {
    if (!(input.value.trim())) {
        return;
    } else if (input.value.length == 1) {
        clear.click();
    } else {
        const arr = input.value.split("");
        arr.pop()
        const str = arr.join("");
        input.value = str;
    }
})

//percentage button
percentBtn.addEventListener('click', () => {
    if ((resultField.innerHTML)) {
        const num1 = Number(resultField.innerHTML);
        console.log(num1);
        const result1 = num1 / 100;
        const resultStr = result1.toString();
        const trimmedStr = resultStr.replace(/\.?0+$/, '');
        const trimmedNum = parseFloat(trimmedStr);
        input.value += '%';
        resultField.innerHTML = trimmedNum;
        
        return;
    } else if (!(input.value.trim())) {
        return;
    } else {
        const num = parseFloat(input.value, 10);
        const result = num / 100;
        const resultStr = result.toString();
        const trimmedStr = resultStr.replace(/\.?0+$/, '');
        const trimmedNum = parseFloat(trimmedStr);
        input.value = num + '%';
        resultField.innerHTML = trimmedNum;
    }
})

//divide button
divideBtn.addEventListener('click', () => {
    if ((resultField.innerHTML)) {

    } else if (!(input.value.trim())) {
        return;
    } else {
        const num = parseFloat(input.value, 10);
        const result = num / 1;
        resultField.innerHTML = result;
        input.value += ' ÷ ';
    }

})

input.addEventListener('input', (e) => {
    const inputValue = e.target.value;
    console.log(inputValue);
    const alphanumericRegex = /^[0-9]*$/;

    if (!alphanumericRegex.test(inputValue)) {
    e.target.value = inputValue.replace(/[^0-9]/g, '');
    }

});

window.addEventListener('load', () => {
    input.focus();
})

//equal button fix
equalBtn.addEventListener('click', () => {
    if (!input.value) {
        return;
    } else {
        const str = input.value;
        const num = str.split(' ');
        const num1 = Number(num[0]);
        const num2 = Number(num[2]);
        console.log(num1, num2);
        if(num[1] == '÷') {
            const result = num1 / num2;
            if (Number.isInteger(result)) {
                resultField.innerHTML = parseInt(result);
                input.value = "";
            } else {
                let roundedResult = result.toFixed(8);
                let trimmedNum = parseFloat(roundedResult).toString();
                resultField.innerHTML = trimmedNum;
                input.value = "";
            }
            
        }
    }
})