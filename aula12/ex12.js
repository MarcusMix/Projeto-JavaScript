var agora = new Date()
var hora = agora.getHours()
console.log(`agora sao exatamente ${hora} horas.`)
if (hora <= 5 ) {
    console.log('boa madruga rapá')
} else if (hora < 12) {
    console.log(`bom dia xuxu`)
} else if (hora < 18) {
    console.log(`boa tarde`)
} else {
    console.log('boa noite')
}

// quebrei a cabeça mais foi :D