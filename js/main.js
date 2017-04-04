function validateForm(){
	/* Escribe tú código aquí */
  var name = document.getElementById('name');
  var lastname = document.getElementById('lastname');
  var email = document.getElementById('input-email');
  var password = document.getElementById('input-password');
  var elegir = document.getElementById('elegir');

  var toolDiv =  document.getElementsByClassName('input-box');
  var toolAlert = document.createElement('span');
//  toolAlert.setAttribute('class','tt-show');

  /*function noneTT(){
  var arrayTt = document.getElementsByClassName('tt-show');
  for (var i = 0; i < arrayTt.length; i++) {
    arrayTt[i].setAttribute('class','tt-none');
    arrayTt[i].parentNode.removeChild(arrayTt[i]);
  }*/

  /*** Validando campo nombre***/
    if(name.value.length == 0){
        toolDiv[0].appendChild(toolAlert);
        toolAlert.appendChild(document.createTextNode('Por favor ingrese su nombre'));
        name.focus();
        return false;
    }

    for (var i = 1; i< name.value.length ; i++){
      if( !(/[A-ZÑÁÉÍÓÚa-zñáéíóú]/.test(name.value.split("")[i]))){ //for para recorrer los caracteres de name.value.split (array), me gusta mas split-array q charAt
        toolDiv[0].appendChild(toolAlert);
        toolAlert.appendChild(document.createTextNode('El nombre debe contener solamente letras (a-z), por favor intente de nuevo'));
        name.focus();
        return false;
      } else if( !(/[A-ZÑÁÉÍÓÚ]/.test(name.value.split("")[0]))){ //for para recorrer los caracteres de name.value.split (array), me gusta mas split-array q charAt
        toolDiv[0].appendChild(toolAlert);
        toolAlert.appendChild(document.createTextNode('El nombre debe empezar en mayúscula, por favor intente de nuevo'));
        name.focus();
        return false;
      }
    }

  /*** Validando campo apellido***/
    if(lastname.value.length == 0){
        toolDiv[1].appendChild(toolAlert);
        toolAlert.appendChild(document.createTextNode('Por favor ingrese su apellido'));
        lastname.focus();
        return false;
    }

    for (var j = 1; j< lastname.value.length ; j++){
      if( !(/[A-ZÑÁÉÍÓÚa-zñáéíóú]/.test(lastname.value.split("")[j]))){
        toolDiv[1].appendChild(toolAlert);
        toolAlert.appendChild(document.createTextNode('El apellido debe contener solamente letras (a-z), por favor intente de nuevo'));
        lastname.focus();
        return false;
      } else if( !(/[A-ZÑÁÉÍÓÚ]/.test(lastname.value.split("")[0]))){
        toolDiv[1].appendChild(toolAlert);
        toolAlert.appendChild(document.createTextNode('El apellido debe empezar en mayúscula, por favor intente de nuevo'));
        lastname.focus();
        return false;
      }
    }

  /*** Validando campo email***/
    if(email.value.length == 0){
      toolDiv[2].appendChild(toolAlert);
      toolAlert.appendChild(document.createTextNode('Por favor ingrese su correo electrónico'));
      email.focus();
      return false;
    } else if (!(/[\w-\.]{3,}@[\w-]{3,}\.[A-Za-z]{2,3}/.test(email.value))){
      toolDiv[2].appendChild(toolAlert);
      toolAlert.appendChild(document.createTextNode('El correo electrónico debe tener la siguiente forma email@dominio.com, por favor intente de nuevo'));
      email.focus();
      return false;
    }

  /*** Validando campo password***/
    if(password.value.length == 0){
      toolDiv[3].appendChild(toolAlert);
      toolAlert.appendChild(document.createTextNode('Por favor ingrese su contraseña'));
      password.focus();
      return false;
    } else if (password.value.length < 6) {
      toolDiv[3].appendChild(toolAlert);
      toolAlert.appendChild(document.createTextNode('Por favor ingrese su contraseña'));
      password.focus();
      return false;
    } else if ((password.value == "password") || (password.value == "123456") || (password.value =="098754")){
      toolDiv[3].appendChild(toolAlert);
      toolAlert.appendChild(document.createTextNode('La contraseña no es segura, por favor intente de nuevo'));
      password.focus();
      return false;
    }

  /*** Validando campo select/elegir***/
    if(elegir.value == 0){
      toolDiv[4].appendChild(toolAlert);
      toolAlert.appendChild(document.createTextNode('Por favor, seleccione su bicicleta'));
      elegir.focus();
      return false;
    }

    return alert (name.value +' '+ lastname.value + ', muchas gracias por registrarse');
}
