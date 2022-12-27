var data = new Date();
var horaAtual = data.getHours(); //chama o horário atual    
const nove = document.querySelector('#nove-item')
const dez = document.querySelector('#dez-item')
const onze = document.querySelector('#onze-item')
const doze = document.querySelector('#doze-item')
const treze = document.querySelector('#treze')
const quatorze =  document.querySelector('#quatorze')
const quinze = document.querySelector('#quinze')
const dezeseis = document.querySelector('#dezeseis')
const dezesete = document.querySelector('#dezesete')
const dezoito = document.querySelector('#dezoito')
if(horaAtual > 9){
    nove.innerHTML = ''
    nove.innerHTML = 'Horário indisponível' 
    nove.style.color = 'red'
} else {
    nove.innerHTML = '9:00'
    function selecionarnove(){
        var divnove = document.querySelector('#nove') 
        divnove.style.background = 'green'
    }
}
if(horaAtual > 10){
    dez.innerHTML = ''
    dez.innerHTML = 'Horário indisponível'
    dez.style.color = 'red'
} else {
    dez.innerHTML = '10:00'
    function selecionardez(){
        var divdez = document.querySelector('#dez') 
        divdez.style.background = 'green'
    }
}

if (horaAtual > 11){
    onze.innerHTML = ''
    onze.innerHTML = 'Horário indisponível'
    onze.style.color = 'red'
} else{
    onze.innerHTML ='11:00'
    function selecionaronze(){
        var divonze = document.querySelector('#onze') 
        divonze.style.background = 'green'
        
    }
}
if(horaAtual > 12){
    doze.innerHTML = ''
    doze.innerHTML ='Horário indisponível'
    doze.style.color = 'red'
} else{
    doze.innerHTML = '12:00'
    function selecionardoze(){
        var divdoze = document.querySelector('#doze') 
        divdoze.style.background = 'green'   
    }
}

if(horaAtual > 13){
    treze.innerHTML = ''
    treze.innerHTML ='Horário indisponível'
    treze.style.color = 'red'
} else{
    treze.innerHTML = '13:00'
    function selecionartreze(){
        var divtreze = document.querySelector('#treze-div') 
        divtreze.style.background = 'green'   
    }
}

if(horaAtual > 14){
    quatorze.innerHTML = ''
    quatorze.innerHTML ='Horário indisponível'
    quatorze.style.color = 'red'
} else{
    quatorze.innerHTML = '14:00'
    function selecionarquatorze(){
        var divquatorze = document.querySelector('#quatorze-div') 
        divquatorze.style.background = 'green'   
    }
}
if(horaAtual>15){
    quinze.innerHTML=''
    quinze.innerHTML ='Horário Indisponível'
    quinze.style.color = 'red'
} else {
    quinze.innerHTML = '15:00'
    function selecionarquinze(){
        var divquinze = document.querySelector('#quinze-div') 
        divquinze.style.background = 'green'   
    }
}
if(horaAtual>16) {
    dezeseis.innerHTML=''
    dezeseis.innerHTML = 'Horário Indisponível'
    dezeseis.style.color = 'red'
} else{
    dezeseis.innerHTML = '16:00'
    function selecionardezeseis(){
        var divdezeseis = document.querySelector('#dezeseis-div') 
        divdezeseis.style.background = 'green'   
    }
}
if(horaAtual>17){
    dezesete.innerHTML=''
    dezesete.innerHTML = 'Horário Indisponível'
    dezesete.style.color = 'red'
} else{
    dezesete.innerHTML = '17:00'
    function selecionardezesete(){
        var divdezesete = document.querySelector('#dezesete-div') 
        divdezesete.style.background = 'green'   
    }
}
if(horaAtual>18){
    dezoito.innerHTML=''
    dezoito.innerHTML = 'Horário Indisponível'
    dezoito.style.color = 'red'
} else{
    dezoito.innerHTML = '18:00'
    function selecionardezoito(){
        var divoito = document.querySelector('#dezoito-div') 
        divoito.style.background = 'green'   
    }
}
function agendar(){
    var nome = document.querySelector(".nomeususario").value
    if (nome.length == 0){
        window.alert('[ERRO, VERIFIQUE OS DADOS E TENTE NOVAMENTE!] ')
    } else if(nome.length > 0) {
        var paragrafo = document.querySelector('.paragrafoagradecendo')
        paragrafo.innerHTML = `Horário marcado com sucesso, ${nome} muito obrigado pela preferencia!`
        console.log(nome)
    }    
}   









