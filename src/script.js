const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');
let currentValue = '';
let expression = '';  // Para armazenar a expressão completa

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.value;

        if (value === 'C') {
            // Limpar tudo
            currentValue = '';
            expression = '';
            display.value = '';
        } else if (value === '=') {
            // Calcular o resultado
            try {
                currentValue = eval(expression); // Avaliar a expressão completa
                display.value = currentValue;    // Exibir o resultado
                expression = currentValue;       // Permitir continuar calculando com o resultado
            } catch (error) {
                display.value = 'Erro';
            }
        } else {
            // Adicionar valor à expressão e atualizar o display
            expression += value;
            display.value = expression;  // Mostrar a expressão enquanto é montada
        }
    });
});
