// ----- FUNÇÕES -----
// funções informações
    // função formação
    function entrarMouseBotaoAbaFormacao(){
        formacao.style.backgroundImage = 'linear-gradient(to left, #3637E5, #7037E6)'
        formacao.style.display = 'inline-block'
        formacao.style.webkitBackgroundClip = 'text'
        formacao.style.color = 'transparent'
    }
    function sairMouseBotaoAbaFormacao(){
        formacao.style.color = 'white'
    }
    function clicarMouseBotaoAbaFormacao(){
        formacao.style.backgroundImage = 'linear-gradient(to left, #22228E, #46228E)'
        margin_header_form.scrollIntoView({ behavior: "smooth"})
    }
    function desclicarMouseBotaoAbaFormacao(){
        formacao.style.backgroundImage = 'linear-gradient(to left, #3637E5, #7037E6)'
    }
    // função contact
    function entrarMouseBotaoAbaContact(){
        contact.style.backgroundImage = 'linear-gradient(to left, #3637E5, #7037E6)'
        contact.style.display = 'inline-block'
        contact.style.webkitBackgroundClip = 'text'
        contact.style.color = 'transparent'
    }
    function sairMouseBotaoAbaContact(){
        contact.style.color = 'white'
    }
    function clicarMouseBotaoAbaContato(){
        contact.style.backgroundImage = 'linear-gradient(to left, #22228E, #46228E)'
        aba_contact.scrollIntoView({ behavior: "smooth"})
    }
    function desclicarMouseBotaoAbaContato(){
        contact.style.backgroundImage = 'linear-gradient(to left, #3637E5, #7037E6)'
    }
    function entrarMouseBotaoAbaCertificacoes(){
        certificacoes.style.backgroundImage = 'linear-gradient(to left, #3637E5, #7037E6)'
        certificacoes.style.display = 'inline-block'
        certificacoes.style.webkitBackgroundClip = 'text'
        certificacoes.style.color = 'transparent'
    }
    function sairMouseBotaoAbaCertificacoes(){
        certificacoes.style.color = 'white'
    }
    function clicarMouseBotaoAbaCertificacoes(){
        certificacoes.style.backgroundImage = 'linear-gradient(to left, #22228E, #46228E)'
    }
    function desclicarMouseBotaoAbaCertificacoes(){
        certificacoes.style.backgroundImage = 'linear-gradient(to left, #3637E5, #7037E6)'
    }
    


    // função github
    function entrarMouseBotaoAbaGithub(){
        github.style.boxShadow = '0px 0px 10px rgb(211, 211, 211)'
        github.style.borderRadius = '50px'
    }
    function sairMouseBotaoAbaGithub(){
        github.style.boxShadow = 'none'
        github.style.borderRadius = ''
    }
    //função linkedin
    function entrarMouseBotaoAbaLinkedin(){
        linkedin.style.boxShadow = '0px 0px 10px rgb(211, 211, 211)'
        linkedin.style.borderRadius = '7px'
    }
    function sairMouseBotaoAbaLinkedin(){
        linkedin.style.boxShadow = 'none'
        linkedin.style.borderRadius = ''
    }
    //função instagram
    function entrarMouseBotaoAbaInstagram(){
        instagram.style.boxShadow = '0px 0px 10px rgb(211, 211, 211)'
        instagram.style.borderRadius = '12px'
    }
    function sairMouseBotaoAbaInstagram(){
        instagram.style.boxShadow = 'none'
        instagram.style.borderRadius = ''
    }

// funções do menu principal
    // sobre mim
    function entrarMouseBotaoSobreMim(){
        sobre_mim.style.backgroundImage = 'linear-gradient(to right,  #376EE6, #3637E5, #7037E6)'
        sobre_mim.style.boxShadow = '0px 0px 15px #3637E5'
    }
    function sairMouseBotaoSobreMim(){
        sobre_mim.style.backgroundImage = 'linear-gradient(to right, #22448E, #22228E, #46228E)'
        sobre_mim.style.boxShadow = '0px 0px 5px #1C6572'
    }
    function clicarMouseBotaoSobreMim(){
        sobre_mim.style.backgroundImage = 'linear-gradient(to right, #0D1A37, #0D0D37, #1B0D37)'
        margin_header_sobre_mim.scrollIntoView({ behavior: "smooth"})
    }
    function desclicarMouseBotaoSobreMim(){
        sobre_mim.style.backgroundImage = 'linear-gradient(to right,  #376EE6, #3637E5, #7037E6)'
    }
    // currículo
    function entrarMouseBotaoCurriculo(){
        botao_curriculo.style.border = 'solid 3px #376EE6'
        botao_curriculo.style.color = '#376EE6'
        botao_curriculo.style.boxShadow = '0px 0px 15px #3637E5'
    }
    function sairMouseBotaoCurriculo(){
        botao_curriculo.style.border = 'solid 3px #22448E'
        botao_curriculo.style.color = '#22448E'
        botao_curriculo.style.boxShadow = '0px 0px 5px #1C6572'
    }
    function clicarMouseBotaoCV(){
        botao_curriculo.style.border = 'solid 3px #0D1A37'
        botao_curriculo.style.color = '#0D1A37'
    }
    function desclicarMouseBotaoCV(){
        botao_curriculo.style.border = 'solid 3px #376EE6'
        botao_curriculo.style.color = '#376EE6'
    }
    // foto de perfil
    function entrarMouseBotaoPerfil(){
        gradient.style.boxShadow = '0px 0px 27px #1C6572' 
    }
    function sairMouseBotaoPerfil(){
        gradient.style.boxShadow = '0px 0px 17px #1C6572'
    }

// função dos itens-projetos
function entrarMouseItemProjeto(){
    this.style.backgroundColor = 'rgba(255, 255, 255, 0.219)'
    this.style.boxShadow = '0px 0px 15px #3637E5'
}

function sairMouseItemProjeto(){
    this.style.backgroundColor = 'rgba(255, 255, 255, 0.11)'
    this.style.boxShadow = ''
}



let novoElementoP = document.createElement('p');
let icone_tecnologia;

// função dos hard-skills
function entrarMouseHardSkills() {
    this.style.backgroundColor = 'rgba(255, 255, 255, 0.219)';
    this.style.boxShadow = '0px 0px 15px #3637E5';

    let hard_skill = this;
    let texto_id = hard_skill.id;

    icone_tecnologia = this.children[0];

    icone_tecnologia.style.width = '40px';
    icone_tecnologia.style.height = '40px';
    icone_tecnologia.style.margin = '0px';

    novoElementoP.textContent = texto_id;

    novoElementoP.style.color = 'white';
    novoElementoP.style.fontSize = '11px';
    novoElementoP.style.height = '11px';
    novoElementoP.style.fontFamily = 'my font';
    novoElementoP.style.fontWeight = 'bold'
    novoElementoP.style.textAlign = 'center';
    novoElementoP.style.display = 'flex';
    novoElementoP.style.alignItems = 'center';
    novoElementoP.style.justifyContent = 'center';
    novoElementoP.style.margin = '0px';

    this.appendChild(novoElementoP);

    novoElementoP.addEventListener('mouseenter', function(event) {
        event.stopPropagation(); // Impede que o evento chegue ao pai novamente
    });
}
function sairMouseHardSkills(){

    this.style.backgroundColor = 'rgba(255, 255, 255, 0.11)'
    this.style.boxShadow = ''

    this.removeChild(novoElementoP)

    icone_tecnologia.style.margin = 'auto'
    icone_tecnologia.style.width = '55px'
    icone_tecnologia.style.height = '55px'
}



// ----- VARIÁVEIS -----
// body
let corpo = document.getElementById('corpo')

// variável cabecalho e menu
let cabecalho_e_menu = document.getElementById('cabecalho-e-menu')
    //variável cabecalho
    let cabecalho = document.getElementById('cabecalho')
    //div botao e portifolio
    let botao_e_portfolio = document.getElementById('aba-botao-aba-lateral-e-portfolio')
    // variável div das navegações
    let informacoes = document.getElementById('informacoes')
    let formacao = document.getElementById('formacao')
    let aba_formacao = document.getElementById('aba-formacao')
    let contact = document.getElementById('contact')
    let aba_contact = document.getElementById('aba-contato')
    let certificacoes = document.getElementById('certificacoes')
    let github =  document.getElementById('github')
    let linkedin = document.getElementById('linkedin')
    let instagram = document.getElementById('instagram')
    // variável dos temas
    let aba_tema = document.getElementById('aba-tema')
    let botao_lua = document.getElementById('botao-lua')

// variável do menu principal
const menu_principal = document.querySelector('.menu')
    let inicio_da_pag = document.getElementById('inicio-da-pagina')
    // sobre mim
    let sobre_mim = document.getElementById('botao-sobre-mim')
    let texto_sobre_mim = document.getElementById('sobre-mim')
    let aba_sobre_mim = document.getElementById('aba-sobre-mim')
    let botao_curriculo = document.getElementById('botao-curriculo')
    //foto de perfil
    let foto_perfil =  document.getElementById('foto-perfil')
    let gradient = document.getElementById('gradient')

    // margin header
    let margin_header_sobre_mim = document.getElementById('margin-for-header_sobre_mim')
    let margin_header_form = document.getElementById('margin-for-header_form')

// variaveis do projeto
let item_projeto = document.querySelectorAll('.item-projeto')
let p1 = document.getElementById('pjt1')

// variaveis hard skills
let item_hard = document.querySelectorAll('.item-hard')



// ----- EVENTOS -----

// eventos dos botões de navegação do header 'informações'
    // formação
    formacao.addEventListener('mouseenter', entrarMouseBotaoAbaFormacao)
    formacao.addEventListener('mouseout', sairMouseBotaoAbaFormacao)
    formacao.addEventListener('mousedown', clicarMouseBotaoAbaFormacao)
    formacao.addEventListener('mouseup', desclicarMouseBotaoAbaFormacao)
    // contact
    contact.addEventListener('mouseenter', entrarMouseBotaoAbaContact)
    contact.addEventListener('mouseout', sairMouseBotaoAbaContact)
    contact.addEventListener('mousedown', clicarMouseBotaoAbaContato)
    contact.addEventListener('mouseup', desclicarMouseBotaoAbaContato)
    // certificações
    certificacoes.addEventListener('mouseenter', entrarMouseBotaoAbaCertificacoes)
    certificacoes.addEventListener('mouseout', sairMouseBotaoAbaCertificacoes)
    certificacoes.addEventListener('mousedown', clicarMouseBotaoAbaCertificacoes)
    certificacoes.addEventListener('mouseup', desclicarMouseBotaoAbaCertificacoes)

    // github
    github.addEventListener('mouseenter', entrarMouseBotaoAbaGithub)
    github.addEventListener('mouseout', sairMouseBotaoAbaGithub)
    // linkedin
    linkedin.addEventListener('mouseenter', entrarMouseBotaoAbaLinkedin)
    linkedin.addEventListener('mouseout', sairMouseBotaoAbaLinkedin)
    //instagram
    instagram.addEventListener('mouseenter', entrarMouseBotaoAbaInstagram)
    instagram.addEventListener('mouseout', sairMouseBotaoAbaInstagram)



// eventos menu principal
    // sobre mim
    sobre_mim.addEventListener('mouseenter', entrarMouseBotaoSobreMim)
    sobre_mim.addEventListener('mouseout', sairMouseBotaoSobreMim)
    sobre_mim.addEventListener('mousedown', clicarMouseBotaoSobreMim)
    sobre_mim.addEventListener('mouseup', desclicarMouseBotaoSobreMim)
    // currículo
    botao_curriculo.addEventListener('mouseenter', entrarMouseBotaoCurriculo)
    botao_curriculo.addEventListener('mouseout', sairMouseBotaoCurriculo)
    botao_curriculo.addEventListener('mousedown', clicarMouseBotaoCV)
    botao_curriculo.addEventListener('mouseup', desclicarMouseBotaoCV)
    // foto de perfil
    foto_perfil.addEventListener('mouseenter', entrarMouseBotaoPerfil)
    foto_perfil.addEventListener('mouseout', sairMouseBotaoPerfil) 
    // itens-projetos
   Array.from(item_projeto).forEach(function(evt){
    evt.addEventListener('mouseover', entrarMouseItemProjeto)
   })
   Array.from(item_projeto).forEach(function(evt){
    evt.addEventListener('mouseout', sairMouseItemProjeto)
   })
    // hard-skills
    Array.from(item_hard).forEach(function(evt){
    evt.addEventListener('mouseenter', entrarMouseHardSkills)
    })

    Array.from(item_hard).forEach(function(evt){
    evt.addEventListener('mouseleave', sairMouseHardSkills)
    })
