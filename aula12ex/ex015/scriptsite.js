function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('erro! verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                // criança   
                img.setAttribute('src', 'criancaHomem.png')   
            } else if (idade >= 10 && idade <= 21) {
                // jovem
                img.setAttribute('src', 'homemAdolescente.png')   
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homemAdulto.png')   
            } else {
                //idoso
                img.setAttribute('src', 'homemIdoso.png')   
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança      
                img.setAttribute('src', 'criancaMulher.png')   
            } else if (idade >= 10 && idade <= 21) {
                // jovem
                img.setAttribute('src', 'mulherAdolescente.png')   
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulherAdulta.png')   
            } else {
                //idoso
                img.setAttribute('src', 'mulherIdosa.png')   
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}