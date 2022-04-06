let valor = [8, 9, 3, 1, 8]
valor.sort()
console.log(valor)

for (let pos=0; pos < valor.length; pos++) {
    console.log(`a posicao ${pos} tem  o valor ${valor[pos]}` )
} 

for (let pos in valor) {
    console.log(` a posicao ${pos} tem o valor ${valor[pos]}`)
}

