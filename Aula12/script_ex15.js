function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert(`[ERRO] O Valor ${fAno.value} Não é aceito!`)
    } else { 
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked ) {
            genero = 'Homem'
            if ( idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/baby.jpg')
            } else if ( idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/adolescente-menino.jpg')
            } else if ( idade < 50 ) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-homem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-homem.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
              if ( idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/baby.jpg')
            } else if ( idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/adolescente-menina.jpg')
            } else if ( idade < 50 ) {
                // Adulto
                img.setAttribute('src', 'imagens/adulta-mulher.jpg')
            } else {
                // Idosa
                img.setAttribute('src', 'imagens/idosa-mulher.jpg')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        img.style.width = "250px"
        img.style.height = "250px"
        img.style.borderRadius = "50%"
        img.style.objectFit = "cover"
        res.appendChild(img) // Adiciona na div res a img que criamos também pelo script
    }
}