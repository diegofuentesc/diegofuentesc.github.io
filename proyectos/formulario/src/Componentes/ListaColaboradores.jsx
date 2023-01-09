import React from "react"


const ListaColaboradores = ({lstColaboradores, v}) => {


  return (
    <div>
        <h2>Lista de Colaboradores:</h2>
        <ul>
            {lstColaboradores.filter((e) => e.nombre.toLowerCase().includes(v.toLowerCase())).map( (c) => <li key={c.id}>{c.nombre} - {c.correo}</li>)}
        </ul>
    </div>
  )
}

export default ListaColaboradores