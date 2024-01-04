export const GuardarEnStorage = (clave, elemento) => {
    //Conseguir elementos que ya tenemos en el localstorage
    let elementos = JSON.parse(localStorage.getItem (clave));

    //Comprobar si es un array
    if(Array.isArray(elementos)){
      //Añadir dentro del array un elemento nuevo
      elementos.push(elemento);
    } else {
      //Crear un array con el nuevo elemento
      elementos = [elemento];
    }  
    //Guardar en el LocalStorage
    localStorage.setItem(clave, JSON.stringify(elementos));

    //Devolver el objeto guardado
    return elemento;
  }  

