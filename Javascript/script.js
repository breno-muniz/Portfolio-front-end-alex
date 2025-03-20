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
const buttons = document.querySelectorAll('.button-modal');
const modal = document.getElementById('mymodal');
const close = document.querySelector('.close');
const modalTitle = document.getElementById('modal-title');
const imgModal = document.getElementById('img-modal');
const modalDesc = document.querySelector('.descripition-p');
const modalTecnologies = document.getElementById('tecnologias-modal');
const modalTitleTecnologias = document.getElementById('tecnologias-title-modal');
const buttonGithub = document.getElementById('github-button');
const buttonProjeto = document.getElementById('button-projeto');

const projetos = [
    {
        titulo: 'U.bank',
        descricao: 'U.bank foi desenvolvido com HTML, CSS, JavaScript e estilizado utilizando Sass. O projeto proporciona uma interface que seja capaz de captar um possível cliente ou investidor para criar sua conta no banco. O projeto foi criado com foco em UX e UI, utilizando o Figma para prototipagem.',
        img: 'Imagens/projetos/U.bank.png',
        tituloButtonGithub: "Ver no Github",
        tituloButtonProjeto: "Ver Projeto",
        tituloModalTec: "Tecnologias ultilizadas",
        github: "https://github.com/seu-repositorio",
        linkProjeto: "https://breno-muniz.github.io/Projeto-U.bank/",
        tecnologies: [
            'Imagens/Icones/Figma.png',
            'Imagens/Icones/Html.png',
            'Imagens/Icones/Js.png',
            'Imagens/Icones/sass.png',
            'Imagens/Icones/css.png'
        ]
    },
    {
        titulo: 'Teste Projeto',
        tituloModalTec: "Tecnologias ultilizadas",
        descricao: 'testestesttestsetseestestest',
        img: 'Imagens/projetos/U.bank.png',
        tituloButtonGithub: "Ver no Github",
        tituloButtonProjeto: "Ver Projeto",
        github: "",
        linkProjeto: "https://breno-muniz.github.io/Projeto-U.bank/",
        tecnologies: [
            'Imagens/Icones/sass.png',
            'Imagens/Icones/css.png'
        ]
    }
];

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const projeto = projetos[index];

        modalTitleTecnologias.textContent = projeto.tituloModalTec;
        modalTitle.textContent = projeto.titulo;
        imgModal.src = projeto.img;
        modalDesc.textContent = projeto.descricao;
        buttonProjeto.textContent = projeto.tituloButtonProjeto;
        buttonGithub.textContent = projeto.tituloButtonGithub;
        buttonGithub.href = projeto.github;
        buttonProjeto.href = projeto.linkProjeto;


        modalTecnologies.querySelectorAll('img').forEach(img => img.remove());

        
        projeto.tecnologies.forEach((tech) => {
            const img = document.createElement('img');
            img.src = tech;
            modalTecnologies.appendChild(img);
        });

        
        modal.classList.add('modal-active');

        document.body.style.overflow = "hidden";
    });
});

close.addEventListener('click', () => {
    modal.classList.remove('modal-active');

    document.body.style.overflow = "auto";
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('modal-active');

        
        document.body.style.overflow = "auto";
    }
});



