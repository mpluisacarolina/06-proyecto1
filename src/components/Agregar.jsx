import React, { useState } from 'react'

export const Agregar = () => {
  const tituloComponente = "Añadir Película";
  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: ""
  });

  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = e => {
    e.preventDefault(); //Evita que se recargue la pantalla

    //Conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    // Crear Objeto de la película a guardar
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    };

    setPeliState(peli);
    console.log(peliState);
    
  }

  return (
    <div className="add">
      <h3 className="title"> {tituloComponente} </h3>
        
        <strong>
          {( titulo && descripcion ) && " Has creado la película " + titulo}
        </strong>

      <form onSubmit={conseguirDatosForm}>
        <input type="text"
          id="titulo"
          name="titulo"
          placeholder="Título" />

        <textarea 
          id="descripcion"
          name="descripcion"
          placeholder="Descripción"></textarea>

        <input type="submit"
          id="guardar"
          value="Guardar" />
      </form>
    </div>
  )
}
