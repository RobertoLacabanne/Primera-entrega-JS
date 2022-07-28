import data from "../api.json" assert { type: "json" };
console.log(data);

const items = document.getElementById("items");
const templateCard = document.createElement("templateCard").content
const fragment = document.createElementFragment
let carrito = {}
document.addEventListener("DOMContentLoaded", () => {
    fetchData();
})
items.addEventListener("click", e =>  {
    addCarrito(e)
})

const fetchData = async () => {
    try {
const res = await fetch ("api.json",)
const data = await res.json()
console.log (data)
} catch (error) {
     console.log(error)
}
}

const pintarCards = data => {
    data.forEach(producto => {
        console.log(producto)
        templateCard.querySelector("h5").texcontent = producto.title
        templateCard.querySelector("p").texcontent = producto.precio
        templateCard.querySelector("img").setAtribute("src",producto.thumbnailUrl)
        templateCard.querySelector(".btn-dark").dataset.id = producto.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });
items.appendChild(fragment)
}
const addCarrito = e => {
    //console.log(e.target)
    //console.log(e.target.classList.contains("btn-dark"))
    if (e.target.classList.contains("btn-dark")) {
    console.log(e.target.parentElement) 
    setCarrito (e.target.parentElement)
    }
    e.stopPropagation();
}
const setCarrito = objeto => {
const producto = {
    id: objeto.querySelector(".btn-dark").dataset.id,
    title: objeto.querySelector("h5").texcontent,
    precio: objeto.querySelector("p").texcontent,
    cantidad: 1
}
if (carrito.hasOwnProperty(producto.id)){
    producto.cantidad = carrito [producto.id].cantidad + 1
}
carrito[producto.id] = {...producto}
}
pintarCards(comida)  