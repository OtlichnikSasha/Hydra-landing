(function () {
  const burgerMenu = document.getElementById('burger_menu');
  const navLinks = document.getElementsByClassName('anchor_link');
  const buttonDown = document.getElementById('button_down');
  const headerNavLinks = document.getElementsByClassName('nav__link');
  const pathnameAnchor = window.location.hash;

  const handleClickNavLink = (anchor) => {
    const anchorSection = document.getElementById(anchor.split('#')[1]);
    const nav = document.getElementById('nav');
    if (nav.classList.contains('open')) toggleBurgerMenu();
    anchorSection?.scrollIntoView({ behavior: 'smooth' });
  };

  handleClickNavLink(pathnameAnchor);

  if (pathnameAnchor) {
    for (let i = 0; i < headerNavLinks.length; i++) {
      if (headerNavLinks[i].href.split('#')[1] === pathnameAnchor.replace('#', ''))
        return headerNavLinks[i].classList.add('active_link');
    }
  } else {
    headerNavLinks[0].classList.add('active_link');
  }

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

  for (let i = 0; i < headerNavLinks.length; i++) {
    headerNavLinks[i].onclick = (event) => {
      event.preventDefault();
      handleClickNavLink(headerNavLinks[i].href);
      const activeLink = document.getElementsByClassName('active_link');
      if (activeLink?.length) activeLink[0].classList.remove('active_link');
      headerNavLinks[i].classList.add('active_link');
    };
  }

  burgerMenu.onclick = () => toggleBurgerMenu();

  buttonDown.onclick = (e) => {
    window.scrollTo({
      top: e.pageY + 50,
      behavior: 'smooth',
    });
  };

  const form = document.getElementById('submit_form');
  const formInputs = form.getElementsByTagName('input');
  const formTextarea = form.getElementsByTagName('textarea')[0];
  const formButton = form.getElementsByTagName('button')[0];
  const fields = {};

  const changeHandler = (e) => {
    if (e.target.value) fields[e.target.name] = e.target.value;
    else delete fields[e.target.name];

    if (Object.keys(fields).length === 6) return (formButton.disabled = false);
    formButton.disabled = true;
  };

  formTextarea.oninput = (e) => changeHandler(e);

  for (let i = 0; i < formInputs.length; i++) {
    const formInput = formInputs[i];
    formInput.oninput = (e) => changeHandler(e);
  }

  form.onsubmit = (e) => {
    e.preventDefault();
    // todo response
    formTextarea.value = '';
    for (let i = 0; i < formInputs.length; i++) {
      formInputs[i].value = '';
    }
    formButton.disabled = true;
    alert('Your application has been successfully submitted');
  };
})();
