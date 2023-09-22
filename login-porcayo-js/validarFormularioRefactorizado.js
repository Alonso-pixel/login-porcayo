const dom = document;

export default function validarFormulario() {
    const inputs = dom.querySelectorAll("#formulario [required]");

    inputs.forEach(input => {
        const mensajeError = createErrorMessage(input);
        input.insertAdjacentElement("afterend", mensajeError);
    });

    dom.addEventListener("keyup", listenerGral => {
        if (listenerGral.target.matches("#formulario [required]")) {
            const inputSeleccionado = listenerGral.target;

            if (inputSeleccionado.name === "identificador") {
                validateInput(inputSeleccionado, "^[A-Z]{4}\\d{6}2\\d{2}$", "El identificador debe cumplir con el FORMATO especificado", "El identificador debe cumplir con el TAMAÑO especificado");
            }

            if (inputSeleccionado.name === "contraseña") {
                validateInput(inputSeleccionado, "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d])(?=.*[\\W_]).{8}$", "La contraseña debe cumplir con el FORMATO especificado", "La contraseña debe cumplir con el TAMAÑO especificado");
            }
        }
    });
}

function createErrorMessage(input) {
    const mensajeError = dom.createElement("span");
    mensajeError.id = input.name;
    mensajeError.classList.add("no-active");
    return mensajeError;
}

function validateInput(input, pattern, formatErrorMessage, sizeErrorMessage) {
    const mensajeError = dom.getElementById(input.name);
    const formatoEspecificado = new RegExp(pattern, "g");
    const cadenaActual = input.value;
    const tamanoActual = cadenaActual.length;
    const tamanoReq = input.dataset.tam;

    if (tamanoActual == tamanoReq) {
        const esValido = formatoEspecificado.test(cadenaActual);

        if (!esValido) {
            displayErrorMessage(mensajeError, formatErrorMessage);
        } else {
            clearErrorMessage(mensajeError);
        }
    } else {
        displayErrorMessage(mensajeError, sizeErrorMessage);
    }
}

function displayErrorMessage(element, message) {
    element.textContent = message;
    element.classList.remove('no-active');
    element.classList.add('active');
}

function clearErrorMessage(element) {
    element.textContent = "";
    element.classList.remove('active');
    element.classList.add('no-active');
}

validarFormulario();