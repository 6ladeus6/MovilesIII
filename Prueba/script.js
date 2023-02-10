var nommbreImueble = [{

    idImueble: 1,
    direccion: "Calle 30",
    telefono: "123456789",
    precio:200,
    estado: "si"

},
{

    idImueble: 2,
    direccion: "Calle 40",
    telefono: "123456789",
    precio: 300,
    estado: "si"

},
{

    idImueble: 3,
    direccion: "Calle 100",
    telefono: "123456789",
    precio: 250,
    estado: "si"

}];


function buscarId (nommbreImueble){
    let form1 = document.getElementById("form1");
    if(nommbreImueble.idImueble == 1){
        let inputIdInmueble = Document.createElement()
    }
}


function retirar() {
    retiro = document.getElementByName("retirar").value;
    if (retiro > saldo) {
      alert("Su fondo disposible no es suficiente");
    } else {
      saldo = saldo - retiro;
    }
  }

  function verificar() {
    document.getElementByName("verificar").value = saldo;
  }




  function pintarInmuebles(nommbreImueble){
    let fila = document.getElementById("fila");
    nommbreImueble.forEach(function(inmueble){
        //TRAVERSING (CREAR ETIQUETAS DE HTML DESDE JS)
       //1. CREAMOS UNA COLUMNA PARA CADA PELICULA
       let columna = document.createElement("div");
       columna.classList.add("col");
       //2.CREAMOS UNA TARJETA PARA CADA PELICULA
       let card = document.createElement("div");
       card.classList.add("card", "h-100");
      //3. CREAMOS UNA FOTO PARA CADA PELICULA
      //let poster = document.createElement("img");
      //poster.classList.add("card-img-top");
      //poster.src = pelicula.poster;
      //4. AGREGAMOS LOS NOMBRES A LAS PELICULAS
      let idImueble = document.createElement("h3");
      idImueble.classList.add("card-title","text-center");
      idImueble.textContent =  "Código del Inmueble: " + inmueble.idImueble;
      //5. AGREGAMOS EL GENERO DE LAS PELICULAS
      let direccion = document.createElement("h4");
      direccion.classList.add("card-text");
      direccion.textContent = "Dirección: " + inmueble.direccion;
    //6. AGREGAMOS EL IDIOMA
        let telefono=document.createElement("h6");
        telefono.classList.add("fw-bold");
        telefono.textContent= "Telefono: " + inmueble.telefono;
    //7. AGREGAMOS LA SINOPSIS
        let precio=document.createElement("p");
        precio.classList.add("card-text");
        precio.textContent= "Valor: " + inmueble.precio;
     //8. AGREGAMOS LA CLASIFICACIÓIN
        let estado = document.createElement("h7");
        estado.classList.add("fw-bold");
         cestadotextContent = "Disponible: " + inmueble.estado;
   
        //PADRES E HIJOS

        if (inmueble.estado == "si" && inmueble.precio >= 200 && inmueble.precio <= 300){

            card.appendChild(idImueble);
            card.appendChild(direccion);
            card.appendChild(telefono);
            card.appendChild(estado);
            card.appendChild(precio); 
           columna.appendChild(card);
           fila.appendChild(columna);
        } else{
            alert("No hay inmuebles para mostrar");
    
        }
    });

}

