function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res =  document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada: ${idade} anos`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'um Homem'
            if (idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'imagens/bhomem.png')
            } else if (idade <= 21){
                //jovem
                img.setAttribute('src', 'imagens/jhomem.png')
            } else if (idade <= 49){
                //adulto
                img.setAttribute('src', 'imagens/ahomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/vhomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'uma Mulher'
            if (idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'imagens/bmulher.png')
            } else if (idade <= 21){
                //jovem
                img.setAttribute('src', 'imagens/jmulher.png')
            } else if (idade <= 49){
                //adulto
                img.setAttribute('src', 'imagens/amulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/vmulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)
        img.style.marginTop = '20px'
    }
}