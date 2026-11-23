// Lista de canciones: modifica el título y la ruta según tus archivos en la carpeta /musica
const canciones = [
    { titulo: "1. 2009Katary-Canto_por_la_hermandad", archivo: "musica/2009Katary-Canto_por_la_hermandad.mp3" },
    { titulo: "2. 2010Katary-Regresando_y_Conquistando", archivo: "musica/2010Katary-Regresando_y_Conquistando.mp3" },
    { titulo: "3. 2011Grupo_Rasgos-Promesas", archivo: "musica/2011Grupo_Rasgos-Promesas.mp3" },
    { titulo: "4. 2012Grupo_Rasgos-Rompiendo_Cascabeles", archivo: "musica/2012Grupo_Rasgos-Rompiendo_Cascabeles.mp3" },
    { titulo: "5. 2013Paola_Gomez_y_Marcel_Cari-Marioneta_de_tu_amor", archivo: "musica/2013Paola_Gomez_y_Marcel_Cari-Marioneta_de_tu_amor.mp3" },
    { titulo: "6. 2013Samaya-A_Bailar_Candelaz", archivo: "musica/2013Samaya-A_Bailar_Candelaz-.mp3" },
    { titulo: "7. 2014Grupo_Nayjama-Bailando", archivo: "musica/2014Grupo_Nayjama-Bailando.mp3" },
    { titulo: "8. 2014Mishka_Fusion-Me_canse", archivo: "musica/2014Mishka_Fusion-Me_canse.mp3" },
    { titulo: "9. 2015Grupo_Expresion-Orgullo_Caporal", archivo: "musica/2015Grupo_Expresion-Orgullo_Caporal.mp3" },
    { titulo: "10. 2015Grupo_Rasgos-Te_amare", archivo: "musica/2015Grupo_Rasgos-Te_amare.mp3" },
    { titulo: "11. 2015Naya-Entregando_el_corazon", archivo: "musica/2015Naya-Entregando_el_corazon.mp3" },
    { titulo: "12. 2016_Renovación_Andina-Candela(Tema_ACCCEP_no_oficial_cover)", archivo: "musica/2016_Renovación_Andina-Candela(Tema_ACCCEP_no_oficial_cover).mp3" },
    { titulo: "13. 2016Grupo_Nayjama-Por_ti_Mamita_Candelaria", archivo: "musica/2016Grupo_Nayjama-Por_ti_Mamita_Candelaria.mp3" },
    { titulo: "14. 2017Grupo_Nayra-En_febrero_volveré", archivo: "musica/2017Grupo_Nayra-En_febrero_volveré.mp3" },
    { titulo: "15. 2020Grupo_Rasgos-El_tema_de_nuestro_amor", archivo: "musica/2020Grupo_Rasgos-El_tema_de_nuestro_amor.mp3" },
    { titulo: "16. 2022_5D'Copas-Leal_Caporal", archivo: "musica/2022_5D'Copas-Leal_Caporal.mp3" },
    { titulo: "17. 2022_5D'Copas-Por_Siempre_Lobos_y_Diosas", archivo: "musica/2022_5D'Copas-Por_Siempre_Lobos_y_Diosas.mp3" },
    { titulo: "18. 2026Grupo_Rasgos-Sincero_Caporal", archivo: "musica/2026Grupo_Rasgos-Sincero_Caporal.mp3" },
];

const audioPlayer = document.getElementById('audio-player');
const trackTitle = document.getElementById('track-title');
const playlistElement = document.getElementById('playlist');

let indiceActual = 0;

// Construir la lista en pantalla
function cargarLista() {
    canciones.forEach((cancion, index) => {
        const li = document.createElement('li');
        li.textContent = cancion.titulo;
        li.addEventListener('click', () => reproducirCancion(index));
        playlistElement.appendChild(li);
    });
}

// Reproducir una canción específica
function reproducirCancion(index) {
    indiceActual = index;
    audioPlayer.src = canciones[index].archivo;
    trackTitle.textContent = canciones[index].titulo;
    audioPlayer.play();
    actualizarEstiloActivo();
}

// Resaltar la canción que está sonando
function actualizarEstiloActivo() {
    const items = playlistElement.querySelectorAll('li');
    items.forEach((item, idx) => {
        if (idx === indiceActual) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Pasar automáticamente a la siguiente canción cuando termine la actual
audioPlayer.addEventListener('ended', () => {
    indiceActual++;
    if (indiceActual < canciones.length) {
        reproducirCancion(indiceActual);
    } else {
        indiceActual = 0; // Vuelve al inicio al terminar toda la lista
        reproducirCancion(indiceActual);
    }
});

// Inicializar
cargarLista();