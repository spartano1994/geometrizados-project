const btnIndex = document.querySelector( "[data-btnindex]" );

function insertarVideo(){
    const cartel = document.querySelector( "[data-cartel]" );

    cartel.style.backgroundImage = "none";
    cartel.innerHTML = "";
    cartel.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/LEwXRUB6LP4?si=p7UXIc-fqccYaewF" title="YouTube video player" frameborder="0" allow="accelerometer"; autoplay="1"; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' ;

    
}

btnIndex.addEventListener( "click" , insertarVideo );