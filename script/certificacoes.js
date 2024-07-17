
function entrarMouseFiltrar(){
    botao_filtrar.style.backgroundImage = 'linear-gradient(to right,  #376EE6, #3637E5, #7037E6)'
    botao_filtrar.style.boxShadow = '0px 0px 15px #3637E5'
}
function sairMouseFiltrar(){
    botao_filtrar.style.backgroundImage = 'linear-gradient(to right, #22448E, #22228E, #46228E)'
    botao_filtrar.style.boxShadow = '0px 0px 5px #1C6572'
}
function clicarMouseFiltrar(){
    botao_filtrar.style.backgroundImage = 'linear-gradient(to right, #0D1A37, #0D0D37, #1B0D37)'
}
function desclicarMouseFiltrar(){
    botao_filtrar.style.backgroundImage = 'linear-gradient(to right,  #376EE6, #3637E5, #7037E6)'
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

// função dos itens-certificados
function entrarMouseItemCertificado(){
    this.style.backgroundColor = 'rgba(255, 255, 255, 0.219)'
    this.style.boxShadow = '0px 0px 15px #3637E5'
}

function sairMouseItemCertificado(){
    this.style.backgroundColor = 'rgba(255, 255, 255, 0.11)'
    this.style.boxShadow = ''
}



// ----- VARIÁVEIS -----
// body

// variaveis certificados
let item_certificado = document.querySelectorAll('.item-certificado')

let botao_filtrar = document.getElementById('filtrar')
let botao_voltar = document.getElementById('voltar')



// ----- EVENTOS -----

// itens-certificados
Array.from(item_certificado).forEach(function(evt){
evt.addEventListener('mouseover', entrarMouseItemCertificado)
})
Array.from(item_certificado).forEach(function(evt){
evt.addEventListener('mouseout', sairMouseItemCertificado)
})

botao_filtrar.addEventListener('mouseenter', entrarMouseFiltrar)
botao_filtrar.addEventListener('mouseout', sairMouseFiltrar)
botao_filtrar.addEventListener('mousedown', clicarMouseFiltrar)
botao_filtrar.addEventListener('mouseup', desclicarMouseFiltrar)

botao_voltar.addEventListener('mouseenter', entrarMouseVoltar)
botao_voltar.addEventListener('mouseout', sairMouseVoltar)
botao_voltar.addEventListener('mousedown', clicarMouseVoltar)
botao_voltar.addEventListener('mouseup', desclicarMouseVoltar)



document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('filtrar');

    selectElement.addEventListener('change', function() {
        const selectedValue = this.value;
        const certificados = document.querySelectorAll('.item-certificado');

        certificados.forEach(certificado => {
            const nomeCertificado = certificado.querySelector('.nome-do-certificado').textContent;
            const tecsCertificado = certificado.querySelector('.tecs-certificado').textContent;

            if (selectedValue === 'Todos' || nomeCertificado.includes(selectedValue) || tecsCertificado.includes(selectedValue)) {
                certificado.style.display = '';
            } else {
                certificado.style.display = 'none';
            }
        });
    });
});
