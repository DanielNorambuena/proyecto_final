const calculaTotalPedido = (lstProductos) => {
    let total = 0;
    lstProductos.map((p) => {
        total = total + (p.precio * p.cant);
    })
    return total;
}
export { calculaTotalPedido }
