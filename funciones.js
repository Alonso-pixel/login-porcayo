//FUNCIONES
//GENERAR CAPTCHA ALEATORIO
function generateCaptcha() {
  var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
  var i;
  for (i = 0; i < 4; i++) {
    var a = alpha[Math.floor(Math.random() * alpha.length)];
    var b = alpha[Math.floor(Math.random() * alpha.length)];
    var c = alpha[Math.floor(Math.random() * alpha.length)];
    var d = alpha[Math.floor(Math.random() * alpha.length)];
  }
  var code = a + '' + b + '' + '' + c + '' + d;
  document.getElementById("mainCaptcha").value = code
}

//VALIDAR CAPTCHA
function CheckValidCaptcha() {
  var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
  var string2 = removeSpaces(document.getElementById('txtInput').value);
  if (string1 == string2) {
    document.getElementById('success').innerHTML = "El captcha es válido";
    return true;
    //location.replace("./correcto.html")

  }
  else {
    document.getElementById('success').innerHTML = "";
    generateCaptcha();
    return false;


  }
}
//QUITAR ESPACIOS 
function removeSpaces(string) {
  return string.split(' ').join('');
}
//VALIDAR TODOS LOS DATOS
function CheckData(idIsValid, passIsValid, captchaIsValid) {
  if (!idIsValid) {
    alert("Por favor, coloque un identificador válido");
    return false;
  }
  if (!passIsValid) {
    alert("Por favor, coloque una contraseña válida");
    return false;
  }
  if (!captchaIsValid) {
    alert("Por favor, coloque un captcha válido");
    return false;
  }
  if (idIsValid === true && passIsValid === true & captchaIsValid === true) return true;
}

//VALIDAR QUE SEAN MISMA CONTRASEÑA EN REGISTRO
function validarContraseña() {
  let pass = document.querySelector('input[name=contraseña]').value;
  let rep_pass = document.querySelector('input[name=rep-con]').value;
  console.log(`Valor de la contraseña: ${pass}`);
  if (pass !== rep_pass) {
      alert("Debe repetir la misma contraseña");
      return false
  }
  else {
      return CheckData(
          validaciones.identificador,
          validaciones.contraseña,
          true
      );
  }
}