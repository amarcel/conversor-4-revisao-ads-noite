let campoReal = document.getElementById("real")
let campoDolar = document.getElementById("dolar")
let campoEuro = document.getElementById("euro")
let campoErro = document.getElementById("erro")

function converter() {
    // pegar o valor de real digitado:
    let realDigitado = campoReal.value
    // converter de string para número:
    let real = parseFloat(realDigitado)
    // verificar se o valor informado é positivo (validação):
    if (real > 0) {
        // realizar as conversões e inserir os valores dentro dos inputs:
        // fazer o arredondamento dos valores:
        campoDolar.value = (real / 4.50).toFixed(2)
        campoEuro.value = (real / 5.15).toFixed(2)
        campoErro.innerHTML = ""
    } else {
        campoErro.innerHTML = "Erro! O valor de real precisa ser positivo."
    }
} // fim do converter

function converterEnter(tecla) {
    // foi pressionado enter?
    if (tecla === 13) { // 13 = enter
        converter()
    }
}