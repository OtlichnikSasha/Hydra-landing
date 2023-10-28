(function () {
  const burgerMenu = document.getElementById('burger_menu');
  const navLinks = document.getElementsByClassName('anchor_link');
  const buttonDown = document.getElementById('button_down');

  const handleClickNavLink = (anchor) => {
    const anchorSection = document.getElementById(anchor.split('#')[1]);
    const nav = document.getElementById('nav');
    if (nav.classList.contains('open')) toggleBurgerMenu();
    window.scrollTo({
      top: anchorSection?.offsetTop - 20,
      behavior: 'smooth',
    });
  };

  const toggleBurgerMenu = () => {
    const nav = document.getElementById('nav');
    document.body.classList.toggle('hidden');
    burgerMenu.classList.toggle('open');
    nav.classList.toggle('open');
  };

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = (event) => {
      event.preventDefault();
      handleClickNavLink(navLinks[i].href);
    };
  }

  burgerMenu.onclick = () => toggleBurgerMenu();

  buttonDown.onclick = (e) => {
    window.scrollTo({
      top: e.pageY + 50,
      behavior: 'smooth',
    });
  };

  // const form = document.getElementById('submit_form');
  // const formInputs = form.getElementsByTagName('input');
  // for (let i = 0; i < formInputs.length; i++) {
  //   const formInput = formInputs[i];
  //   formInput.onchange = () => {};
  // }
})();
