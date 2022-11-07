const valorTicket = 200; 
 
let descEstu = 80; 
let descTrain = 50; 
let descJunior = 15; 
 
let nombre = document.getElementById("nombre"); 
let apellido = document.getElementById("apellido"); 
let mail = document.getElementById("mail"); 
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/; 
let cantidad = document.getElementById("cantidad"); 
let categoria = document.getElementById("categoria"); 
/*let total = document.getElementById("total"); 
let resumen = document.getElementById("resumen");*/ 
 
function total_pagar() {     
    if (nombre.value === "") { 
        alert('[ERROR]  Ingrese un nombre valido'); 
        return; 
    } 
 
    if (apellido.value == ""){ 
        alert('[ERROR] Ingrese un apellido valido');  
        return; 
    } 
 
    if (mail.value === "") { 
        alert('[ERROR] Ingrese un Email valido'); 
        return; 
    } 
     
    if ((cantidad.value == 0) || (isNaN(cantidad.value)) ) { 
        alert('[ERROR] Debe indicar una cantidad !');
        return; 
    } 
     
    if (categoria.value == "") { 
        alert('[ERROR] Seleccione una Categoria para el Descuento'); 
        return; 
    } 
    if (categoria.value == "--Seleccione--") { 
        alert('[ERROR] Seleccione una Categoria para el Descuento'); 
        return; 
    } 
 
    let totalValTik = (cantidad.value) * valorTicket; 

 
    if (categoria.value == 0) { 
        totalValTik = totalValTik; 
    } 
    
    if (categoria.value == 1) { 
        totalValTik = totalValTik * (1-(descEstu / 100)); 
    } 

    if (categoria.value == 2) { 
        totalValTik = totalValTik * (1-(descTrain / 100)); 
    } 

    if (categoria.value == 3) { 
        totalValTik = totalValTik * (1-(descJunior / 100)); 
    } 
    var output= "Total a pagar: $"+ Math.round(totalValTik);
    document.getElementById('total').innerHTML = output;
    
} 



 
function reset_total_pagar() { 
    total.innerHTML = ""; 
} 

borrar.addEventListener('click', reset_total_pagar); 



 
