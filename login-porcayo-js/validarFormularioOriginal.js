const dom = document;
export default function validarFormulario() {
    



    // function contarCadena(cadInp) {
    //     return cadInp.length;
    // }

    const formulario = dom.querySelector("#formulario");
    const inputs = dom.querySelectorAll("#formulario [required]");// EL QUERY SELECTOR ES PARA USAR SELECTORES DE CSS
    //console.log(inputs);
    //console.log(formulario);

    inputs.forEach(input =>{//AGREGAMOS UN SPAN
        let mensajeError = dom.createElement("span");
        mensajeError.id = input.name;
        mensajeError.classList.add("msg-error");
        input.insertAdjacentElement("afterend",mensajeError);
    })

    dom.addEventListener("keyup", listenerGral => {
        if(listenerGral.target.matches("#formulario [required]")){
            let inputSeleccionado = listenerGral.target;//SELECCIONAMOS EL INPUT QUE TENGA REQUIRED COMO ATRIBUTO HTML Y QUE TENGA EL EVENTO KEYUP
            
            // let tamanoActual = contarCadena(inputSeleccionado);  
            // console.log(tamanoActual);
            let regex = null;// Contraseña: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8}$/

            if (inputSeleccionado.name = "identificador"){//INPUT CUYO NOMBRE SEA IDENTIFICADOR

                //inputSeleccionado.value es su verdadero valor actual
                
                // console.log("tamaño: " + tamanoActual);
                let mensajeError = dom.getElementById("identificador");
                let formatoEspecificado = new RegExp('^[A-Z]{4}\\d{6}2\\d{2}$',"g"); //debes de poner "\" para escapar \, y debes skippear los / del inicio de la regex

                //let formatoPrueba =  new RegExp('^\\d{6}$');
                let cadenaActual = inputSeleccionado.value;
                console.log(`Expresion regular: ${formatoEspecificado}`);
                
                console.log(`Cadena: ${cadenaActual}`);
                
                console.log(`exec: ${formatoEspecificado.exec(cadenaActual)}`);
                //console.log("Se encontro:" + cadEncontrada);
                console.log(formatoEspecificado.exec(cadenaActual));
                let esValido = formatoEspecificado.test(cadenaActual);
                console.log("Es valido: " + esValido);

                 if(!esValido){
                    console.log("Hola "+cadenaActual);
                    console.log("Tipo: "+ typeof(cadenaActual));
                    console.log("Convertida: " +Boolean(cadenaActual));
                    if (Boolean(cadenaActual) == false) {
                        mensajeError.textContent = "";
                    }
                    // console.log(formatoEspecificado.exec(cadenaActual));
                 else{
                    mensajeError.textContent = "El identificador debe cumplir con el formato especificado";
                    console.log(formatoEspecificado.exec(cadenaActual));
                    console.log(`Contenido error: ${mensajeError.textContent}`);
                    }}
                else{
                    mensajeError.textContent ="";
                    console.log("Se ejecuto esta condicion");

                }
                
                

//Funcion utilizada para crear comprobar el tamaño (en proceso...)
                // if(inputSeleccionado.length < 13 || inputSeleccionado.length > 13){ 
                //     mensajeError.textContent = "El identificador debe contener 13 caracteres";
                // }
                
                
            } 


        }
      

    })



}
validarFormulario();


// const regexid = inputs.identificador.pattern;
    // const regex2pass = inputs.contraseña.pattern;
    // inputs.forEach(input => {
    //     const mensajeError = dom.createElement("span");
    //     if (input.name === "identificador")
    //     {
    //         input.addEventListener("keyup", inputSeleccionado =>{
    //          if (inputSeleccionado.length < 13){
    //             mensajeError.innerText("El valor debe ser mayor a 13");
    //          }
    //          if (inputSeleccionado.text  != regex){
    //             mensajeError.innerText("El valor debe cumplir con el formato especificado");
    //          }
    //          else{
    //            dom.removeChild(mensajeError)
    //          }
    //         })


    //      }
    //     else{
    //         input.addEventListener("keyup", inputSeleccionado =>{
    //             if (inputSeleccionado.length < 10){
    //                 mensajeError.innerText("El valor debe ser mayor a 13");
    //              }
    //              if (inputSeleccionado.text  != regex){
    //                 mensajeError.innerText("El valor debe cumplir con el formato especificado");
    //              }
    //              else{
    //                dom.removeChild(mensajeError)
    //              }
            
    //         })

    //     }
    // })

    

    
