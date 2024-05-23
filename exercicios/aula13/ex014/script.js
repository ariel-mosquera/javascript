function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours ()
    var min = data.getMinutes ()
    msg.innerHTML = `Agora são ${hora}:${min}.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#F9D19D'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#8E5961'
    } else {
        //Boa noite!
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#1D262F'
    }
}