const botonCerrar = document.querySelector( "[data-close]" );
const botonAbrir = document.querySelector( "[data-open]" )

function cerrarMenu() {
    const estadoAside = document.querySelector( "[data-aside]" );

    estadoAside.classList.toggle( "open-aside" );
    estadoAside.classList.toggle( "close-aside" );
}

botonCerrar.addEventListener( "click" , cerrarMenu );
botonAbrir.addEventListener( "click" , cerrarMenu )