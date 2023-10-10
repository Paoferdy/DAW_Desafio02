

var PacienteID = 1;
var paciente;

function init(){

    var TablaContenido = document.getElementById("datos_pacientes");

    for(var i = 0; i < localStorage.length; i++){


    var paciente = JSON.parse(localStorage.getItem(i + 1));

    TablaContenido.innerHTML += "<p> Paciente N°"+ (i+1) +"</p>";
    TablaContenido.innerHTML += "<p>" + paciente.nombre + "</p>";
    TablaContenido.innerHTML += "<p>" + paciente.FechaNacimiento + "</p>";
    TablaContenido.innerHTML += "<p>" + paciente.Departamento + "</p>";
    TablaContenido.innerHTML += "<p>" + paciente.municipio + "</p>";
    TablaContenido.innerHTML += "<p>" + paciente.TipoDocumento + "</p>";
    TablaContenido.innerHTML += "<p>" + paciente.NumeroDocumento + "</p>";
    TablaContenido.innerHTML += "<p>" + paciente.telefono + "</p>";
    TablaContenido.innerHTML += "<p>" + paciente.motivo_consulta + "</p>";
    TablaContenido.innerHTML += "<hr>";
    }
}

function BorrarPaciente(){
    var numero_paciente = document.getElementById("NumeroPaciente").value;
    localStorage.removeItem(numero_paciente);
    
    Alert("Paciente borrado exitosamente!")
}

if(window.addEventListener){
    window.addEventListener("load", init, false);
   }
   else if(window.attachEvent){
    window.attachEvent("onload", init);
   }