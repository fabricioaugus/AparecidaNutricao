var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (let i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido !");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido !";
        paciente.classList.add("paciente-invalido");
        
    }
    if (!alturaEhValido) {
        console.log("Altura inválido !");
        alturaEhValido = false;
        tdImc.textContent = "Altura inválido !";
        paciente.classList.add("paciente-invalido");
    }
    if (pesoEhValido && alturaEhValido) {
        var imc = calculaImc(peso,altura)
        tdImc.textContent = imc;
    }

}

function validaPeso(peso){
    if (peso >= 0 && peso < 1000) {
        return true;
    }else{
        return false;
    }
    
}
function validaAltura(altura){
    if (altura >= 0 && altura <= 3.0) {
        return true;
    }else{
        return false;
    }
    
}
function calculaImc(peso,altura){
    var imc = 0;
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}
 


/*      -- Uso do forEach --        
pacientes.forEach(paciente => {
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido !");
        pesoEhValido = false;
        tdPeso.textContent = "Peso inválido !";
        
    }
    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválido !");
        alturaEhValido = false;
        tdImc.textContent = "Altura inválido !";
    }
    if (pesoEhValido && alturaEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
    
}); 
*/ 


