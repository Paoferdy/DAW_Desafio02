var FechaRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/;
var TelefonoRegex = /^\d{4}[-\s]\d{4}$/;
var DUIRegex =  /^\d{8}-\d{1}$/;
var PasaporteRegex = /^[A-Za-z0-9]{6,20}$/


function init() {
    if(typeof(Storage) == "undefined") {
    alert("El navegador no tiene soporte para HTML5 y almacenamiento local.");
    }
    else {
    console.log("El navegador soporta localStorage.");
    divState = document.getElementById("state");
    }
    divState = document.getElementById("state");
    if(typeof(localStorage) == "undefined"){
    divState.style.display = 'none';
    }
    else{
    divState.style.display = 'block';
    }
}

function SaveData(){

  //Se guardan en variables los datos del formulario  
 var nombre = document.getElementById("nombre").value;
 var fechaNac = document.getElementById("fecha_nacimiento").value;
 var departamento = document.getElementById("departamento").value;
 var municipio = document.getElementById("municipio").value;
 var dui_radio = document.getElementById("dui");
 var pasaporte_radio = document.getElementById("pasaporte");
 var numeroDocumento = document.getElementById("numeroDocumento").value;
 var telefono = document.getElementById("telefono").value;
 var motivo_consulta = document.getElementById("motivo_consulta").value;

if(dui_radio.checked){
    tipoDocumento = "DUI";
} else if(pasaporte_radio.checked){
    tipoDocumento = "Pasaporte";
}

 //Se gurdan datos en un Array
  var PacienteDatosArray = {
    "nombre" : nombre,
    "FechaNacimiento" : fechaNac,
    "Departamento" : departamento,
    "municipio" : municipio,
    "TipoDocumento" : tipoDocumento,
    "NumeroDocumento": numeroDocumento,
    "telefono" : telefono,
    "motivo_consulta" : motivo_consulta
  }


    if(nombre == null || nombre == "" || nombre.length == 0){
        alert("No se ha ingresado ningún nombre");
    } else if (!(FechaRegex.test(fechaNac))){
        alert("Fecha NO valida. \n Debe ser en formato DD-MM-AAAA");
    } else if(municipio == null || municipio == "" || municipio.length == 0){
        alert("Por favor, Seleccione departamento y municipio");
    }else if (dui_radio.checked && !(DUIRegex.test(numeroDocumento))){
        alert("DUI NO valida. \n Debe ser en formato 00600020-0");
    } else if (pasaporte_radio.checked && !(PasaporteRegex.test(numeroDocumento))){
        alert("Número de pasaporte NO valido.");
    }else if(!(TelefonoRegex.test(telefono))){
        alert("Número telefono NO valido. \n Debe ser en formato 7777-7777");
    }else if(motivo_consulta == null || motivo_consulta == "" || motivo_consulta.length == 0){
        alert("Por favor, ingrese motivo de consulta");
    }else{
        var IDPaciente = localStorage.length + 1; //Se asigna Key

        //Se convierte a STRING y se guarda
        var StringJSON = JSON.stringify(PacienteDatosArray);
        localStorage.setItem(IDPaciente, StringJSON);
        alert("Paciente guardado exitosamente");
    }
}

//Función que muestra opciones de municipios
function cargarMunicipios() {   
    var departamentoSeleccionado = document.getElementById("departamento").value;
    var municipioSelect = document.getElementById("municipio");
    municipioSelect.innerHTML = "";

    if (departamentoSeleccionado === "Ahuachapán") {
        var municipios = ["Ahuachapán", "Apaneca", "Atiquizaya", "Concepción de Ataco", "El Refugio", "Guaymango", "Jujutla", "San Francisco Menéndez", "San Lorenzo", "San Pedro Puxtla", "Tacuba", "Turín"];
    } else if (departamentoSeleccionado === "Cabañas") {
        var municipios = ["Cinquera", "Dolores", "Guacotecti", "Ilobasco", "Jutiapa", "San Isidro", "Sensuntepeque", "Tejutepeque", "Victoria"];
    } else if (departamentoSeleccionado === "Chalatenango") {
        var municipios = ["Agua Caliente", "Arcatao", "Azacualpa", "Chalatenango", "Citalá", "Comalapa", "La Laguna", "La Palma", "La Reina", "Las Vueltas", "Nueva Concepción", "Nueva Trinidad", "Ojos de Agua", "Potonico", "San Antonio de la Cruz", "San Antonio Los Ranchos", "San Fernando", "San Francisco Lempa", "San Francisco Morazán", "San Ignacio", "San Isidro Labrador", "San Luis del Carmen", "San Miguel de Mercedes", "San Rafael", "Santa Rita", "Tejutla"];
    } else if (departamentoSeleccionado === "Cuscatlán") {
        var municipios = ["Cojutepeque", "Candelaria", "El Carmen", "El Rosario", "Monte San Juan", "Oratorio de Concepción", "San Bartolomé Perulapía", "San Cristóbal", "San José Guayabal", "San Pedro Perulapán", "San Rafael Cedros", "San Ramón", "Santa Cruz Analquito", "Santa Cruz Michapa", "Suchitoto", "Tenancingo"];
    } else if (departamentoSeleccionado === "La Libertad") {
        var municipios = ["Antiguo Cuscatlán", "Chiltiupán", "Ciudad Arce", "Colón", "Comasagua", "Huizúcar", "Jayaque", "Jicalapa", "La Libertad", "Nuevo Cuscatlán", "Opico", "Quezaltepeque", "Sacacoyo", "San Juan Opico", "San Matías", "San Pablo Tacachico", "Talnique", "Tamanique", "Teotepeque", "Tepecoyo", "Zaragoza"];
    } else if (departamentoSeleccionado === "La Paz") {
        var municipios = ["Cuyultitán", "El Rosario", "Jerusalén", "Mercedes La Ceiba", "Olocuilta", "Paraíso de Osorio", "San Antonio Masahuat", "San Emigdio", "San Francisco Chinameca", "San Juan Nonualco", "San Juan Talpa", "San Juan Tepezontes", "San Luis La Herradura", "San Luis Talpa", "San Miguel Tepezontes", "San Pedro Masahuat", "San Pedro Nonualco", "San Rafael Obrajuelo", "Santa María Ostuma", "Santiago Nonualco", "Tapalhuaca", "Zacatecoluca"];
    } else if (departamentoSeleccionado === "La Unión") {
        var municipios = ["Anamorós", "Bolívar", "Concepción de Oriente", "Conchagua", "El Carmen", "El Sauce", "Intipucá", "La Unión", "Lislique", "Meanguera del Golfo", "Nueva Esparta", "Pasaquina", "Polorós", "San Alejo", "San José", "Santa Rosa de Lima", "Yayantique"];
    } else if (departamentoSeleccionado === "Morazán") {
        var municipios = ["Cacaopera", "Corinto", "Delicias de Concepción", "El Divisadero", "El Rosario", "Gualococti", "Guatajiagua", "Jocoro", "Jocoaitique", "Lolotiquillo", "Meanguera", "Osicala", "San Carlos", "San Fernando", "San Francisco Gotera", "San Isidro", "San Simón", "Sensembra", "Sociedad", "Torola", "Yamabal"];
    } else if (departamentoSeleccionado === "San Miguel") {
        var municipios = ["Carolina", "Chinameca", "Chirilagua", "Ciudad Barrios", "Comacarán", "El Tránsito", "Lolotique", "Moncagua", "Nueva Guadalupe", "Nuevo Edén de San Juan", "Quelepa", "San Antonio", "San Gerardo", "San Jorge", "San Luis de la Reina", "San Miguel", "San Rafael Oriente", "Sesori", "Uluazapa"];
    } else if (departamentoSeleccionado === "San Salvador") {
        var municipios = ["Aguilares", "Apopa", "Ayutuxtepeque", "Cuscatancingo", "Delgado", "El Paisnal", "Guazapa", "Ilopango", "Mejicanos", "Nejapa", "Panchimalco", "Rosario de Mora", "San Marcos", "San Martín", "San Salvador", "Santiago Texacuangos", "Santo Tomás", "Soyapango", "Tonacatepeque"];
    } else if (departamentoSeleccionado === "San Vicente") {
        var municipios = ["Apastepeque", "Guadalupe", "San Cayetano Istepeque", "San Esteban Catarina", "San Ildefonso", "San Lorenzo", "San Sebastián", "San Vicente", "Santa Clara", "Santo Domingo", "Tecoluca", "Tepetitán", "Verapaz"];
    } else if (departamentoSeleccionado === "Santa Ana") {
        var municipios = ["Candelaria de la Frontera", "Chalchuapa", "Coatepeque", "El Congo", "El Porvenir", "Masahuat", "Metapán", "San Antonio Pajonal", "San Sebastián Salitrillo", "Santa Ana", "Santa Rosa Guachipilín", "Santiago de la Frontera"];
    }

    for (var i = 0; i < municipios.length; i++) {
        var option = document.createElement("option");
        option.text = municipios[i];
        option.value = municipios[i];
        municipioSelect.appendChild(option);
    }
}


if(window.addEventListener){
    window.addEventListener("load", init, false);
   }
   else if(window.attachEvent){
    window.attachEvent("onload", init);
   } 