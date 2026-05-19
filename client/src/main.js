import './styles/globals.css';

const endpoint = "http://localhost:3000/productos"

async function traerProductos() {
    try {
        const response = await fetch(endpoint)

        const datos = await response.json()
        imprimirProductos(datos)
        const totalPrecio= datos.reduce((acc,data)=> acc+data.precioUnidad*data.stock,0)
        const precio= document.getElementById("stat-value")
        precio.textContent=totalPrecio

        const stockTotal=datos.reduce((acc,data)=> acc+data.stock,0)
        const stockGlobal=document.getElementById('stock-cantidad')
        stockGlobal.textContent=stockTotal
    } catch (error) {
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

    <button class="w-10 h-10 flex items-center justify-center text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all border border-transparent hover:border-indigo-100" id="editar-btn" data-id="${producto.id}" data-nombre="${producto.nombre}" data-stock="${producto.stock}" data-precioUnidad="${producto.precioUnidad}" data-descripcion="${producto.descripcion}" title="Editar">

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

async function agregarProducto(evento) {
    evento.preventDefault();  // Evita que recargue la página

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
        descripcion: descripcion
    };

    // Enviar a la API con POST
    const respuesta = await fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoProducto)
    });

    if (respuesta.ok) {
        alert("Producto agregado");
        document.getElementById('product-form').reset(); // Limpiar formulario
        traerProductos(); // Recargar la tabla (ya tienes esta función)
    } else {
        alert("Error al guardar");
    }
}

// Función que elimina el producto por su id
async function eliminarProducto(id) {
    const confirmar =confirm("seguro que desea eliminar el producto")
    if(confirmar){
        const respuesta=await fetch(`http://localhost:3000/productos/${id}`,{
            method:"DELETE"
        })
        if(respuesta.ok){
        alert("Producto eliminado")
        traerProductos()
    }


    }

    
    
}


// Función que asigna el evento click a cada botón eliminar
function asignarEventosEliminar() {
   const botonesEliminar = document.querySelectorAll('.eliminar-btn');
    botonesEliminar.forEach(btn => {
        
        btn.addEventListener('click', (e)=>{
            const id = e.currentTarget.getAttribute("data-id")
            eliminarProducto(id)

        });
   });
}


async function actualizarProducto(id,nombre,stock,precioUnidad,descripcion){
    const nombreInput = document.getElementById('nombre');
    const precioInput = (document.getElementById('precio'));
    const stockInput = (document.getElementById('stock'));
    const descripcionInput = document.getElementById('descripcion');
    
    nombreInput.value = nombre;
    precioInput.value= parseFloat(precioUnidad);
    stockInput.value= parseInt(stock);
    descripcionInput.value=descripcion;
    
    const productosActualizados=[
        {
            nombre:nombreInput.value,
            precio:precioInput.value,
            stock:stockInput.value,
            descripcion:descripcionInput.value

        }
    ]
    const respuesta = await fetch (`http://localhost:3000/productos/${id}`,{
            method:"PUT"
        }) 




}
function asignarEventosActualizar() {
   const botonesActualizar = document.querySelectorAll("#editar-btn");
    botonesActualizar.forEach(btn => {
        
        btn.addEventListener('click', (e)=>{
            const id = e.currentTarget.getAttribute("data-id")
           
            const nombre = e.currentTarget.getAttribute("data-nombre")
            const stock = e.currentTarget.getAttribute("data-stock")
            const precioUnidad = e.currentTarget.getAttribute("data-precioUnidad")
            const descripcion = e.currentTarget.getAttribute("data-descripcion")

            actualizarProducto(id,nombre,stock,precioUnidad,descripcion)
           
           

        });
   });
}




