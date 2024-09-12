class Calculadora {
    sumar(a: number, b: number): number {
        return a + b;
    }

    restar(a: number, b: number): number {
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    }

    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    factorial(n: number): number {
        if (n < 0) {
            throw new Error("No existe el factorial de un número negativo");
        }
        if (n === 0) return 1;
        return n * this.factorial(n - 1);
    }
}

const calculadora = new Calculadora();

document.addEventListener('DOMContentLoaded', () => {
    const calculadoraContainer = document.getElementById('calculadora-container');
    if (!calculadoraContainer) {
        console.error("No se encontró el contenedor de la calculadora");
        return;
    }

    // Generar el HTML del formulario
    calculadoraContainer.innerHTML = `
        <h2>Calculadora Interactiva</h2>
        <div class="input-group">
            <label for="numero1">Número 1:</label>
            <input type="number" id="numero1" placeholder="Ingrese el primer número" required>
        </div>
        <div class="input-group">
            <label for="numero2">Número 2:</label>
            <input type="number" id="numero2" placeholder="Ingrese el segundo número" required>
        </div>
        <div class="input-group">
            <label for="operacion">Operación:</label>
            <select id="operacion" required>
                <option value="sumar">Sumar</option>
                <option value="restar">Restar</option>
                <option value="multiplicar">Multiplicar</option>
                <option value="dividir">Dividir</option>
                <option value="potencia">Potencia</option>
                <option value="factorial">Factorial</option>
            </select>
        </div>
        <button id="calculate-btn" type="button">Calcular</button>
        <div id="resultado" aria-live="polite"></div>
    `;

    const btnCalcular = document.getElementById('calculate-btn') as HTMLButtonElement;
    const numero1Input = document.getElementById('numero1') as HTMLInputElement;
    const numero2Input = document.getElementById('numero2') as HTMLInputElement;
    const operacionSelect = document.getElementById('operacion') as HTMLSelectElement;
    const resultadoDiv = document.getElementById('resultado') as HTMLDivElement;

    btnCalcular.addEventListener('click', () => {
        const numero1 = parseFloat(numero1Input.value);
        const numero2 = parseFloat(numero2Input.value);
        const operacion = operacionSelect.value;

        let resultado: string;

        try {
            switch (operacion) {
                case 'sumar':
                    resultado = `Resultado: ${calculadora.sumar(numero1, numero2)}`;
                    break;
                case 'restar':
                    resultado = `Resultado: ${calculadora.restar(numero1, numero2)}`;
                    break;
                case 'multiplicar':
                    resultado = `Resultado: ${calculadora.multiplicar(numero1, numero2)}`;
                    break;
                case 'dividir':
                    resultado = `Resultado: ${calculadora.dividir(numero1, numero2)}`;
                    break;
                case 'potencia':
                    resultado = `Resultado: ${calculadora.potencia(numero1, numero2)}`;
                    break;
                case 'factorial':
                    resultado = `Resultado: ${calculadora.factorial(numero1)}`;
                    break;
                default:
                    resultado = 'Operación no válida';
            }
        } catch (error) {
            resultado = `Error: ${(error as Error).message}`;
        }

        resultadoDiv.innerText = resultado;
    });

    // Mostrar/ocultar el segundo número según la operación seleccionada
    operacionSelect.addEventListener('change', () => {
        const isFactorial = operacionSelect.value === 'factorial';
        numero2Input.style.display = isFactorial ? 'none' : 'block';
        numero2Input.previousElementSibling!.style.display = isFactorial ? 'none' : 'block';
    });
});