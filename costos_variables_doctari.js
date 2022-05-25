//Variable de médicos con propiedad NUEVA: tipo de profesional (tipo)
let medicos = [
{
    nombre: "Nedir",
    DNI: 1234321,
    tipo: "clinica"
},{
    nombre: "Angel",
    DNI: 20194526,
    tipo: "especialista"
},{
    nombre: "Azul",
    DNI: 20039932,
    tipo: "psicologa"
}]

// Objeto que proviene de la API Basa
let paciente = {
    nombre: "Juan Carlos",
    cobertura: "brindar_salud_plan_100"
} 


// Variable fijas que guarda Doctari en orden
const tipos_consulta = ["clinica", "especialista", "psicologa", "psicologa_extra"]

//Según lo visto en reunión los Array pueden venir desde la API
const tipos_planes = [{
    nombre: "brindar_salud_plan_100",
    valores: [388, 727, 348, 969]
    },{
    nombre: "brindar_salud_plan_200",
    valores: [388, 727, 348, 969]
}] 

//Los array y la propiedad valores están conectados por su orden como una matriz, donde la posición 0 'clinico' debe vincularse con el valor de posición 0 '388'


//Función Valor
function valor(tipo, plan){
    //Input tipo: Desde la variable tipos_consulta
    //Input plan: Desde la API de Basa
    let cobertura = tipos_planes.filter(object => object.nombre == plan)[0] //Me da un Array asi que elijo el único item de ese Array. Por eso el [0]

    if(tipo == tipos_consulta[0]){
        return cobertura.valores[0]
    } else if(tipo == tipos_consulta[1]){
        return cobertura.valores[1]
    } else if(tipo == tipos_consulta[2]){
        return cobertura.valores[2]
    } else if(tipo == tipos_consulta[3]){
        return cobertura.valores[3]
    } //Al ser pocos me sirve de esta manera sin profundizar en matrices
}

// Función para saber si ya tuvo consulta por psicología en el mes. (Falta agregar rango de fechas)
let consultas_paciente1 = [{
    paciente: "Paciente",
    DNI: 123,
    es_psico: true
},
{
    paciente: "Paciente",
    DNI: 123,
    es_psico: false    
}]
let es_psico_extra = function(pte){
    let es_psico = consultas_paciente1.map(dato=>dato.es_psico)
    return es_psico.indexOf(true) != -1
}
let psico_extra = es_psico_extra() //True/False


//Función para definir el tipo de consulta
function tipo_consulta(dr){
    //Input dr: Número del Array donde se encuentra el médico deseado para la consulta
    if(medicos[dr].tipo==="psicologa"){
        return psico_extra ? "psicologa_extra" : "psicologa"
    } else {
        return medicos[dr].tipo //con la nueva propiedad "Tipo"
    }
}


//Verificaciones finales
let consulta = tipo_consulta(2) //El valor de la función es la posición del médico en el Array que tiene Doctari.
let cobertura = paciente.cobertura //De la API Basa, ejemplo en la variable paciente

console.log("La consulta cuesta: $" + valor(consulta, cobertura));
// Y terminó