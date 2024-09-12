class Cancion {
    // Atributos públicos
    titulo: string;
    genero: string;
    // Atributo privado
    private autor: string;

    // Constructor
    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ''; // Valor inicial vacío para el autor
    }

    // Método set para el autor
    setAutor(autor: string): void {
        this.autor = autor;
    }

    // Método get para el autor
    getAutor(): string {
        return this.autor;
    }

    // Método para mostrar los datos de la canción
    mostrarDatos(): string {
        return `
            Título: ${this.titulo}
            Género: ${this.genero}
            Autor: ${this.getAutor()}
        `;
    }
}

// Crear instancia de Cancion
const cancion1 = new Cancion("Imagine", "Rock");
cancion1.setAutor("John Lennon");

// Función para renderizar los resultados en el DOM
function renderSongResults() {
    const songDiv = document.getElementById('song-exercise');
    if (songDiv) {
        songDiv.innerHTML = `
            <h2> Ejercicio 3: Canción</h2>
            <pre>${cancion1.mostrarDatos()}</pre>
        `;
    }
}

// Llamar a la función de renderizado cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderSongResults);
