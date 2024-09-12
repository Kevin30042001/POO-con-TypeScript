abstract class Persona {
    constructor(
        protected nombre: string,
        protected apellido: string,
        protected direccion: string,
        protected telefono: string,
        protected edad: number
    ) {}

    esMayorDeEdad(): string {
        return this.edad >= 18 ? `${this.nombre} es mayor de edad.` : `${this.nombre} no es mayor de edad.`;
    }

    abstract mostrarDatos(): string;
}

class Empleado extends Persona {
    private sueldo: number;

    constructor(
        nombre: string,
        apellido: string,
        direccion: string,
        telefono: string,
        edad: number,
        sueldo: number
    ) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    cargarSueldo(nuevoSueldo: number): void {
        this.sueldo = nuevoSueldo;
    }

    imprimirSueldo(): string {
        return `${this.nombre} tiene un sueldo de $${this.sueldo}`;
    }

    mostrarDatos(): string {
        return `
            Datos personales:
            Nombre: ${this.nombre}
            Apellido: ${this.apellido}
            Dirección: ${this.direccion}
            Teléfono: ${this.telefono}
            Edad: ${this.edad}
            ${this.esMayorDeEdad()}
        `;
    }
}

// Crear instancia de Empleado con nuevos datos
const empleado1 = new Empleado("Alejandro", "Sánchez", "Calle Mayor 123", "600123456", 28, 35000);

function renderResults() {
    const exercise5Div = document.getElementById('exercise-5');
    if (exercise5Div) {
        exercise5Div.innerHTML = `
            <h2>Ejercicio 5: Empleado</h2>
            <pre>${empleado1.mostrarDatos()}</pre>
            <p>${empleado1.imprimirSueldo()}</p>
        `;
    }
}

document.addEventListener('DOMContentLoaded', renderResults);