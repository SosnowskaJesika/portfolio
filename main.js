document.addEventListener('DOMContentLoaded', function () {

    const nav = document.querySelector('nav');
    const pText = document.querySelector('.div-soon p');
    const text = [...'Kolejne projekty już wkrótce'];
    const dot = '.';
    const divMobileNav = document.querySelector('div.navigation');
    const iconBars = document.querySelector('i.fa-bars');
    const iconTimes = document.querySelector('i.fa-times');
    const mainContainer = document.querySelector('main');
    const bodyContainer = document.querySelector('body');

    const menuLinkHome = document.querySelector('.menu a:nth-child(1)')
    const menuLinkSkills = document.querySelector('.menu a:nth-child(2)')
    const menuLinkProject = document.querySelector('.menu a:nth-child(3)')
    const menuLinkContact = document.querySelector('.menu a:nth-child(4)')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            nav.style.height = 14 + 'vh';
        } else {
            nav.style.height = 0;
        }
    })

    if (location.pathname === '/') {
        menuLinkHome.classList.add('active')
    }

    if (location.pathname === '/my-skills.html') {
        menuLinkSkills.classList.add('active')
    }

    if (location.pathname === '/my-projects.html') {

        menuLinkProject.classList.add('active');

        let indexArray = 0;

        const addDots = () => {

            const addDot = () => {
                let j = 0;
                pText.textContent += dot;
                j++;

                if ([...pText.innerText].length === text.length + 4) {
                    pText.textContent = '';
                    let i = 0;
                    while (i < text.length) {
                        pText.textContent += text[i];
                        i++;
                    }
                }
            }
            const indexDots = setInterval(addDot, 250);
        }

        const addLetter = () => {
            pText.textContent += text[indexArray];
            indexArray++;
            if (indexArray === text.length) {
                clearInterval(indexTyping);
                setTimeout(addDots, 100);
            }
        }
        const indexTyping = setInterval(addLetter, 100);
    }

    if (location.pathname === '/contact.html') {
        menuLinkContact.classList.add('active')
    }

    const openMobileMenu = () => {
        iconBars.classList.add('hidden');
        iconTimes.classList.remove('hidden');
        divMobileNav.classList.add('open');
        mainContainer.classList.add('blur');
        bodyContainer.classList.add('open-menu');
    }

    const closeMobileMenu = () => {
        iconBars.classList.remove('hidden');
        iconTimes.classList.add('hidden');
        divMobileNav.classList.remove('open');
        mainContainer.classList.remove('blur');
        bodyContainer.classList.remove('open-menu');
    }

    iconBars.addEventListener('click', openMobileMenu);
    iconTimes.addEventListener('click', closeMobileMenu);

    document.addEventListener('click', (e) => {
        if (e.target !== divMobileNav &&
            e.target !== iconBars &&
            divMobileNav.classList.contains('open')
        ) {
            closeMobileMenu();
        }
    })
});