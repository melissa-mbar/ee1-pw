const verificar = function(){
    const nom = document.getElementById("nom")
    const edad = document.getElementById("edad")
    const msg = document.getElementById("msgResultado")

    if (nom.value =="" || edad.value == ""){
        msg.setAttribute("class", "alert alert-danger centrado")
        msg.innerText="Error, debe llenar todos los campos."
        return
    } else {
        msg.setAttribute("class", "alert alert-success centrado")
        msg.innerText="Se guardó con éxito."
    }
}

const main = function(){
    const but = document.getElementById("btnGuardar")
    but.addEventListener("click", verificar)
}

main()