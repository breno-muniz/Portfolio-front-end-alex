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
