document.addEventListener("DOMContentLoaded", function() {
    // Crear el contenedor para los botones si no existe
let optionsContainer = document.createElement("div");
optionsContainer.id = "options-container";
document.body.appendChild(optionsContainer);

// Crear los botones dentro del contenedor
let boton1 = document.createElement("button");
boton1.id = "boton1";
boton1.innerHTML = "Opción 1";
optionsContainer.appendChild(boton1);

let boton2 = document.createElement("button");
boton2.id = "boton2";
boton2.innerHTML = "Opción 2";
optionsContainer.appendChild(boton2);

    // Crear el botón de música
let botonMusica = document.createElement("button");
botonMusica.id = "playMusic";
botonMusica.innerHTML = "🎵";
document.body.appendChild(botonMusica);

// Crear el elemento de audio
let musica = new Audio("musica.mp3");
musica.loop = true; // Para que la música se repita

// Variable para saber si la música está sonando
let musicaEncendida = false;

// Función para alternar la música
botonMusica.addEventListener("click", function() {
    if (musicaEncendida) {
        musica.pause();
    } else {
        musica.play();
    }
    musicaEncendida = !musicaEncendida; // Alternar estado
});


// Crear el título y agregarlo al body
let titulo = document.createElement("div");
titulo.id = "titulo";
titulo.innerHTML = "Título de la escena";
document.body.insertBefore(titulo, optionsContainer);

// Función para ajustar la posición de los botones en móviles sin modificar la versión de PC
function ajustarParaMovil() {
    let esMovil = window.innerWidth <= 600;
    let esHorizontal = window.innerWidth > window.innerHeight;

    if (esMovil) {
        optionsContainer.style.display = "flex";
        optionsContainer.style.flexDirection = esHorizontal ? "row" : "column";
        optionsContainer.style.justifyContent = "center";
        optionsContainer.style.alignItems = "center";
    }
}

// Ajustar cuando se carga la página y cuando cambia el tamaño
window.addEventListener("load", ajustarParaMovil);
window.addEventListener("resize", ajustarParaMovil);

// Configurar las escenas
let current_scene = 'scene1';
const scenes = {
    scene1: {
        video_path: "videos/video1.mp4",
        title: 'Un pasillo largo. Un portón cerrado. El sonido metálico del no. Los cuerpos se golpean contra la arquitectura del privilegio. ¿Quién programó esta inaccesibilidad?',
        buttons: [
            { text: "Escuchar los ecos de quienes no pudieron entrar", pos: [650, 400], action: () => transition_scene('scene2') },
            { text: "Reescribir el código de acceso: una escuela con rampas, con pausas, con respiración", pos: [650, 500], action: () => transition_scene('scene3') }
        ]
    },
    scene2: {
        video_path: "videos/video2.mp4",
        title: 'El adultocentrismo: una voz que interrumpe, explica, ordena. Pero al fondo del aula, una mano temblorosa dibuja un nuevo alfabeto. Nadie lo ve todavía.',
        buttons: [
            { text: "Romper el guion del deber ser docente", pos: [650, 400], action: () => transition_scene('scene4') },
            { text: "Dejar que hablen lxs cuerpxs adolescentes, con sus modos otros de estar presentes", pos: [650, 500], action: () => transition_scene('scene5') }
        ]
    },
    scene3: {
        video_path: "videos/video3.mp4",
        title: 'Dicen inclusión. Pero la palabra tropieza. Tropieza con los escalones, con los manuales, con los horarios rígidos. Dicen inclusión. Pero no alcanza si nadie se sienta a escuchar.',
        buttons: [
            { text: "Poner subtítulos a la empatía", pos: [650, 400], action: () => transition_scene('scene4') },
            { text: "Tocar el lenguaje hasta que se vuelva accesible", pos: [650, 500], action: () => transition_scene('scene5') }
        ]
    },
    scene4: {
        video_path: "videos/video4.mp4",
        title: 'Nos dijeron pobrecitxs. Nos dijeron inspiración. Pero somos otra cosa: un enjambre de cuerpos que piensan distinto el movimiento, la pausa, el tiempo.',
        buttons: [
            { text: "Desactivar la lástima como política", pos: [650, 400], action: () => transition_scene('scene5') },
            { text: "Inventar pedagogías del cuidado y la lentitud", pos: [650, 500], action: () => transition_scene('scene6') }
        ]
    },
    scene5: {
        video_path: "videos/video5.mp4",
        title: 'Las paredes oyen. Los pupitres no. Una rampa en la puerta no basta si adentro todo sigue igual. ¿Quién traduce el silencio de lo no adaptado?',
        buttons: [
            { text: "La accesibilidad no es estructura, es vínculo", pos: [650, 400], action: () => transition_scene('scene6') },
            { text: "Cuidar sin vigilar. Acompañar sin mandar", pos: [650, 500], action: () => transition_scene('scene7') }
        ]
    },
    scene6: {
        video_path: "videos/video6.mp4",
        title: 'El capacitismo es una gramática. Divide, clasifica, borra. Pero hay errores dulces que lo hacen fallar. Un lector de pantalla recita un poema. Un bastón blanco marca el ritmo del aula.',
        buttons: [
            { text: "Dejar que el error sea enseñanza", pos: [650, 400], action: () => transition_scene('scene7') },
            { text: "Escuchar los clics del braille digital", pos: [650, 500], action: () => transition_scene('scene8') }
        ]
    },
    scene7: {
        video_path: "videos/video7.mp4",
        title: 'Un grupo de estudiantes se rebela contra el tiempo de campana. Crean un horario propio. Leen con la piel, calculan con el cuerpo, se ríen del examen como dispositivo de control.',
        buttons: [
            { text: "Reescribir el derecho a la educación con tinta táctil", pos: [650, 400], action: () => transition_scene('scene8') },
            { text: "Desobedecer los relojes del aula", pos: [650, 500], action: () => transition_scene('scene9') }
        ]
    },
    scene8: {
        video_path: "videos/video8.mp4",
        title: 'Accesibilidad no como permiso, sino como poética. El derecho a existir también se enseña. También se aprende.',
        buttons: [
            { text: "Aprender a ritmo de respiración", pos: [650, 400], action: () => transition_scene('scene10') },
            { text: "Tejer comunidad desde el deseo y no desde el diagnóstico", pos: [650, 500], action: () => transition_scene('scene11') }
        ]
    },
    scene9: {
        video_path: "videos/video9.mp4",
        title: 'El sistema educativo: un laberinto. Pero en el suelo, con tiza, alguien dibuja una rampa. El mapa cambia.',
        buttons: [
            { text: "Hackear el aula", pos: [250, 400], action: () => transition_scene('scene12') },
            { text: "Desarmar las jerarquías de la normalidad", pos: [250, 500], action: () => transition_scene('scene13') }
        ]
    },
    scene10: {
        video_path: "videos/video10.mp4",
        title: 'Hay que volver al cuerpo. Al temblor del cuerpo. A la invención de una escuela que respire con nosotrxs, no contra nosotrxs.',
        buttons: [
            { text: "Volver a lo sensible como derecho", pos: [650, 400], action: () => transition_scene('scene14') },
            { text: "Volver al inicio, pero con rampas emocionales", pos: [650, 500], action: () => transition_scene('scene15') }
        ]
    },
    scene11: {
        video_path: "videos/video11.mp4",
        title: 'No soy un error de diseño. Soy un cuerpo que inventa su propia interfaz con el mundo. Cada movimiento es una declaración política.',
        buttons: [
            { text: "Celebrar la diferencia como tecnología viva", pos: [650, 400], action: () => transition_scene('scene14') },
            { text: "Reprogramar el deseo de lo normal", pos: [650, 500], action: () => transition_scene('scene15') }
        ]
    },
    scene12: {
        video_path: "videos/video12.mp4",
        title: 'Una nave recorre los pasillos del colegio. A bordo: bastones, sillas, tablets lectoras, cuadernos con texturas. La revolución accesible ya está en curso.',
        buttons: [
            { text: "Navegar hacia la educación inclusiva total", pos: [650, 400], action: () => transition_scene('scene1') },
            { text: "Dejarse guiar por las luces táctiles del camino", pos: [650, 500], action: () => transition_scene('scene2') }
        ]
    },
    scene13: {
        video_path: "videos/video13.mp4",
        title: 'Desconectan la máquina. Pero la red queda encendida: un murmullo de voces dice todavía estamos acá, todavía estamos aprendiendo.',
        buttons: [
            { text: "Seguir aprendiendo desde la interdependencia", pos: [650, 400], action: () => transition_scene('scene14') },
            { text: "Apagar el sistema capacitista y encender el cuidado", pos: [650, 500], action: () => transition_scene('scene15') }
        ]
    },
    scene14: {
        video_path: "videos/video14.mp4",
        title: 'La juventud no pide permiso. Grita sus derechos desde la silla, desde la muleta, desde la lengua de señas. Todo cuerpo es un manifiesto.',
        buttons: [
            { text: "Tomar la palabra con las manos", pos: [650, 400], action: () => transition_scene('scene1') },
            { text: "Inventar una pedagogía de la diferencia", pos: [650, 500], action: () => transition_scene('scene2') }
        ]
    },
    scene15: {
        video_path: "videos/video15.mp4",
        title: 'Silencio. Escucha. Un latido metálico. Un clic. La accesibilidad es una forma de amor.',
        buttons: [
            { text: "Volver a empezar con todos los sentidos abiertos", pos: [650, 400], action: () => transition_scene('scene1') },
            { text: "Seguir caminando despacio, pero juntxs", pos: [650, 500], action: () => transition_scene('scene2') }
        ]
    }
};

    


    // Función para cambiar la escena
    function transition_scene(scene) {
        if (scenes[scene]) {
            const sceneData = scenes[scene];
            
            // Cambiar título
            document.getElementById('titulo').innerText = sceneData.title;

            // Cambiar el video
            const videoElement = document.querySelector('video');
            videoElement.src = sceneData.video_path;
            videoElement.play(); // Reproducir el video

            // Actualizar los botones
            boton1.innerText = sceneData.buttons[0].text;
            boton1.style.left = `${sceneData.buttons[0].pos[0]}px`;
            boton1.style.top = `${sceneData.buttons[0].pos[1]}px`;

            boton2.innerText = sceneData.buttons[1].text;
            boton2.style.left = `${sceneData.buttons[1].pos[0]}px`;
            boton2.style.top = `${sceneData.buttons[1].pos[1]}px`;

            // Asignar las acciones a los botones
            boton1.onclick = sceneData.buttons[0].action;
            boton2.onclick = sceneData.buttons[1].action;
        } else {
            console.error(`La escena "${scene}" no existe.`);
        }
    }
   
    // Iniciar la escena
    transition_scene('scene1'); // Inicializar con la primera escena
});

