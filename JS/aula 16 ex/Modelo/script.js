const numeros = []

function add(){
    let mandar = document.getElementById('num')   
    if(mandar.value.length == 0) {
        alert('Para continuar, insira um número')
    } else if(mandar.value < 1 || mandar.value > 100){
        alert('Para continuar, insira um valor válido')
    } else{
        if(numeros.includes(`${mandar.value}`)){
            alert('Esse número já está salvo')
            mandar.value = ''   
        } else{
        let mandarnum = Number(mandar.value)
        numeros.push(mandarnum)
        mandar.value = ''       
        let tab = document.getElementById('tabela')
        let item = document.createElement('option')
        item.text =`Valor ${mandarnum} adicionado.`
        item.value = `tab${mandarnum}`
        tab.appendChild(item)

        
        }
    }
}
 /*
let largest = 0
        for(i = 0; i <= largest; i++){
            if(numeros[i] > largest){
                 largest = numeros[i]
            }
        }

*/




function fim(){
    if(numeros.length == 0){
        alert('Adicione valores antes de finalizar')
    } else{
    const largest = Math.max(...numeros)
    const min = Math.min(...numeros)
    const somatoria = numeros.reduce((a,b) => a + b, 0)
    const med = somatoria / numeros.length
    const total = document.getElementById('total')
    const maior= document.getElementById('maior')   
    const menor = document.getElementById('menor')
    const soma = document.getElementById('soma')
    const media = document.getElementById('media')
    total.innerHTML = (`Ao todo, temos ${numeros.length} números cadastrados.`)
    maior.innerHTML = (`O maior número entre eles é: ${largest}`)
    menor.innerHTML = (`O menor número entre eles é: ${min}`)
    soma.innerHTML = (`A soma dos números é: ${somatoria}`)
    media.innerHTML = (`A média dos números é: ${med}`)
    }
    
}