import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Agregar = ({setListadoState}) => {
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

    //Guardar Estado
    setPeliState(peli);

    //Actualizar el estado del listado principal
    setListadoState(elementos => {
      return [...elementos, peli];
    })
    
    //Guardar en el almacenamiento local
    GuardarEnStorage("pelis", peli);


  }

  return (
    <div className="add">
      <h3 className="title">{tituloComponente} </h3>
        
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
