import React from 'react';

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
    const titulo_componente = "Editar Película";

    const guardarEdicion = (e, id) => {
      e.preventDefault();

      //Conseguir el target del evento (target=todas las propiedades de ese evento)
      let target = e.target;
      
      // Buscar el índice del objeto de la película a actualizar
      const pelis_almacenadas = conseguirPeliculas()
      const indice = pelis_almacenadas.findIndex(peli => peli.id === id);
      
      //Crear objeto con el id, título y descripción
      let peli_actualizada = {
        id,
        titulo: target.titulo.value,
        descripcion: target.descripcion.value,
      };
      
      //Actualizar el elemento con ese índice
      pelis_almacenadas[indice] = peli_actualizada;

      //Guardar el nuevo array de objetos en el localstorage
      localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

      // Actualizar estados
      setListadoState(pelis_almacenadas); 
      setEditar(0); //Cierra el formulario en pantalla
    }

  return (
    <div className="edit_form">
      <hr />
        <h3 className="title"> {titulo_componente} </h3>
        <form onSubmit = { e => guardarEdicion(e, peli.id)}>
            <input type="text"
                    name="titulo"
                    className="titulo_editado"
                    defaultValue={peli.titulo} />

            <textarea
                    name="descripcion"
                    defaultValue={peli.descripcion}
                    className='descripcion_editada' />

            <button className="editar">Actualizar</button>
        </form>
    </div>
  )
}
