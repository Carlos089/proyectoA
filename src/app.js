// Laboratorio de módulo 3 de iniciación a JavaScript
//EJERCICIO PRODUCTO: (elegir entre tipo libro, alimentacion u otros)
console.log(":::::::EJERCICIO PRODUCTO::::::::::")
const product = { count: "", price: "", type: "" }
product.count = prompt("Introduce el número de artículos")
product.price = prompt("Introduce el precio de los artículos")
product.type = prompt("Introduce el tipo de artículo, de entre: libro alimentacion u otro")


const total = product.count <= 0 ? 0 : product.count * product.price
console.log("Total sin IVA:", total, "€.")

let IVA
switch (product.type) {
    case "alimentacion": IVA = 0.10 * total; break;
    case "libro": IVA = 0.04 * total; break;
    default: IVA = 0.21 * total; break;
}
console.log("IVA:", IVA)

let totalMasIVA = total + IVA
console.log("Precio con IVA:", totalMasIVA)


// CON USO DE FUNCIONES
console.log(":::::::::::EJERCICIO PRODUCTO MEDIANTE FUNCIONES::::::::::::")
function getTotalVat() {
    return product.count > 0 ? productTotal = product.count * product.price : 0;
}
getTotalVat()

let productVat
switch (product.type) {
    case "alimentacion": productVat = 0.10 * productTotal; break;
    case "libro": productVat = 0.04 * productTotal; break;
    default: productVat = 0.21 * productTotal; break;
}

function getVat() {
    console.log("IVA:", productVat)
}
getVat()

function getFinal() {
    console.log("Precio con IVA:", productVat + productTotal)
}
getFinal()




//EJERCICIO NÓMINA:
console.log("::::::::::EJERCICIO NÓMINA 2023:::::::::::::::::")
const empleado = { bruto: "", hijos: "", pagas: "" }
empleado.bruto = prompt("Introduce tu salario anual bruto")
empleado.hijos = prompt("Introduce el número de hijos")
empleado.pagas = prompt("Introduce el número de pagas")



if (empleado.bruto < 12450) {
    retencion = 0.19 * empleado.bruto
} else if (empleado.bruto >= 12450 && empleado.bruto < 20199) {
    retencion = 0.24 * empleado.bruto
} else if (empleado.bruto >= 20200 && empleado.bruto < 35199) {
    retencion = 0.30 * empleado.bruto
} else if (empleado.bruto >= 35200 && empleado.bruto < 59999) {
    retencion = 0.37 * empleado.bruto
} else if (empleado.bruto >= 60000 && empleado.bruto < 300000) {
    retencion = 0.45 * empleado.bruto
} else { retencion = 0.47 * empleado.bruto }
console.log("Retencion:", retencion)


if (empleado.hijos <= 0) {
    retencionHijos = 0
} else if (empleado.hijos > 0 && empleado.hijos <= 1) {
    retencionHijos = 0.20 * retencion
} else if (empleado.hijos > 1 && empleado.hijos <= 2) {
    retencionHijos = 0.25 * retencion
} else if (empleado.hijos >= 3) {
    retencionHijos = 0.30 * retencion
}
console.log("Restar a retención, por hijos:", retencionHijos)


const retencionTotal = retencion - retencionHijos
console.log("Retención total:", retencionTotal)


const netoAnual = empleado.bruto - retencionTotal
console.log("Neto anual:", netoAnual)


const netoMensual = netoAnual / 14
console.log("Neto Mensual:", netoMensual)