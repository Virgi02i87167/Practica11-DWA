let productos = [
    {nombre: "laptop", precio: 800, categoria: "electronica"},
    {nombre: "bicicleta", precio: 300, categoria: "deportes"},
    {nombre: "telefono", precio: 500, categoria: "electronica"},
    {nombre: "zapatillas", precio: 100, categoria: "deportes"}

];

function filtrarProductosPorCategoria(categoria, ...listaProductos){
    let filtrados = listaProductos.filter(producto => producto.categoria === categoria);
    let precios = filtrados.map(producto => producto.precio);
    
    return {
        categoria,
        productoFiltrados: filtrados,
        precios: [...precios]
    };

}

let resultado = filtrarProductosPorCategoria("electronica", ...productos)

console.log(resultado);