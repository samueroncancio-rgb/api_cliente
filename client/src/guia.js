let productos=[]



const mostrarProducto=(lista)=>{
  const table=document.getElementById("tablaProductos")
  table.innerHTML=""
  lista.forEach((elemento,posicion)=>{
    table.innerHTML += `
     <tr>
            <td>${posicion+1}</td>
            <td>${elemento.nombre}</td>
            <td>${elemento.categoria}</td>
            <td>${elemento.marca}</td>
            <td>${elemento.precio}</td>
            <td>${elemento.cantidad}</td>
            <td>
            <button class="btn btn-warning btn-sm">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${posicion})">Eliminar</button>
            </td>
          </tr>
    
    `
    
  })
}
const eliminarProducto=(posicion)=>{
  if(confirm("estas seguro que quieres eliminar el producto?")){
    productos.splice(posicion,1)
    mostrarProducto(productos)
  }

}
const inputFiltrar=document.getElementById("buscarNombre")


const filtrarNombre=()=>{
  const textValor=inputFiltrar.value.toLowerCase()
  const nombreFiltrados=productos.filter(elemento=> elemento.nombre.toLowerCase().includes(textValor))
  if (textValor===""){
    mostrarProducto(productos)
  }else{
    mostrarProducto(nombreFiltrados)
  }

}


const agregarProducto=()=>{
  const articulo={
    nombre:document.getElementById("nombre").value,
    categoria:document.getElementById("categoria").value,
    marca:document.getElementById("marca").value,
    precio:parseFloat(document.getElementById("precio").value),
    cantidad:parseInt(document.getElementById("cantidad").value),
  }
  productos.push(articulo)
  mostrarProducto(productos)
  

}
const formulario= document.getElementById("productForm")

formulario.addEventListener("submit",(e)=>{
  e.preventDefault();
  agregarProducto()
  formulario.reset()
})

inputFiltrar.addEventListener("input",filtrarNombre)