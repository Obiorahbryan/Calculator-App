const 
    numbers = document.querySelectorAll('.number'),
    input = document.querySelector('input'),
    clear = document.querySelector('.clear'),
    deleteBtn = document.querySelector('.deleteBtn'),
    percentBtn = document.querySelector('.percentBtn'),
    resultField = document.querySelector('.result'),
    divideBtn = document.querySelector('.divideBtn');

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
        const result1 = num1 / 100;
        input.value += '%';
        //input.value = num1 + '%';
        resultField.innerHTML = result1;
        return;
    } else if (!(input.value.trim())) {
        return;
    } else {
        const num = parseFloat(input.value, 10);
        const result = num / 100;
        input.value = num + '%';
        resultField.innerHTML = result;
    }
})

//divide button
divideBtn.addEventListener('click', () => {
    if ((resultField.innerHTML)) {

    } else if (!(input.value.trim())) {
        return;
    } else {
        const num = parseFloat(input.value, 10);
        const result = num 
    }

})