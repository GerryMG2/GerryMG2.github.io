function main() {
    var publicaciones = []

    var publicacion1 = {
        id: 1,
        titulo: "Los trenes",
        imagen: "https://images.clarin.com/2015/03/19/r1gNyAzA7g_1256x620.jpg",
        parrafor1: "Los primeros trenes para la formación de maquinistas han empezado a circular en la mañana de este lunes, a las 9.18 horas, en la variante de Vandellós del Corredor Mediterráneo, un tramo en doble vía que sustituye al actual de vía única. En total se van a formar 250 maquinistas que, según su experiencia, recibirán entre 35 y 56 horas de instrucción.",
        parrafo2: "En cuanto se haya concluido la formación de maquinistas, entrará en funcionamiento la variante de Vandellós, muy probablemente “antes de final de año”, según precisa el coordinador del Gobierno para el Corredor Mediterráneo, Josep Vicent Boira, y que ya avanzó el ministro de Fomento, José Luis Ábalos, Esta variante es “fundamental” para el Corredor Mediterráneo, no solo porque permitirá reducir el tiempo de viaje entre Valencia y Barcelona o Alicante y Barcelona, sino también porque da “fiabilidad” al trayecto del Corredor Mediterráneo.",
        fecha: new Date("2019/09/28"),
        autor: "Gerardo Castro",

    }


    var publicacion2 = {
        id: 2,
        titulo: "Las Vacas",
        imagen: "https://ep01.epimg.net/verne/imagenes/2019/08/14/articulo/1565772549_444060_1565773222_noticia_normal.jpg",
        parrafor1: "La vaca, en el caso de la hembra, o toro, en el caso del macho (Bos primigenius taurus), es un mamífero artiodáctilo de la familia de los bóvidos. El nombre científico es el que se le asignó al animal vacunonota 1​ doméstico europeo y norasiático, un conjunto de bóvidos domésticos descendientes de la subespecie de uro salvaje euroasiático conocida como Bos primigenius primigenius; mientras que se denomina Bos primigenius indicus a los cebúes y otras razas bovinas domésticas provenientes del mismo tronco, y descendientes de la subespecie de uro salvaje del Sudeste Asiático, denominado Bos primigenius namadicus. Se trata de un mamífero rumiante grande y de cuerpo robusto, con unos 120-150 cm de altura y 600-800 kg de peso medio.",
        parrafo2: "Domesticado desde hace unos diez mil años en el Oriente Medio, posteriormente su ganadería se desarrolló progresivamente a lo largo y ancho de todo el planeta. Sus primeras funciones fueron para el trabajo y la producción de carne y de leche, además de aprovecharse los cuernos, el cuero o los excrementos, como fertilizante o combustible; también se siguen empleando en algunos países en los espectáculos taurinos. La cría y utilización de estos animales por parte del hombre se conoce como ganadería bovina. En 2011, la cabaña mundial de ganado bovino superaba los mil trescientos millones de cabezas. Además de las propias razas o variedades, se emplean diferentes formas de clasificación individual, como pueden ser la disposición y forma de la cornamenta, la capa o color del pelaje, o sus capacidades productivas.",
        fecha: new Date("2019/09/28"),
        autor: "Gerardo Castro",

    }

    var publicacion3 = {
        id: 2,
        titulo: "El queso",
        imagen: "http://www.eltiempo.com/files/article_main/uploads/2017/09/29/59cee8d4dc8fd.jpeg",
        parrafor1: "El queso es un alimento sólido que se obtiene por maduración de la cuajada de la leche una vez eliminado el suero; sus diferentes variedades dependen del origen de la leche empleada, de los métodos de elaboración seguidos y del grado de madurez alcanzada. Puede surgir a partir de la leche cuajada de vaca, cabra, oveja, búfalo, camella u otros mamíferos rumiantes.",
        parrafo2: "Las bacterias beneficiosas se encargan de acidificar la leche, y tienen también un papel importante en la definición de la textura y el sabor de la mayoría de los quesos. Algunos también contienen mohos, tanto en la superficie exterior como en el interior.",
        fecha: new Date("2019/09/28"),
        autor: "Gerardo Castro",

    }

    var publicacion4 = {
        id: 2,
        titulo: "Luis Garrido Juaristi",
        imagen: "http://2.bp.blogspot.com/-4MemTJoUYdA/U5OJGKkjqQI/AAAAAAAAByo/rluZSQXPxYA/s1600/Concejo+Garrido+Juaristi.jpg",
        parrafor1: "Nació en Logroño el 16 de junio de 1875. Contrajo matrimonio con Ceferina Martínez Zaporta (hija del fundador del diario La Rioja D. Facundo Martínez Zaporta) con la que tuvo cuatro hijos. Dos de ellos fueron figuras destacadas de la vida madrileña Luis Garrido, Abogado del Estado y jefe de la Asesoría Jurídica del Ministerio de Industria; y Moisés Garrido, destacado letrado, componente de la Junta de Gobierno del Ilustre Colegio de Abogados de Madrid y fundador de la Institución Protectora de Huérfanos de la Abogacía (junto a Ángel Ossorio y Gallardo).",
        parrafo2: "Estudió Magisterio y, más tarde, la carrera de Derecho, que terminó en junio de 1889. Fue electo concejal del Ayuntamiento de Madrid por el distrito de Buenavista en las elecciones municipales de noviembre de 1915. En 1919, fue nombrado alcalde de la villa de Madrid con treinta y dos votos a favor y doce votos en blanco del pleno. Desempeñó el cargo entre el 27 de noviembre de 1918 y el 1 de abril de 1920.1​ Tras su cese participó como columnista en el diario madrileño El Liberal.",
        fecha: new Date("2019/09/28"),
        autor: "Gerardo Castro",

    }

    var publicacion5 = {
        id: 2,
        titulo: "Flatey",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Flatey_thorp.jpg",
        parrafor1: "Flatey1​ es la isla más grande de un archipiélago de unas cuarenta islas grandes e islotes situados en Breiðafjörður en la parte noroeste de Islandia.2​ Flatey y sus islas circundantes fueron creadas según se cree a partir de un gran glaciar durante la era de hielo. En términos de tamaño, Flatey es de unos 2 kilómetros de largo y de alrededor de 1 kilómetro de ancho, de los cuales la mayoría son tierra plana (de ahí su nombre, que significa isla plana en islandés), con apenas algunas colinas.",
        parrafo2: "Tiene una vivienda de temporada, pero la mayoría de las casas no están ocupadas, excepto durante el verano. En invierno, la población total de la isla es de cinco personas. A pesar de esto, Flatey solía ser uno de los principales centros culturales de Islandia, con su monasterio que ya no existente (fundado en 1172) en su punto más alto. El nombre del Flateyjarbók', el mayor y uno de los más bellos manuscritos medievales, significa justamente 'el libro de Flatey'. A mediados del siglo XIX, la isla seguía siendo un centro cultural y artístico.",
        fecha: new Date("2019/09/28"),
        autor: "Gerardo Castro",

    }


    publicaciones.push(publicacion1);
    publicaciones.push(publicacion2);
    publicaciones.push(publicacion3);
    publicaciones.push(publicacion4);
    publicaciones.push(publicacion5);


    var principal = document.getElementById("principal");
    var aside = document.getElementById("publicaciones");
    var home = document.getElementById("home");
    var contact = document.getElementById("contacto");
    var about = document.getElementById("acerca");


    contact.addEventListener("click", function() {
        principal.innerHTML = "";
        let contenedor = document.createElement("div");
        contenedor.className = "perfil"
        let imagenAutor = document.createElement("img");
        imagenAutor.src = "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg";
        let nombre = document.createElement("h2");
        nombre.innerHTML = "Gerardo Andres Castro Lemus";

        contenedor.appendChild(imagenAutor);
        contenedor.appendChild(nombre);
        principal.appendChild(contenedor);
    })

    about.addEventListener("click", function() {
        principal.innerHTML = "";
        let contenedor = document.createElement("div");
        let titulo = document.createElement("h2");
        titulo.innerHTML = "Acerca de"
        titulo.style.fontWeight = "Bold";
        let contenido = document.createElement("p");
        contenido.innerHTML = "El siguiente blog forma parte de una tarea universitaria de la materia programación web, y solo esta hecho con un fin didáctio";

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);

        principal.appendChild(contenedor);

    })


    function create_aside(aside) {
        publicaciones.forEach(element => {
            let lista_element = document.createElement("li");
            let acceso = document.createElement("input");
            acceso.setAttribute("type", "button");
            acceso.value = element.titulo;
            acceso.addEventListener("click", function() {
                console.log(element.titulo)
                publicaciones_show(element);
            })
            lista_element.appendChild(acceso);
            aside.appendChild(lista_element);

        });
    }

    home.addEventListener("click", function() {
        principal.innerHTML = "";
        publicaciones.forEach(element => {
            let tarjeta = document.createElement("div");
            tarjeta.className = "publi";
            let imagen = document.createElement("img");
            imagen.src = element.imagen;
            let contenido = document.createElement("div");
            contenido.className = "contenido"
            let titulo = document.createElement("h2");
            titulo.innerHTML = element.titulo;
            let parrafor = document.createElement("p");
            parrafor.innerHTML = element.parrafor1;
            let btn_more = document.createElement("input");
            btn_more.setAttribute("type", "button");
            btn_more.value = "Seguir leyendo...";
            btn_more.addEventListener("click", function() {
                publicaciones_show(element);
            })

            contenido.appendChild(titulo);
            contenido.appendChild(parrafor);

            tarjeta.appendChild(imagen);
            tarjeta.appendChild(contenido);
            tarjeta.appendChild(btn_more);
            principal.appendChild(tarjeta);
        });

    });



    function publicaciones_show(publi) {
        principal.innerHTML = "";
        let tarjeta = document.createElement("div");
        tarjeta.className = "publi";
        let imagen = document.createElement("img");
        imagen.src = publi.imagen;
        let contenido = document.createElement("div");
        contenido.className = "contenido"
        let titulo = document.createElement("h2");
        titulo.innerHTML = publi.titulo;
        let parrafor = document.createElement("p");
        parrafor.innerHTML = publi.parrafor1;
        let parrafor2 = document.createElement("p");
        parrafor2.innerHTML = publi.parrafo2;

        contenido.appendChild(titulo);
        contenido.appendChild(parrafor);
        contenido.appendChild(document.createElement("br"))
        contenido.appendChild(parrafor2);
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(contenido);
        principal.appendChild(tarjeta)
    }


    create_aside(aside);
    home.click();






}