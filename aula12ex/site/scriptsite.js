function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} minutos.`
    if (hora >= 0 && hora < 12) {
    // bom dia
        img.src = 'manha.png'
        document.body.style.background = '#ecc2e0'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#705753'
    } else {
        // boa noite
        img.src = 'noite.png'
        document.body.style.background = '#3f434a'
    }
}