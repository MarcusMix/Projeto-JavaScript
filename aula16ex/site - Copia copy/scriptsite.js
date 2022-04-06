let valores = []
let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')


function adc() {
    if (num.value.length == 0 || num.value >= 100 || num.value  <= 0) {
        window.alert('Coloque um numero valido por favor')
        } else {
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `valor ${num.value} adicionado`
            lista.appendChild(item)
            
    }
num.value = ''
num.focus()
}

function resultado() {
    if (valores.length == 0) {
    window.alert('adicione valores antes de finalizar')
     } else {
    let total = valores.length //saber tamanho 
    let maior = valores[0] // pegar o primeiro key
    let menor = valores[0] // pegar o primeiro key
    let soma = 0 // começar no zero
    let media = 0 // começar no zero
    for(let pos in valores) { 
        soma += valores[pos]
        if(valores[pos] > maior)
            maior = valores[maior]
        if(valores[pos] < menor)
            menor = valores[pos]
     }

     media = soma / total
     res.innerHTML = '' //limpar
     res.innerHTML += `<p>ao todo temos, ${total} numeros cadastrados</p>`
     res.innerHTML += `<p>o maior numero é ${maior}</p>`
     res.innerHTML += `<p>o menor numero é ${menor}</p>`
     res.innerHTML += `<p>a media entre os valores é ${media}</p>`
}
}