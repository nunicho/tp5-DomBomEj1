/*
        1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en
ese momento se crea un número aleatorio que el usuario deberá adivinar, 

la interfaz del usuario debe tener además un input para ingresar un número y un
botón enviar, 

al presionar el botón enviar mostrar en un alert si el usuario adivino
o no el número mágico,

si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.

Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

*/
function jugarFacil(){
    let form = document.createElement("form");
    let crearInput = document.createElement("input");
    crearInput.setAttribute("type", "number");
    crearInput.setAttribute("class", "dificultadFacil");
    crearInput.setAttribute("min", "1");
    crearInput.setAttribute("max", "2");
    crearInput.setAttribute("placeholder", "número");
    let crearButton = document.createElement("button");
    crearButton.setAttribute("type", "submit");
    crearButton.setAttribute("class", "btn btn-primary mb-2");
    crearButton.setAttribute("onclick", "compararFacil()");
    crearButton.setAttribute("placeholder", "Submit");
    form.appendChild(crearInput);
    form.appendChild(crearButton);
    document.getElementsByClassName("articuloUno")[0]
    .appendChild(form);
    
}

function compararFacil(){
    let aleatorio = Math.round(Math.random()*2);
    console.log(aleatorio)
    let valor = document.getElementsByClassName('dificultadFacil')[0].value;
    if(aleatorio == valor){
        alert("¡Acertaste! Tu número "+valor+" es igual al número mágico "+ aleatorio+".")
    }
    else if (aleatorio < valor){
        alert("¡Fallaste! Tu número " +valor+ " es mayor al número mágico " +aleatorio+".")
    }
    else if (aleatorio > valor){
        alert("¡Fallaste! Tu número " +valor+ " es menor al número mágico " +aleatorio+".")
    }
}

function jugarMedio(){
    let form = document.createElement("form");
    let crearInput = document.createElement("input");
    crearInput.setAttribute("type", "number");
    crearInput.setAttribute("class", "dificultadMedia");
    crearInput.setAttribute("min", "1");
    crearInput.setAttribute("max", "10");
    crearInput.setAttribute("placeholder", "número");
    let crearButton = document.createElement("button");
    crearButton.setAttribute("type", "submit");
    crearButton.setAttribute("class", "btn btn-primary mb-2");
    crearButton.setAttribute("onclick", "compararMedio()");
    form.appendChild(crearInput);
    form.appendChild(crearButton);
    document.getElementsByClassName("articuloDos")[0]
    .appendChild(form);
    
}

function compararMedio(){
    let aleatorio = Math.round(Math.random()*10);
    console.log(aleatorio)
    let valor = document.getElementsByClassName('dificultadMedia')[0].value;
    if(aleatorio == valor){
        alert("¡Acertaste! Tu número "+valor+" es igual al número mágico "+ aleatorio+".")
    }
    else if (aleatorio < valor){
        alert("¡Fallaste! Tu número " +valor+ " es mayor al número mágico " +aleatorio+".")
    }
    else if (aleatorio > valor){
        alert("¡Fallaste! Tu número " +valor+ " es menor al número mágico " +aleatorio+".")
    }
}

function jugarDificil(){
    let form = document.createElement("form");
    let crearInput = document.createElement("input");
    crearInput.setAttribute("type", "number");
    crearInput.setAttribute("class", "dificultadDificil");
    crearInput.setAttribute("min", "1");
    crearInput.setAttribute("max", "100");
    crearInput.setAttribute("placeholder", "número");
    let crearButton = document.createElement("button");
    crearButton.setAttribute("type", "submit");
    crearButton.setAttribute("class", "btn btn-primary mb-2");
    crearButton.setAttribute("onclick", "compararDificil()");
    form.appendChild(crearInput);
    form.appendChild(crearButton);
    document.getElementsByClassName("articuloTres")[0]
    .appendChild(form);
    
}

function compararDificil(){
    let aleatorio = Math.round(Math.random()*100);
    console.log(aleatorio)
    let valor = document.getElementsByClassName('dificultadDificil')[0].value;
    if(aleatorio == valor){
        alert("¡Acertaste! Tu número "+valor+" es igual al número mágico "+ aleatorio+".")
    }
    else if (aleatorio < valor){
        alert("¡Fallaste! Tu número " +valor+ " es mayor al número mágico " +aleatorio+".")
    }
    else if (aleatorio > valor){
        alert("¡Fallaste! Tu número " +valor+ " es menor al número mágico " +aleatorio+".")
    }
}

/*
Investigué en

https://www.geeksforgeeks.org/how-to-create-a-form-dynamically-with-the-javascript/#:~:text=Approach%201%3A%20Use%20document.,body%3E%20element%20of%20the%20document.

*/
