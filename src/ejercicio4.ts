class Cuenta {
    constructor(
        public nombre: string,
        public cantidad: number,
        public tipoDeCuenta: string,
        public numeroDeCuenta: string
    ) {}

    depositar(cantidad: number): string {
        if (cantidad < 5.00) {
            return "El valor a depositar debe ser mayor a $5.00.";
        }
        this.cantidad += cantidad;
        return `Se ha depositado correctamente $${cantidad.toFixed(2)}. Nuevo saldo: $${this.cantidad.toFixed(2)}.`;
    }

    retirar(valor: number): string {
        if (valor > this.cantidad) {
            return "No hay suficiente dinero en la cuenta.";
        }
        if (valor < 5.00) {
            return "La cantidad a retirar debe ser mayor a $5.00.";
        }
        this.cantidad -= valor;
        return `Se ha retirado $${valor.toFixed(2)}. Saldo restante: $${this.cantidad.toFixed(2)}.`;
    }

    mostrarDatos(): string {
        return `
            Nombre: ${this.nombre}
            Tipo de Cuenta: ${this.tipoDeCuenta}
            Número de Cuenta: ${this.numeroDeCuenta}
        `;
    }
}

// Crear instancia de Cuenta con nuevos datos
const cuenta1 = new Cuenta("Lucía Rodríguez", 1000.00, "Ahorros", "ES1234567890");

function renderAccountResults() {
    const accountDiv = document.getElementById('account-exercise');
    if (accountDiv) {
        let contenido = '<h2>Ejercicio 4: Cuenta</h2>';

        contenido += `<pre>${cuenta1.mostrarDatos()}</pre>`;
        contenido += `<p>${cuenta1.depositar(250.00)}</p>`;
        contenido += `<p>${cuenta1.retirar(100.00)}</p>`;
        contenido += `<p>${cuenta1.retirar(4.00)}</p>`;
        contenido += `<p>${cuenta1.depositar(500.00)}</p>`;

        accountDiv.innerHTML = contenido;
    }
}

document.addEventListener('DOMContentLoaded', renderAccountResults);

