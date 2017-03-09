var email = document.getElementById('email');
var password = document.getElementById('inputPassword');
var login = document.getElementById('login');
var mgErroneo = document.getElementById('mgErroneo');

login.onclick= function(event){
  event.preventDefault();
  if(email.value=="laboratoria@gmail.com" && password.value == "laboratoria" || email.value=="betsi@gmail.com" && password.value == "laboratoria"){
location.href="muro.html"
mgErroneo.innerHTML="";
mgPassword.innerHTML="";
  }
  if(email.value==""){
    mgErroneo.innerHTML="El campo de Usuario no puede estar en blanco";
  }else {
    mgErroneo.innerHTML="No es un usuario";
  }
  if(password.value==""){
    mgPassword.innerHTML="El campo de Password no puede estar en blanco";
  }else {
    mgPassword.innerHTML="Password erroneo";
  }

}
