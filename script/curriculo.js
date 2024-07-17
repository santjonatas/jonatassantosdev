function entrarMouseBaixar(){
    botao_baixar.style.backgroundImage = 'linear-gradient(to right,  #376EE6, #3637E5, #7037E6)'
    botao_baixar.style.boxShadow = '0px 0px 15px #3637E5'
}
function sairMouseBaixar(){
    botao_baixar.style.backgroundImage = 'linear-gradient(to right, #22448E, #22228E, #46228E)'
    botao_baixar.style.boxShadow = '0px 0px 5px #1C6572'
}
function clicarMouseBaixar(){
    botao_baixar.style.backgroundImage = 'linear-gradient(to right, #0D1A37, #0D0D37, #1B0D37)'
}
function desclicarMouseBaixar(){
    botao_baixar.style.backgroundImage = 'linear-gradient(to right,  #376EE6, #3637E5, #7037E6)'
}

function entrarMouseVoltar(){
    botao_voltar.style.border = 'solid 3px #376EE6'
    botao_voltar.style.color = '#376EE6'
    botao_voltar.style.boxShadow = '0px 0px 15px #3637E5'
}
function sairMouseVoltar(){
    botao_voltar.style.border = 'solid 3px #22448E'
    botao_voltar.style.color = '#22448E'
    botao_voltar.style.boxShadow = '0px 0px 5px #1C6572'
}
function clicarMouseVoltar(){
    botao_voltar.style.border = 'solid 3px #0D1A37'
    botao_voltar.style.color = '#0D1A37'
}
function desclicarMouseVoltar(){
    botao_voltar.style.border = 'solid 3px #376EE6'
    botao_voltar.style.color = '#376EE6'
}

let botao_baixar = document.getElementById('baixar')
let botao_voltar = document.getElementById('voltar')

botao_baixar.addEventListener('mouseenter', entrarMouseBaixar)
botao_baixar.addEventListener('mouseout', sairMouseBaixar)
botao_baixar.addEventListener('mousedown', clicarMouseBaixar)
botao_baixar.addEventListener('mouseup', desclicarMouseBaixar)

botao_voltar.addEventListener('mouseenter', entrarMouseVoltar)
botao_voltar.addEventListener('mouseout', sairMouseVoltar)
botao_voltar.addEventListener('mousedown', clicarMouseVoltar)
botao_voltar.addEventListener('mouseup', desclicarMouseVoltar)