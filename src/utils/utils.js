const calculaTotalPedido = (cart) =>{
    let total = 0;
    cart.map ((p) =>{
        total = total + (p.PRECIO * p.cant)
    })

    return total;
}


export {calculaTotalPedido} 