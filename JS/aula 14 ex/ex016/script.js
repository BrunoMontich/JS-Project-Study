var ini = document.getElementById('inicio')
var fim = document.getElementById('final')
var passo = document.getElementById('passo')
var res = document.getElementById('res')

function contar(){
        if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
            res.innerText = 'Impossível contar!'
            // window.alert('Verifique os dados e tente novamente')
            
        } else{
            res.innerHTML = 'Contando: <br>'
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)

            if(p <= 0){
                window.alert('Passo inválido! Considerando passo = 1')
                p = 1
            }
            if( i < f){
                // contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
            } else{
                // contagem regressiva
                for( let c = i; c >= f; c -= p){
                    res.innerHTML += ` ${c} \u{1F449}`
                }
                res.innerHTML += `\u{1F3C1}`
            }
        }
      
     
}