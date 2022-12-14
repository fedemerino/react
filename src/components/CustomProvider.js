import React, { createContext, useState } from 'react'

export const contexto = createContext()
const { Provider } = contexto


const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [precio, setPrecio] = useState(carrito.reduce((total, prod)=>{return total + prod.subtotal},0))

    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
    }

    const handleClick = () =>{
        setTotal(total + 1)
    }

    const handlePrecio = () => {
        setPrecio(carrito.reduce((total, prod)=>{return total + prod.subtotal},0))
    }
    
    const valorDelContexto = {
        productos: carrito,
        cantidad: total,
        setCarrito: setCarrito,
        setTotal: handleClick,
        vaciarCarrito: vaciarCarrito,
        setPrecio : handlePrecio,
        precio : precio
   
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider