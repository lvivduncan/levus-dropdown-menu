// debug
const echo = console.log;

{
    window.addEventListener('resize', toggleMobileMenu);

    // отримуємо нашу гарну менюшечку
    const levusMenu = document.querySelector('.levus-menu');

    // додаємо кнопку коло парента
    levusMenu.querySelectorAll('.parent').forEach(item => {
        const el = document.createElement('span');
        item.appendChild(el);
    });

    // викликаємо функцію, щоб зміна відбувалася не тільки при ресайзі, а й при оновленні сторінки
    toggleMobileMenu();

    // відкриваємо/закриваємо мобільне меню
    document.addEventListener('click', e => {
        if (e.target.classList == 'levus-menu levus-menu-mobile') {
            document.querySelector('.levus-menu ul').classList.toggle('block');
        }
    });

    // розкриваємо блоки у підпунктів
    levusMenu.addEventListener('click', e => {
        if (e.target.tagName == 'SPAN') {            
            // 2 елемент (ul)
            e.target.parentNode.children[1].classList.toggle('open');
            // сусідні елементи ul мають автоматично закриватися
            // TODO

            for (let index = 0; index < e.target.parentNode.children.length; index++) {
                echo(index);
                echo(e.target.parentNode.parentNode.children[index]);
            }
        }
    });

    // вмикаємо/вимикаємо мобільне меню
    function toggleMobileMenu(){       
        if (window.innerWidth < 1250) {
            levusMenu.classList.add('levus-menu-mobile');
        } else {
            levusMenu.classList.remove('levus-menu-mobile');
        }
    }
}
