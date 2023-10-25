const handleClickNavLink = (anchor) => {
  console.log(anchor);
  const anchorSection = document.getElementById(anchor.split('#')[1]);
  console.log(anchorSection);
  window.scrollTo({
    top: anchorSection?.offsetTop - 20,
    behavior: 'smooth',
  });
};

const navLinks = document.getElementsByClassName('nav__link');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = (event) => {
    console.log(event);
    event.preventDefault();
    handleClickNavLink(navLinks[i].href);
  };
}
