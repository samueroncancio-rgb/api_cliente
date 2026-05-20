Samuel Roncancio Bertel
samuelrbertel9283
En línea

Samuel Roncancio Bertel — 23/4/26, 10:33
Listo
Samuel Roncancio Bertel — 28/4/26, 16:58
Imagen
Samuel Roncancio Bertel — 4/5/26, 10:06
Reenviado
Tipo de archivo adjunto: acrobat
Ejercicio Inventario Javascript.pdf
463.10 KB

Riwi  •  30/4/26
Ckz_2376 — 5/5/26, 10:10
aqui esta
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Inventario de Alimentos</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

message.txt
4 KB
Samuel Roncancio Bertel — 8/5/26, 9:52
Creación de un sistema interactivo de mensajes
 
Objetivo de la Historia de usuario
Implementar un programa funcional en JavaScript que permita interactuar con el usuario, solicitando nombre y edad, validando la entrada y mostrando mensajes dinámicos según las condiciones establecidas. Con esta historia, cada coder podrá reforzar:
La declaración de variables (let y const)
Tipos de datos en JavaScript
Uso de console.log(), alert(), prompt() y console.error()
Condicionales (if, else if, else)
Buenas prácticas en el nombrado de variables (camelCase, descriptivas)
 
Descripción de las tareas
TASK 1
Configuración inicial del proyecto:
Crea un archivo llamado sistema_interactivo.js.
Asegúrate de que el archivo pueda ejecutarse en el navegador o en Node.js para pruebas.
Comenta cada sección del código para mayor comprensión.
TASK 2
Entrada de datos del usuario:
Usa prompt() para solicitar el nombre.
Usa prompt() para solicitar la edad.
Declara variables usando let o const y asigna los valores ingresados.
TASK 3
Validación de la edad:
Comprueba si el valor ingresado para la edad es un número.
Si no es un número, muestra un mensaje de error usando console.error("Error: Por favor, ingresa una edad válida en números.").
TASK 4
Condicionales y mensajes dinámicos:
Si la edad es menor a 18, muestra con alert() o console.log():
"Hola [nombre], eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!"
Si la edad es mayor o igual a 18, muestra:
"Hola [nombre], eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!"
 
Criterios de aceptación
El archivo se llama sistema_interactivo.js.
Se usan let o const (no var).
Se valida que la edad sea un número válido.
Se muestran mensajes personalizados según el valor de la edad.
Se utiliza console.error() para errores de entrada.
El código contiene comentarios explicativos en cada sección.
Ckz_2376 — 8/5/26, 10:47
const productos = [
  { nombre: "Arroz", precio: 2500, stock: 4 },
  { nombre: "Leche", precio: 3200, stock: 0 },
  { nombre: "Pan", precio: 500, stock: 8 },
  { nombre: "Huevos", precio: 700, stock: 12 }
];
Ckz_2376 — ayer a las 16:50
solo cambie este archivo
import './styles/globals.css';


const endpoint = "http://localhost:3000/productos"
let productoActualizando = null

async function traerProductos() {
    try {
        const response = await fetch(endpoint)

        const datos = await response.json()
        imprimirProductos(datos)
        const totalPrecio = datos.reduce((acc,data)=>  acc+data.precioUnidad*data.stock, 0)
        const totalStock = datos.reduce((acc,data)=>  acc+data.stock, 0)
        const precio = document.querySelector("#stat-value")
        const stock = document.querySelector("#stat-low")
        precio.textContent = `COP ${totalPrecio}`
        stock.textContent = totalStock
        
    } catch (error) {
        alert("ha ocurrido un error intente más tarde")
        console.error(error)


    }
}

traerProductos()

function imprimirProductos(listaDeLosProductos) {
    const tablaProducto = document.getElementById("inventory-list")
    tablaProducto.innerHTML = ''
    for (const producto of listaDeLosProductos) {
        tablaProducto.innerHTML += `
<tr class="hover:bg-slate-50/30 transition-colors group">
<td class="px-8 py-6">
    <div class="flex flex-col">
    <span class="font-bold text-slate-900">${producto.nombre}</span>
    <span class="text-xs text-slate-400 mt-1 line-clamp-1 max-w-[300px]">${producto.descripcion}</span>
    </div>
</td>
<td class="px-8 py-6 text-center">
    <span class="px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-xl text-[10px] font-black uppercase tracking-tight border border-emerald-100">${producto.stock}</span>
</td>
<td class="px-8 py-6 text-center font-bold text-slate-900">COP ${producto.precioUnidad}</td>
<td class="px-8 py-6 text-right">
    <div class="flex justify-end gap-3">
    <button class="editar-btn w-10 h-10 flex items-center justify-center text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all border border-transparent hover:border-indigo-100" data-id="${producto.id}" data-nombre="${producto.nombre}" data-precio="${producto.precioUnidad}" data-stock="${producto.stock}" data-descripcion="${producto.descripcion}"title="Editar">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
    </button>
    <button class="eliminar-btn w-10 h-10 flex items-center justify-center text-rose-600 hover:bg-rose-50 rounded-xl transition-all border border-transparent hover:border-rose-100" data-id="${producto.id}" title="Eliminar">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
    </button>
    </div>
</td>
</tr>
`

    }
    asignarEventosEliminar();
    asignarEventosActualizar();
}

document.getElementById('product-form').addEventListener('submit', agregarProducto);

async function agregarProducto(e) {
    e.preventDefault();  // Evita que recargue la página

    // Leer los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const stock = parseInt(document.getElementById('stock').value);
    const descripcion = document.getElementById('descripcion').value;


    // Validar que los campos importantes estén llenos
    if (!nombre || precio <= 0 || stock < 0) {
        alert("Revisa que nombre, precio (>0) y stock (>=0) estén bien");
        return;
    }

    // Armar el objeto que espera la API (precioUnidad, no precio)
    const nuevoProducto = {
        nombre: nombre,
        precioUnidad: precio,
        stock: stock,
        descripcion: descripcion,
    };

    
    const productoActualizado = {
    nombre,
    precioUnidad: precio,
    stock,
    descripcion
    }
... (107 líneas restantes)

main.js
8 KB
﻿
Ckz_2376
ckz_2376
import './styles/globals.css';


const endpoint = "http://localhost:3000/productos"
let productoActualizando = null

async function traerProductos() {
    try {
        const response = await fetch(endpoint)

        const datos = await response.json()
        imprimirProductos(datos)
        const totalPrecio = datos.reduce((acc,data)=>  acc+data.precioUnidad*data.stock, 0)
        const totalStock = datos.reduce((acc,data)=>  acc+data.stock, 0)
        const precio = document.querySelector("#stat-value")
        const stock = document.querySelector("#stat-low")
        precio.textContent = `COP ${totalPrecio}`
        stock.textContent = totalStock
        
    } catch (error) {
        alert("ha ocurrido un error intente más tarde")
        console.error(error)


    }
}

traerProductos()

function imprimirProductos(listaDeLosProductos) {
    const tablaProducto = document.getElementById("inventory-list")
    tablaProducto.innerHTML = ''
    for (const producto of listaDeLosProductos) {
        tablaProducto.innerHTML += `
<tr class="hover:bg-slate-50/30 transition-colors group">
<td class="px-8 py-6">
    <div class="flex flex-col">
    <span class="font-bold text-slate-900">${producto.nombre}</span>
    <span class="text-xs text-slate-400 mt-1 line-clamp-1 max-w-[300px]">${producto.descripcion}</span>
    </div>
</td>
<td class="px-8 py-6 text-center">
    <span class="px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-xl text-[10px] font-black uppercase tracking-tight border border-emerald-100">${producto.stock}</span>
</td>
<td class="px-8 py-6 text-center font-bold text-slate-900">COP ${producto.precioUnidad}</td>
<td class="px-8 py-6 text-right">
    <div class="flex justify-end gap-3">
    <button class="editar-btn w-10 h-10 flex items-center justify-center text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all border border-transparent hover:border-indigo-100" data-id="${producto.id}" data-nombre="${producto.nombre}" data-precio="${producto.precioUnidad}" data-stock="${producto.stock}" data-descripcion="${producto.descripcion}"title="Editar">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
    </button>
    <button class="eliminar-btn w-10 h-10 flex items-center justify-center text-rose-600 hover:bg-rose-50 rounded-xl transition-all border border-transparent hover:border-rose-100" data-id="${producto.id}" title="Eliminar">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
    </button>
    </div>
</td>
</tr>
`

    }
    asignarEventosEliminar();
    asignarEventosActualizar();
}

document.getElementById('product-form').addEventListener('submit', agregarProducto);

async function agregarProducto(e) {
    e.preventDefault();  // Evita que recargue la página

    // Leer los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const stock = parseInt(document.getElementById('stock').value);
    const descripcion = document.getElementById('descripcion').value;


    // Validar que los campos importantes estén llenos
    if (!nombre || precio <= 0 || stock < 0) {
        alert("Revisa que nombre, precio (>0) y stock (>=0) estén bien");
        return;
    }

    // Armar el objeto que espera la API (precioUnidad, no precio)
    const nuevoProducto = {
        nombre: nombre,
        precioUnidad: precio,
        stock: stock,
        descripcion: descripcion,
    };

    
    const productoActualizado = {
    nombre,
    precioUnidad: precio,
    stock,
    descripcion
    }

    let respuesta;
    let mensaje;

    if(productoActualizando !== null){

        respuesta = await fetch(
            `http://localhost:3000/productos/${productoActualizando}`,
            {
                method:"PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(productoActualizado)
            }
        )
        mensaje= "Producto actualizado"

    }else{

        respuesta = await fetch(
            "http://localhost:3000/productos",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(nuevoProducto)
            }
        )

        mensaje = "Producto Agregado"
    }
    
    if (respuesta.ok) {
        alert(mensaje);
        document.getElementById('product-form').reset(); // Limpiar formulario
        traerProductos(); // Recargar la tabla (ya tienes esta función)
    } else {
        alert("Error al guardar");
    }
}

async function eliminarProducto(id) {
    const confirmar = confirm("Estas seguro de eliminar el producto")
    if(confirmar){
        const respuesta = await fetch(`http://localhost:3000/productos/${id}`,{
            method: "DELETE"
        })

        if (respuesta.ok){
            alert("Producto Eliminado")
            traerProductos()
        }
        
    }
}

//Función que asigna el evento click a cada botón eliminar
function asignarEventosEliminar() {
    const botonesEliminar = document.querySelectorAll('.eliminar-btn');
    botonesEliminar.forEach(btn => {
        
        btn.addEventListener('click', (e)=> {
            const id = e.currentTarget.getAttribute("data-id")
            eliminarProducto(id)
        });
    });
}


async function actualizarProducto(id,nombre,precio,stock,descripcion){
    const nombreInput = document.getElementById('nombre');
    const precioInput = document.getElementById('precio');
    const stockInput= document.getElementById('stock');
    const descripcionInput = document.getElementById('descripcion');

    nombreInput.value = nombre
    precioInput.value = parseFloat(precio)
    stockInput.value = parseInt(stock)
    descripcionInput.value = descripcion


    productoActualizando = id

}

function asignarEventosActualizar(){
    const botonesActualizar = document.querySelectorAll('.editar-btn');
    botonesActualizar.forEach(btn => {
        
        btn.addEventListener('click', (e)=> {
            const id = e.currentTarget.getAttribute("data-id")
            const nombre = e.currentTarget.getAttribute("data-nombre")
            const precio = e.currentTarget.getAttribute("data-precio")
            const stock = e.currentTarget.getAttribute("data-stock")
            const descripcion = e.currentTarget.getAttribute("data-descripcion")
            actualizarProducto(id,nombre,precio,stock,descripcion)
            
        });
    });
}
main.js
8 KB