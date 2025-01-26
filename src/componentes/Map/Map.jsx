import React from 'react'

const Map = () => {

    const productos = [
        {id:1, nombre:"Pc Gamer", precio: 1000},
        {id:2, nombre: "Teclado Gamer", precio: 1000},
        {id:3, nombre: "Mouse Gamer", precio: 500}
    ]


  return (

    <div>
        <h2>Porductos Gamer:</h2>
        <ul>
            {productos.map((producto)=>(
                <li key={producto.id}>
                    <span>{producto.nombre}</span>
                    <span>{producto.precio}</span>
                </li>
            ))}
        </ul>
    </div>

  )
}

export default Map