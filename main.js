const showMenu = (toggleId, menuId) => {
  const toggle = document.getElementById(toggleId),
        menu = document.getElementById(menuId),
        body = document.body,
        links = menu.querySelectorAll('a');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
    toggle.classList.toggle('show-icon');
    body.classList.toggle('menu-open');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show-menu');
      toggle.classList.remove('show-icon');
      body.classList.remove('menu-open');
    });
  });
};

showMenu('nav-toggle', 'menu-links');

