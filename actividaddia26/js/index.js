//index.html
function calcularSueldo() {
    let sueldos = [[120, 120, 280],[120, 280, 340],[240, 520, 890]];

    let puesto = parseInt(document.getElementById("puesto").value);
    let nivel = parseInt(document.getElementById("nivel").value);
    let horas = parseInt(document.getElementById("horas").value);

    let total = sueldos[puesto][nivel] * horas;

    document.getElementById("total").value = total;
}

//muerte.html
function capturarMuertes(){
    let muertes = new Array(7);
    let suma = 0;
    let cadena = '';

    for(let i = 0; i < muertes.length; i++){
        let valor = prompt("Captura las muertes del dia " + (i+1));
        muertes[i] = parseFloat(valor);
    }

    let max = muertes[0];
    let min = muertes[0];

    for(let indice in muertes){
        suma += muertes[indice];

        if(muertes[indice] > max){
            max = muertes[indice];
        }

        if(muertes[indice] < min){
            min = muertes[indice];
        }

        cadena += '<div class="bg-info p-2 m-2">Dia ' + (parseInt(indice)+1) + ': ' + muertes[indice] + '</div>';
    }

    let promedio = suma / muertes.length;

    document.getElementById("impMuertes").innerHTML = cadena;
    document.getElementById("impPromedio").innerHTML = "Promedio: " + promedio;
    document.getElementById("impMax").innerHTML = "Maximo: " + max;
    document.getElementById("impMin").innerHTML = "Minimo: " + min;
}

//alumnos.html
let alumnos = new Array(10);

function capturar(){
    for(let i = 0; i < alumnos.length; i++){
        alumnos[i] = prompt("Captura el nombre del alumno " + (i+1));
    }

    mostrarInicial();
}

function mostrarInicial(){
    let cadena = '';

    alumnos.forEach(function(nombre){
        cadena += '<div class="bg-info p-2 m-2">' + nombre + '</div>';
    });

    document.getElementById("impInicial").innerHTML = cadena;
}

function eliminar(){
    let nombre = prompt("Captura el nombre del alumno que deseas eliminar");
    let posicion = alumnos.indexOf(nombre);

    if(posicion != -1){
        alumnos.splice(posicion, 1);
        alert("Alumno eliminado");
    }else{
        alert("No se encontro el alumno");
    }

    let cadena = '';

    alumnos.forEach(function(nombre){
        cadena += '<div class="bg-success text-white p-2 m-2">' + nombre + '</div>';
    });

    document.getElementById("impFinal").innerHTML = cadena;
}

//figura.html

function imprimir(){
    let cadena = "";

    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            if(i == 0 || i == 2 || i == 4 || j == 0){
                cadena += "X ";
            }else{
                cadena += "&nbsp;&nbsp;";
            }
        }
        cadena += "<br>";
    }

    document.getElementById("impE").innerHTML = cadena;
}

