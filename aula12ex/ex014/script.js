function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
  
    
msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}.`
if (hora <= 11) {
    img.src = 'manha1.png'
    document.body.style.background = '#87CEEB'
} else if (hora >= 12 && hora <18 ) {
    img.src = 'tarde1.png'
    document.body.style.background = '#FFA07A'
} else {
    img.src = 'noite1.png'
    document.body.style.background = '#696969'
}
}