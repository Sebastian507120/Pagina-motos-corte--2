// 📌 Función para abrir y cerrar el menú hamburguesa
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el input del menú hamburguesa y la navegación
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector(".navegacion");

    // Agrega un evento para detectar cambios en el input
    menuToggle.addEventListener("change", function () {
        if (this.checked) {
            nav.classList.add("active"); // Abre el menú
        } else {
            nav.classList.remove("active"); // Cierra el menú
        }
    });

    // 📌 Cerrar el menú al hacer clic en un enlace de la sublista
    const subListItems = document.querySelectorAll(".hijos a"); // Selecciona todos los enlaces de la sublista

    subListItems.forEach(function (item) {
        item.addEventListener("click", function () {
            // Cierra el menú hamburguesa
            menuToggle.checked = false; // Desmarca el checkbox
            nav.classList.remove("active"); // Oculta la sublista
        });
    });
});

/* 📌 Funcionalidad del carrusel */
let nextDom = document.getElementById('next'); // Botón "siguiente"
let prevDom = document.getElementById('prev'); // Botón "anterior"

let carouselDom = document.querySelector('.carousel'); // Contenedor del carrusel
let SliderDom = carouselDom.querySelector('.carousel .list'); // Lista de elementos del carrusel
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail'); // Contenedor de miniaturas
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item'); // Miniaturas
let timeDom = document.querySelector('.carousel .time'); // Temporizador

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]); // Mueve la primera miniatura al final
let timeRunning = 1000; // Tiempo de transición
let timeAutoNext = 10000; // Tiempo para avanzar automáticamente

// Evento para avanzar al hacer clic en "siguiente"
nextDom.onclick = function () {
    showSlider('next');
};

// Evento para retroceder al hacer clic en "anterior"
prevDom.onclick = function () {
    showSlider('prev');
};

let runTimeOut; // Variable para el temporizador de transición
let runNextAuto = setTimeout(() => {
    nextDom.click(); // Avanza automáticamente después de un tiempo
}, timeAutoNext);

// 📌 Función para alternar la animación del slider
const slider = document.getElementById("slider");
function toggleAnimation() {
    const currentState = window.getComputedStyle(slider).animationPlayState;
    if (currentState === "running") {
        slider.style.animationPlayState = "paused";  // Detener la animación
    } else {
        slider.style.animationPlayState = "running";  // Reanudar la animación
    }
}
// Agrega un evento para pausar/reanudar la animación al hacer clic
slider.addEventListener("click", toggleAnimation);

// 📌 Función para cambiar el slider
function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item'); // Elementos del carrusel
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item'); // Miniaturas

    if (type === 'next') {
        // Mueve el primer elemento al final
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next'); // Aplica la animación "next"
    } else {
        // Mueve el último elemento al principio
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev'); // Aplica la animación "prev"
    }

    // Limpia el temporizador y reinicia la animación
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    // Reinicia el temporizador para avanzar automáticamente
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);

    // Actualiza la descripción y características del carrusel
    actualizarDescripcion();
}

// 📌 Librería de motos para la comparativa
const motos = {
    Honda: {
        "CBR600RR": { Cilindrada: "600cc", Potencia: "120cv", Tipo: "Deportiva", uso: "Diseñada para velocidad", Peso: "186kg", Imagen: "img/motos/CBR600RR.png" },
        "CRF450R": { Cilindrada: "450cc", Potencia: "52cv", Tipo: "Motocroos", uso: "Diseñada para velocidad", Peso: "190KG", Imagen: "img/motos/CRF450R.png" },
        "PCX 125": { Cilindrada: "124cc", Potencia: "11 cv", Tipo: "Scooter", uso: "Diario", peso: "133kg", Imagen: "img/motos/PCX125.PNG" },
        "CB1000R": { Cilindrada: "998cc", potencia: "143cv", Tipo: "Naked", uso: "Diseñada para velocidad", peso: "212kg", Imagen: "img/motos/CB1000R.png" },
        "CRF1100L": { Cilindrada: "1084cc", potencia: "100cv", Tipo: "Enduro", uso: "Diseñada para velocidad", Peso: "231kg", Imagen: "img/motos/CRF1100L.png" }
    },
    Yamaha: {
        "YZF-R1": { Cilindrada: "998cc", Potencia: "200cv", Tipo: "Deportiva", Uso: "Diseñada para velocidad", peso: "200kg", Imagen: "img/motos/R1.png" },
        "YZF-R6": { Cilindrada: "599cc", Potencia: "129CV", Tipo: "Deportiva", uso: "Diseñada para la velocidad", peso: "189kg", Imagen: "img/motos/R6.png" },
        "MT-10SP": { Cilindrada: "998cc", Potencia: "165CV", Tipo: "naked", Uso: "Diseñada para velocidad", peso: "212kg", Imagen: "img/motos/MT10SP.png" },
        "N-MAX": { Cilindrada: "150CC", Potencia: "12CV", Tipo: "Scooter", Uso: "Diario", peso: "127kg", Imagen: "img/motos/N-MAX.png" },
        "X-CITY250": { Cilindrada: "250cc", Potencia: "21CV", Tipo: "Scooter", Uso: "Diario", peso: "165kg", Imagen: "img/motos/X-City_250.png" },
    },
    Kawasaki: {
        "ZZR1400": { Cilindrada: "1441cc", Potencia: "200cv", Tipo: "Deportiva", Uso: "Diseñada para velocidad", peso: "268kg", Imagen: "img/motos/ZZR1400.png" },
        "ER6N": { Cilindrada: "649cc", Potencia: "72cv", Tipo: "Deportiva", Uso: "Diseñada para velocidad", peso: "204kg", Imagen: "img/motos/ER6N.png" },
        "H2R": { Cilindrada: "998cc", Potencia: "310cv", Tipo: "Deportiva", Uso: "Diseñada para velocidad", peso: "216kg", Imagen: "img/motos/ZH2.png" },
        "KLX125": { Cilindrada: "125cc", Potencia: "10cv", Tipo: "Enduro", Uso: "Campo", peso: "113kg", Imagen: "img/motos/klx125.png" },
        "Z650": { Cilindrada: "649cc", Potencia: "68cv", Tipo: "naked", Uso: "Diseñada para velocidad", peso: "187kg", Imagen: "img/motos/Z650.png" },
    },
    Suzuki: {
        "GIXXER150": { Cilindrada: "155cc", Potencia: "14cv", Tipo: "naked", Uso: "Diario", peso: "140kg", Imagen: "img/motos/Gixxer150.png" },
        "VStrom650": { Cilindrada: "645cc", Potencia: "67cv", Tipo: "Enduro", Uso: "Diseñada para velocidad", peso: "214kg", Imagen: "img/motos/V-STROM650.png" },
        "GSXR1000": { Cilindrada: "999cc", Potencia: "202cv", Tipo: "Deportiva", Uso: "Diseñada para velocidad", peso: "205kg", Imagen: "img/motos/GSXR1000.png" },
        "Burgman125": { Cilindrada: "124cc", Potencia: "12cv", Tipo: "Scooter", Uso: "Diario", peso: "159kg", Imagen: "img/motos/Burgman125.png" },
        "Burgman400": { Cilindrada: "400cc", Potencia: "29cv", Tipo: "Scooter", Uso: "Diario", peso: "218kg", Imagen: "img/motos/burgman400.png" },
    },
    Tvs: {
        "Apache RR 310": { Cilindrada: "312cc", Potencia: "34cv", Tipo: "Deportiva", Uso: "Diseñada para velocidad", Peso: "174kg", Imagen: "img/motos/apache310.png" },
        "Apache RTR 200 4V": { Cilindrada: "197.75cc", Potencia: "20.5cv", Tipo: "Deportiva", Uso: "Diseñada para velocidad", Peso: "148kg", Imagen: "img/motos/apache200.png" },
        "TVS Raider 125": { Cilindrada: "124.8cc", Potencia: "11cv", Tipo: "Naked", Uso: "Urbana", Peso: "123kg", Imagen: "img/motos/raider125.png" },
        "TVS Star City Plus": { Cilindrada: "109.7cc", Potencia: "8.4cv", Tipo: "naked", Uso: "Uso diario", Peso: "115kg", Imagen: "img/motos/starcity.png" },
        "TVS XL100": { Cilindrada: "99.7cc", Potencia: "4.3cv", Tipo: "naked", Uso: "Trabajo pesado", Peso: "89kg", Imagen: "img/motos/xl100.png" },
    },
    BMW: {
        "R18Classic": { Cilindrada: "1802cc", Potencia: "91cv", Tipo: "Custom", Uso: "Lampariar", peso: "345kg", Imagen: "img/motos/BMW_R18.png" },
        "C400GT": { Cilindrada: "350cc", Potencia: "34cv", Tipo: "Scooter", Uso: "Diario", peso: "204kg", Imagen: "img/motos/C400.PNG" },
        "S1000XR": { Cilindrada: "999cc", Potencia: "165cv", Tipo: "Touring", Uso: "Viaje", peso: "226kg", Imagen: "img/motos/s1000r.png" },
        "F900GSAdventure": { Cilindrada: "895cc", Potencia: "105cv", Tipo: "Enduro", Uso: "Viaje", peso: "246kg", Imagen: "img/motos/F900GS.png" },
        "K1600B": { Cilindrada: "1649cc", Potencia: "160cv", Tipo: "Touring", Uso: "Viaje", peso: "334kg", Imagen: "img/motos/K1600B.png    " },
    },
};

// 📌 Función para configurar los selectores de motos
function setupMotoSelector(marcaId, modeloContainerId, modeloId, resultadoId, caracteristicasId, modeloImagenId, modeloTextoId) {
    const marcaSelect = document.getElementById(marcaId); // Selector de marca
    const modeloContainer = document.getElementById(modeloContainerId); // Contenedor de modelos
    const modeloSelect = document.getElementById(modeloId); // Selector de modelo
    const resultado = document.getElementById(resultadoId); // Contenedor de resultados
    const caracteristicasTabla = document.getElementById(caracteristicasId); // Tabla de características
    const modeloImagen = document.getElementById(modeloImagenId); // Imagen del modelo
    const modeloTexto = document.getElementById(modeloTextoId); // Texto del modelo

    // Evento para cargar los modelos cuando se selecciona una marca
    marcaSelect.addEventListener("change", function () {
        const marcaSeleccionada = this.value;
        modeloSelect.innerHTML = "";

        if (marcaSeleccionada) {
            modeloContainer.classList.remove("hidden"); // Muestra el selector de modelos
            const opcionDefault = document.createElement("option");
            opcionDefault.value = "";
            opcionDefault.textContent = "Seleccione un modelo";
            modeloSelect.appendChild(opcionDefault);

            // Carga los modelos de la marca seleccionada
            Object.keys(motos[marcaSeleccionada]).forEach(modelo => {
                const opcionModelo = document.createElement("option");
                opcionModelo.value = modelo;
                opcionModelo.textContent = modelo;
                modeloSelect.appendChild(opcionModelo);
            });
        } else {
            modeloContainer.classList.add("hidden"); // Oculta el selector de modelos
            resultado.classList.add("hidden"); // Oculta los resultados
        }
    });

    // Evento para mostrar las características del modelo seleccionado
    modeloSelect.addEventListener("change", function () {
        const marcaSeleccionada = marcaSelect.value;
        const modeloSeleccionado = this.value;

        if (modeloSeleccionado) {
            caracteristicasTabla.innerHTML = ""; // Limpia la tabla
            // Carga las características del modelo
            Object.entries(motos[marcaSeleccionada][modeloSeleccionado]).forEach(([caracteristica, valor]) => {
                if (caracteristica !== "Imagen") {
                    const fila = document.createElement("tr");
                    fila.innerHTML = `<th>${caracteristica}</th><td>${valor}</td>`;
                    caracteristicasTabla.appendChild(fila);
                }
            });
            modeloImagen.src = motos[marcaSeleccionada][modeloSeleccionado].Imagen; // Muestra la imagen
            modeloTexto.textContent = modeloSeleccionado; // Muestra el nombre del modelo
            resultado.classList.remove("hidden"); // Muestra los resultados
        } else {
            resultado.classList.add("hidden"); // Oculta los resultados
        }
    });
}

// Configura los selectores de motos
setupMotoSelector("marca-moto1", "modelo-container-moto1", "modelo-moto1", "resultado-moto1", "caracteristicas-moto1", "modelo-imagen-moto1", "modelo-texto-moto1");
setupMotoSelector("marca-moto2", "modelo-container-moto2", "modelo-moto2", "resultado-moto2", "caracteristicas-moto2", "modelo-imagen-moto2", "modelo-texto-moto2");

// 📌 Ejecutar la función de actualización y agregar eventos a los iconos cuando la página carga
window.onload = function () {
    actualizarDescripcion(); // Actualiza la descripción del carrusel
    agregarEventosIconos(); // Asegura que los iconos tengan eventos de clic
};

function validarNombre() {
    const nombre = document.getElementById('nombre').value;
    const nombreError = document.getElementById('nombreError');
    const regex = /^[A-Za-z\s]+$/;

    if (regex.test(nombre)) {
        nombreError.style.display = 'none';
    } else {
        nombreError.style.display = 'block';
    }
}

function validarTelefono(idInput, idError) {
    const telefono = document.getElementById(idInput).value;
    const telefonoError = document.getElementById(idError);
    const regex = /^\d{10}$/;

    if (regex.test(telefono)) {
        telefonoError.style.display = 'none';
    } else {
        telefonoError.style.display = 'block';
    }
}

// Opcional: Validar el formulario antes de enviarlo
document.querySelector('form').addEventListener('submit', function (event) {
    validarNombre();
    validarTelefono('telefono', 'telefonoError');
    validarTelefono('emergencia', 'emergenciaError');

    const errores = document.querySelectorAll('.error-message[style="display: block;"]');
    if (errores.length > 0) {
        event.preventDefault(); // Evita que el formulario se envíe si hay errores
        alert('Por favor, corrige los errores antes de enviar el formulario.');
    }
});


//DESDE AQUI HACIA ABAJO

// Control del modal
document.getElementById('inscribirse-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('formulario-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Evita el scroll del body
});

document.querySelector('.cerrar-modal').addEventListener('click', function() {
    document.getElementById('formulario-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Cerrar al hacer clic fuera del contenido
document.getElementById('formulario-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        document.getElementById('formulario-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});