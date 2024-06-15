// Función para cambiar los valores de la calculadora
function addToDisplay (value) {
    document.getElementById('display').value += value;
}

// Función para realizar las operaciones matemáticas con eval
function calculate() { 
    var expresion = document.getElementById ('display').value;
    var resultado = eval (expresion);
    document.getElementById('display').value = resultado;
}

// Función para limpiar(borrar valores) la pantalla
function clearDisplay() {
    document.getElementById('display').value = '';
}