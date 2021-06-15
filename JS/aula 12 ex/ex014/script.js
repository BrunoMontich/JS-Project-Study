function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    //msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >=0 && hora < 12){
    //bom dia
    img.src = 'manha.png'
    document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
    //boa tarde
    img.src = 'tarde.png'
    document.body.style.background = '#b9846f'
    } else{
    //boa noite
    img.src = 'noite.png'
    document.body.style.background = '#515154'
    }
}
function hours () {
    var hours = document.getElementById ('hours')
 //crie uma div com id="hours" no html
    var date1 = new Date ()
    var gthours = date1.getHours()
    var gtminutes = date1.getMinutes()
    var gtseconds = date1.getSeconds()

        if (gthours < 10) {
            gthours = `0${gthours}`
        }
        if (gtminutes < 10) {
            gtminutes = `0${gtminutes}`
        }

        if (gtseconds < 10) {
            gtseconds =`0${gtseconds}`
        }
                
    hours.textContent = `Agora são ${gthours}:${gtminutes}:${gtseconds}`
}
    var tictac = setInterval (hours, 1000)
hours()