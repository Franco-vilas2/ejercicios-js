//1
/*
const nombreInput = document.getElementById("nombreInput");
const edadInput = document.getElementById("edadInput");
const boton = document.getElementById("mi Boton");
const resultado = document.getElementById("resultado");

boton.addEventListener("click",function(){
    const persona = {
        nombre: nombreInput.value,
        edad: edadInput.value
    };

    resultado.textContent = `Hola soy ${persona.nombre} y tengo ${persona.edad} anos`;
    
});
*/

//2
/*
const colorInput = document.getElementById("colorInput");
const marcaInput = document.getElementById("marcaInput");
const modeloInput = document.getElementById("modeloInput");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

boton.addEventListener("click",function(){
    const auto = {
        color: colorInput.value,
        marca: marcaInput.value,
        modelo:modeloInput.value
    };

    resultado.innerHTML = `<strong>Color: ${auto.color}, Marca: ${auto.marca}, Modelo: ${auto.modelo}</strong>`;
});
*/

//3
/*
const autos = [
{ marca: "Toyota", modelo: "Etios", color: "gris" },
{ marca: "Ford", modelo: "Focus", color: "negro" },
{ marca: "Chevrolet", modelo: "Onix", color: "blanco" },
{ marca: "Renault", modelo: "Clio", color: "gris" },
{ marca: "Volkswagen", modelo: "Golf", color: "verde" },
{ marca: "Peugeot", modelo: "208", color: "azul" },
{ marca: "Honda", modelo: "Civic", color: "rojo" },
{ marca: "Fiat", modelo: "Palio", color: "gris" },
{ marca: "Nissan", modelo: "Versa", color: "gris" },
{ marca: "Hyundai", modelo: "i30", color: "plateado" },
]

const colorInput = document.getElementById("colorInput");
const boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    const resultado = autos.filter(auto => auto.color === colorInput.value);
    console.table(resultado);
});
*/

//4
/*
const autos = [
    { marca: "Fiat", modelo: "Palio", color: "gris" },
    { marca: "Fiat", modelo: "Cronos", color: "blanco" },
    { marca: "Fiat", modelo: "Mobi", color: "rojo" },
    { marca: "Fiat", modelo: "Uno", color: "negro" },
    
];

const listaAutos = document.getElementById("listaAutos");

const fiats = autos.filter(auto => auto.marca === "Fiat");

fiats.forEach(auto => {
    const li = document.createElement("li");
    li.textContent = auto.modelo;
    listaAutos.appendChild(li);
    
});
*/

//5
/*
const colorPicker = document.getElementById("colorPicker");

const colorGuardado = localStorage.getItem("colorFondo");

if (colorGuardado) {
    document.body.style.backgroundColor = colorGuardado;
    colorPicker.value = colorGuardado;    
}

colorPicker.addEventListener("input",function(){
    document.body.style.backgroundColor = colorPicker.value;
    localStorage.setItem("colorFondo",colorPicker.value);
});

*/

//6
/*
const nombres = ["Ana","Juan","Pedro"];

const listaNombres = document.getElementById("listaNombres");

const listaItems = nombres.map(nombre =>{
    const li = document.createElement("li");
    li.textContent = nombre;
    return li;
});

listaItems.forEach(li =>{
    listaNombres.appendChild(li);
});

*/

//7

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 35 },
    { nombre: "Pedro", edad: 20 }
];

const hayMayores = personas.some(persona => persona.edad > 30);

const resultado = document.getElementById("resultado");

resultado.textContent = hayMayores ? "Hay al menos una persona mayor de 30 anos" : "No hay ninguna persona mayor de 30 anos";