// Menu Mobile

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx');
        });

        nav.addEventListener('click', () => {
            nav.classList.remove('active-menu-mobile');
            toggle.classList.remove('active-bx');
        });

        document.body.addEventListener('click', () => {
            if (nav.classList.contains('active-menu-mobile')) {
                nav.classList.remove('active-menu-mobile');
                toggle.classList.remove('active-bx');
            }
        });
    }
}

showMenu('bx', 'menu-mobile');


// MODAL
const button = document.querySelector('.button-modal');
const modal = document.getElementById('mymodal');
const close = document.querySelector('.close');

button.addEventListener('click', () => {
    modal.classList.add('modal-active');
});

close.addEventListener('click', () => {
    modal.classList.remove('modal-active');
});

const projetos = [{
    titulo: 'U.bank',
    descricao: 'Aplicativo de banco digital',
    img: 'Imagens/projetos/U.bank.png',
    tituloTecnologias: 'Tecnologias utilizadas:',
    tituloButtonGithub:"Ver no Github",
    tituloButtonProjeto:"Ver Projeto",
    github:"",
    linkProjeto:"https://breno-muniz.github.io/Projeto-U.bank/",
    tecnologies: ['Imagens/Icones/Figma.png', 'Imagens/Icones/Html.png', 'Imagens/Icones/Js.png', 'Imagens/Icones/sass.png', 'Imagens/Icones/css.png']
}]

const modalTitle = document.getElementById('modal-title');
const imgModal = document.getElementById('img-modal');
const modalDesc = document.querySelector('.descripition-p');
const modalTecnologies = document.getElementById('tecnologias-modal');
const modalTitleTecnologias = document.getElementById('tenclogias-title-modal');
const buttonGitguhb= document.getElementById('github-button');
const buttonProjeto= document.getElementById('button-projeto');



buttonGitguhb.classList.add('github-button');
buttonProjeto.classList.add('button-projeto');
modalTitleTecnologias.textContent = projetos[0].tituloTecnologias;
modalTitle.textContent = projetos[0].titulo;
imgModal.src = projetos[0].img;
modalDesc.textContent = projetos[0].descricao;
buttonProjeto.textContent=projetos[0].tituloButtonProjeto;
buttonGitguhb.href=projetos[0].github;
buttonProjeto.href=projetos[0].linkProjeto;
buttonProjeto.target="_blank";


const tecnologies = projetos[0].tecnologies;

tecnologies.forEach((tecnologies) => {
    const img = document.createElement('img');
    img.src = tecnologies;
    modalTecnologies.appendChild(img);
});

