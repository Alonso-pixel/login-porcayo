const dom = document;
export default function validarFormulario() {


    //const formulario = dom.querySelector("#formulario");
    const inputs = dom.querySelectorAll("#formulario [required]");// EL QUERY SELECTOR ES PARA USAR SELECTORES DE CSS

    inputs.forEach(input => {//AGREGAMOS UN SPAN POR CADA ELEMENTO EN EL ARRAY
        let mensajeError = dom.createElement("span");
        mensajeError.id = input.name;
        mensajeError.classList.add("no-active");
        input.insertAdjacentElement("afterend", mensajeError);
    })

    // let mensajeHandler = (mensajeErr, caracteristica="", nombrePara=null, noVacio=true) => {
    //     mensajeErr.textContent = "";
    //     if(noVacio){
    //         mensajeErr.textContent = `El parametro ${nombrePara} debe cumplir con el ${caracteristica} especificado`;
    //     }
            
    // } 
    //TERMINAR DE REFACTORIZAR ESTO
    // let inputHandler = (inputSelec, patron) => {
    //     let mensajeError = dom.getElementById(inputSelec.name);
    //     let formatoEspecificado = new RegExp(patron, "g");
    //     let cadenaActual = inputSelec.value;
    //     let tamanoActual = cadenaActual.length;
    //     let tamanoReq = inputSelec.dataset.tam;

    //     if (tamanoActual !== tamanoReq) {
    //         // mensajeError.textContent = `El parametro ${inputSelec.name} debe cumplir con el TAMAÑO especificado`;
    //         mensajeHandler(mensajeError,"TAMAÑO", inputSelec.name,Boolean(tamanoActual));

    //         // if (tamanoActual == 0) { mensajeError.textContent = "" };
    //     }
    //     else {
    //         let esValido = formatoEspecificado.test(cadenaActual);
    //         if (!esValido) {
    //             // mensajeError.textContent = `El parametro ${inputSelec.name} debe cumplir con el FORMATO especificado`;
    //             mensajeHandler(mensajeError,"FORMATO", inputSelec.name);
    //         }
    //         else {
    //             mensajeHandler(mensajeError)
    //             // mensajeError.textContent = "";
    //         }

    //     }

    // }

    dom.addEventListener("keyup", listenerGral => {
        console.log("lsitenerGral" + listenerGral);
        if (listenerGral.target.matches("#formulario [required]")) {
            let inputSeleccionado = listenerGral.target;//SELECCIONAMOS EL INPUT QUE TENGA REQUIRED COMO ATRIBUTO HTML Y QUE TENGA EL EVENTO KEYUP
            console.log("inputseleccionado " + inputSeleccionado.name);

            if (inputSeleccionado.name === "identificador") {//INPUT CUYO NOMBRE SEA IDENTIFICADOR (no tendría que cambiar no?)

                let mensajeErrorId = dom.getElementById("identificador");//ASIGNAMOS UN SPAN A mensajeErrorId, AQUI DEBE ESTAR EL ERROR
                let formatoEspecificadoId = new RegExp('^[A-Z]{4}\\d{6}2\\d{2}$', "g");
                let cadenaActual = inputSeleccionado.value;
                let tamanoActual = cadenaActual.length;
                let tamanoReq = inputSeleccionado.dataset.tam;
                // console.log(inputSeleccionado.dataset.tam);
                console.log("tamanoactualId: " + tamanoActual);
                console.log(tamanoReq);
                if (tamanoActual == tamanoReq) {
                    let esValido = formatoEspecificadoId.test(cadenaActual);
                    if (!esValido) {
                        if (Boolean(cadenaActual) == false) {
                            mensajeErrorId.textContent = "";
                            mensajeErrorId.classList.remove('active');
                            mensajeErrorId.classList.add('no-active');
                            // Esto esta haciendo lo mismo pa
                        }
                        else {
                            mensajeErrorId.textContent = "El identificador debe cumplir con el FORMATO especificado";
                            mensajeErrorId.classList.remove('no-active');
                            mensajeErrorId.classList.add('active');
                        }
                    }
                    else {
                        mensajeErrorId.textContent = "";//‎ Espacio en blanco
                        mensajeErrorId.classList.remove('active');
                        mensajeErrorId.classList.add('no-active');
                    }
                }
                else {
                    mensajeErrorId.textContent = "El identificador debe cumplir con el TAMAÑO especificado";
                    mensajeErrorId.classList.remove('no-active');
                    mensajeErrorId.classList.add('active');
                    if (tamanoActual == 0) { mensajeErrorId.textContent = "" };


                }
            }
            if (inputSeleccionado.name === "contraseña") {

                let mensajeErrorPass = dom.getElementById("contraseña");
                let formatoEspecificadoPass = new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[\\W_]).{8}$', "g");
                let cadenaActual = inputSeleccionado.value;
                let tamanoActual = cadenaActual.length;
                let tamanoReq = inputSeleccionado.dataset.tam;
                console.log("tamanoactualPass: " + tamanoActual);
                console.log(tamanoReq);
                if (tamanoActual == tamanoReq) {
                    let esValido = formatoEspecificadoPass.test(cadenaActual);
                    if (!esValido) {
                        if (Boolean(cadenaActual) == false) {
                            mensajeErrorPass.textContent = "";
                            mensajeErrorPass.classList.remove('active');
                            mensajeErrorPass.classList.add('no-active');

                        }
                        else {
                            mensajeErrorPass.textContent = "La contraseña debe cumplir con el FORMATO especificado";
                            mensajeErrorPass.classList.remove('no-active');
                            mensajeErrorPass.classList.add('active');
                        }
                    }
                    else {
                        mensajeErrorPass.textContent = "";//‎ Espacio en blanco
                        mensajeErrorPass.classList.remove('active');
                        mensajeErrorPass.classList.add('no-active');
                    }
                }
                else {
                    mensajeErrorPass.textContent = "La contraseña debe cumplir con el TAMAÑO especificado";
                    mensajeErrorPass.classList.remove('no-active');
                    mensajeErrorPass.classList.add('active');
                    if (tamanoActual == 0) { mensajeErrorPass.textContent = "" };


                }



            }


        }






    })



}
validarFormulario();











