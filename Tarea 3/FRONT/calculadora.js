const screenInput = document.getElementById('screen-input');

function appendToScreen(value) {
    const lastChar = screenInput.value.slice(-1);
    if (isOperator(lastChar) && isOperator(value)) {
        return; // Evita agregar operadores consecutivos
    }
    if (isOperator_2(value) && (screenInput.value === '' || isOperator(lastChar))) {
        return; // Evita agregar operadores * o / al inicio
    }
    screenInput.value += value;
}

function isOperator(value) {
    return value === '+' || value === '-' || value === '*' || value === '/';
}

function isOperator_2(value) {
    return  value === '*' || value === '/';
}

function calculate() {
    const expression = document.getElementById('screen-input').value;
    
    if (expression.includes("+"))
    {
    const result = "cargando...";
    const url = `http://localhost:3000/suma?expression=${encodeURIComponent(expression)}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    // Procesar los datos recibidos del servidor
    console.log(data.result);
    document.getElementById('screen-input').value = data.result;
    })
    .catch(error => {
        // Manejar errores de la solicitud
        console.error(error);
    });
    }

    else if(expression.includes("*")){
        const result = "cargando...";
    const url = `http://localhost:3000/mult?expression=${encodeURIComponent(expression)}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    // Procesar los datos recibidos del servidor
    console.log(data.result);
    document.getElementById('screen-input').value = data.result;
    })
    .catch(error => {
        // Manejar errores de la solicitud
        console.error(error);
    });

    }

    else if (expression.includes("-")){
        const numeros_array = expression.split("-");
        console.log(numeros_array);
        const numeros = { "num1": parseInt(numeros_array[0]), "num2": parseInt(numeros_array[1]) };
        console.log(numeros);
        fetch('http://localhost:3000/resta', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(numeros)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.result); // Mostrar el resultado recibido del servidor
            document.getElementById('screen-input').value = data.result;

        })
        .catch(error => {
            console.error(error);
        });
        }

    else if (expression.includes("/")){
        const numeros_array = expression.split("/");
        console.log(numeros_array);
        const numeros = { "num1": parseInt(numeros_array[0]), "num2": parseInt(numeros_array[1]) };
        console.log(numeros);
        fetch('http://localhost:3000/div', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(numeros)
        })
        .then(response => response.json())
        .then(data => {
            if (data.error){
                document.getElementById('screen-input').value = data.error;

            }
            else{
            console.log(data.result); // Mostrar el resultado recibido del servidor
            document.getElementById('screen-input').value = data.result;
            }
        })
        .catch(error => {
            console.error(error);
        });
        }
    }
            

function clearScreen() {
    document.getElementById('screen-input').value = '';
}

function clearLastCharacter() {
    screenInput.value = screenInput.value.slice(0, -1);
}


//Esta parte maneja la entrada por teclado
document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
    const key = event.key;
    if (/[0-9+\-*/=.c 'Enter']/.test(key)) {
        event.preventDefault();
        if (key === 'Enter') {
            calculate();
        } else if (key.toLowerCase() === 'c' ) {
            clearScreen();
        } 
        else if (key === 'Backspace'){
            event.preventDefault();
            clearLastCharacter();

        }
        else {
            appendToScreen(key);
        }
    }
}

// conexion con servidor


