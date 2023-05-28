const 
    numbers = document.querySelectorAll('.number'),
    input = document.querySelector('input'),
    clear = document.querySelector('.clear'),
    deleteBtn = document.querySelector('.deleteBtn');

input.addEventListener('change', function () {
    
})

numbers.forEach(number => {
    number.addEventListener('click', () => {
        input.value += number.textContent;
    })
})

clear.addEventListener('click', () => {
    input.value = "";
})

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
