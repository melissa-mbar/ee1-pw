const visibilidad = function(){
    const menu = document.getElementById("menu")
    if (menu.style.display === "none"){
        menu.style.display = "block"
    }
    else{
        menu.style.display = "none"
    }
    
}

const agregar = function(){
    const txt = document.getElementById("txt")
    const lista = document.getElementById("lista")
    const nuevoNodo = document.createElement("li")
    nuevoNodo.innerText = txt.value
    lista.appendChild(nuevoNodo)
}


const main = function(){
    const but1 = document.getElementById("btnMenu")
    but1.addEventListener("click", visibilidad)

    const but2 = document.getElementById("btnAgregar")
    but2.addEventListener("click", agregar)

}

main()

