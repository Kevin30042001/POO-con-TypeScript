class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: 'centrado' | 'derecha' | 'izquierda';

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = 'centrado'; 
    }

    obtenerPropiedades(): { titulo: string; color: string; fuente: string } {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    }

    establecerAlineacion(alineacion: 'centrado' | 'derecha' | 'izquierda'): string {
        this.alineacion = alineacion;
        return `Alineación establecida a: ${this.alineacion}`;
    }

    imprimirPropiedades(): string {
        return `
            Título: ${this.titulo}
            Color: ${this.color}
            Fuente: ${this.fuente}
            Alineación: ${this.alineacion}
        `;
    }
}

function renderizarResultados() {
    const mainExerciseDiv = document.getElementById('main-exercise');
    if (mainExerciseDiv) {
        const miCabecera = new CabeceraPagina("Mi Página Genial", "azul", "Arial");
        
        let contenido = '<h2>Ejercicio l: Cabecera Pagina</h2>';
        
        contenido += '<h3>Propiedades Iniciales:</h3>';
        contenido += `<pre>${JSON.stringify(miCabecera.obtenerPropiedades(), null, 2)}</pre>`;
        
        contenido += '<h3>Cambio de Alineación:</h3>';
        contenido += `<p>${miCabecera.establecerAlineacion("derecha")}</p>`;
        
        contenido += '<h3>Todas las Propiedades:</h3>';
        contenido += `<pre>${miCabecera.imprimirPropiedades()}</pre>`;
        
        mainExerciseDiv.innerHTML = contenido;
    }
}

document.addEventListener('DOMContentLoaded', renderizarResultados);