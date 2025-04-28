

const suma = function(){
    const v1 = parseInt(document.getElementById("n1").value)
    const v2 = parseInt(document.getElementById("n2").value)
    const resultado = document.getElementById("res")
    resultado.value = v1+v2
}

const resta = function(){
    const v1 = parseInt(document.getElementById("n1").value)
    const v2 = parseInt(document.getElementById("n2").value)
    const resultado = document.getElementById("res")
    resultado.value = v1-v2
}

const multiplicacion = function(){
    const v1 = parseInt(document.getElementById("n1").value)
    const v2 = parseInt(document.getElementById("n2").value)
    const resultado = document.getElementById("res")
    resultado.value = v1*v2
}

const division = function(){
    const v1 = parseInt(document.getElementById("n1").value)
    const v2 = parseInt(document.getElementById("n2").value)
    const resultado = document.getElementById("res")
    resultado.value = v1/v2
}

const main = function(){
    const b1 = document.getElementById("btnSuma")
    const b2 = document.getElementById("btnResta")
    const b3 = document.getElementById("btnMult")
    const b4 = document.getElementById("btnDiv")

    b1.addEventListener("click", suma)
    b2.addEventListener("click", resta)
    b3.addEventListener("click", multiplicacion)
    b4.addEventListener("click", division)
}


main()
