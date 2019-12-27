
function saludar(){
    var nombre=prompt ("¿Cómo te llamas?");
    var lugar=prompt("¿De dónde eres?");
    document.getElementById("Saludo").innerHTML='Hola ' + nombre + '. ¿Que tal por ' + lugar + '?';
}