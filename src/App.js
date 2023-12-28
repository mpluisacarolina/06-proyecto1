import  { Listado } from "./components/Listado";
import  { Buscador } from "./components/Buscador";
import  { Agregar } from "./components/Agregar";

function App() {
  return (
    <div className="layout">
        {/*Cabecera*/}
        <header className="header">
            <div className="logo"> 
                <div className="play"></div>
            </div>
            <h1>MisPelis</h1>
        </header>

        {/*Barra de Navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Películas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/*Contenido Principal*/}
        <section id="content" className="content">
            {/*Aquí va el listado de las películas*/}
            <Listado />
        </section>

        {/*Barra Lateral*/}
        <aside className="lateral">
            <Buscador />
            <Agregar />

        </aside>

        {/*Pie de Página*/}
        <footer className="footer">
            &copy: Máster en JavaScript ES12 <a href="https://victorroblesweb.es">victorroblesweb.es</a>
        </footer>
    </div>
  );
}

export default App;
