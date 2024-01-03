import React from 'react'

export const Agregar = () => {
  const titulo = "Añadir Película";
  return (
    <div className="add">
      <h3 className="title">Añadir Película</h3>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Descripción"></textarea>
        <input type="submit" value="Guardar" />
      </form>
    </div>
  )
}
