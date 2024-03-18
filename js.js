function Multiplicacion() {
    // La función devuelve el producto de a y b
    let a=document.getElementById("variable_a").value;
    let b=document.getElementById("variable_b").value;

    if (!isNaN(a)) {
        if (!isNaN(b)) {
            resultado=a * b;
        }
    }

    document.getElementById("demo_resultado").innerHTML = 'Resultado: ' + resultado;
}

function Suma() {
    // La función devuelve el producto de a y b
    let a=document.getElementById("variable_a").value;
    let b=document.getElementById("variable_b").value;

    if (!isNaN(a)) {
        if (!isNaN(b)) {
            resultado= parseInt(a) + parseInt(b);
        }
    }

    document.getElementById("demo_resultado").innerHTML = 'Resultado: ' + resultado;
}

function Resta() {
    // La función devuelve el producto de a y b
    let a=document.getElementById("variable_a").value;
    let b=document.getElementById("variable_b").value;

    if (!isNaN(a)) {
        if (!isNaN(b)) {
            resultado=a - b;
        }
    }

    document.getElementById("demo_resultado").innerHTML = 'Resultado: ' + resultado;
}

function Divide() {
    // La función devuelve el producto de a y b
    let a=document.getElementById("variable_a").value;
    let b=document.getElementById("variable_b").value;

    if (!isNaN(a)) {
        if (!isNaN(b)) {
            resultado=a / b;
        }
    }

    document.getElementById("demo_resultado").innerHTML = 'Resultado: ' + resultado;
}

function Comparar() {
    // La función devuelve la relación entre los números
    let a=document.getElementById("variable_a").value;
    let b=document.getElementById("variable_b").value;

    if (!isNaN(a)) {
        if (!isNaN(b)) {
            if(parseInt(a)>parseInt(b)){
            resultado=a + " es mayor a " + b;
            }
            if(parseInt(a)<parseInt(b)){
                resultado=a + " es menor a " + b;
            }
            if(parseInt(a)==parseInt(b)){
                resultado=a + " es igual a " + b;
            }
        }
    }

    document.getElementById("demo_resultado").innerHTML = 'Resultado: ' + resultado;
}

function Raiz() {
    // La función devuelve la raíz cuadrada de a
    let a=document.getElementById("variable_a").value;

    if (!isNaN(a)) {
        resultado=Math.sqrt(a);
    }

    document.getElementById("demo_resultado").innerHTML = 'Resultado: ' + resultado;
}

function Circulo() {
    // Devuelve el área de un circulo de radio a
    let a=document.getElementById("variable_a").value;

    if (!isNaN(a)) {
        resultado=(a**2)*Math.PI;
    }

    document.getElementById("demo_resultado").innerHTML = 'Resultado: ' + resultado;
}

function Fecha() {
    // La función devuelve la fecha
    let y=document.getElementById("year").value;
    let m=document.getElementById("month").value;
    let d=document.getElementById("day").value;

    m=m-1;

    if (!isNaN(y)) {
        if (!isNaN(m)) {
            if(!isNaN(d)){
                if(y >= 0){
                    if(m >= 0 && m <= 11){
                        if(d>=1 && d <= 31){
                            fecha=new Date(y, m, d);
                        }
                    }
                }
            }
    
        }
    }

    document.getElementById("demo_fecha").innerHTML = 'Fecha: ' + fecha;
}