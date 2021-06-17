var num = document.getElementById('num')
var tab = document.getElementById('seltab')
 

function calcular(){
    if(num.value.length == 0){
        alert('Verifique os dados e tente novamente!')
    } else{
        let c = 1
        var n = Number(num.value)
        tab.innerHTML = ''
        for(c; c <=10; c++ ){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            
        }
    }
}