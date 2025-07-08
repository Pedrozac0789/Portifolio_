const valor1 = document.querySelector('#valor1');
const valor2 = document.querySelector('#valor2');
const resultado = document.querySelector('.resultado')

const btnSomar = document.querySelector('#somar');
const btnDiminuir = document.querySelector('#diminuir');
const btnMultiplicar = document.querySelector('#multiplicar');
const btnDividir = document.querySelector('#dividir');
const clear = document.querySelector('#clear');



clear.addEventListener('click', () => {
    valor1.value = '';
    valor2.value = '';
    resultado.textContent = 0;
});


btnSomar.addEventListener('click', () => {
    let num1 = parseFloat(valor1.value);
    let num2 = parseFloat(valor2.value);

    resultado.textContent = num1 + num2;
});

btnDiminuir.addEventListener('click', () => {
    let num1 = parseFloat(valor1.value);
    let num2 = parseFloat(valor2.value);

    resultado.textContent = num1 - num2;
});


btnMultiplicar.addEventListener('click', () => {
    let num1 = parseFloat(valor1.value);
    let num2 = parseFloat(valor2.value);

    resultado.textContent = num1 * num2;
});


btnDividir.addEventListener('click', () => {
    let num1 = parseFloat(valor1.value);
    let num2 = parseFloat(valor2.value);

    resultado.textContent = num1 / num2;
});


