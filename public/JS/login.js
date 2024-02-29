//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //Función para ajustar la interfaz en función del ancho de la página

function anchoPage(){
// Verificar si el ancho de la ventana es mayor que 850 píxeles
    if (window.innerWidth > 850){
         // Mostrar las cajas traseras de inicio de sesión y registro
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
         // Mostrar la caja trasera de registro y ajustar la interfaz para dispositivos más pequeños
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}
// Llama a la función para ajustar la interfaz al cargar la página
anchoPage();

// Función para mostrar el formulario de inicio de sesión

    function iniciarSesion(){
            // Verificar si el ancho de la ventana es mayor que 850 píxeles
            if (window.innerWidth > 850){
             // Mostrar el formulario de inicio de sesión y ajustar la interfaz
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
             // Mostrar el formulario de inicio de sesión y ajustar la interfaz para dispositivos más pequeños
             formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }
// Función para mostrar el formulario de registro
   function register(){
        // Verificar si el ancho de la ventana es mayor que 850 píxeles
          if (window.innerWidth > 850){
             // Mostrar el formulario de registro y ajustar la interfaz
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
         // Mostrar el formulario de registro y ajustar la interfaz para dispositivos más pequeños
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}

