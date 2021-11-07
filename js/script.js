const navItem = document.querySelectorAll('.nav-link');
const about = navItem[0];
const skills = navItem[1];
const portfolio = navItem[2];
const collapse = document.querySelector('.navbar-collapse');

// hide navbar when clicked
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarNavDropdown');
const bsCollapse = new bootstrap.Collapse(menuToggle);
navLinks.forEach((el) => {
  el.addEventListener('click', () => {
    bsCollapse.toggle();
  });
});

// add classname 'activ'e when clicked
about.addEventListener('click', () => {
  about.classList.add('active');
  skills.classList.remove('active');
  portfolio.classList.remove('active');
});

skills.addEventListener('click', () => {
  about.classList.remove('active');
  skills.classList.add('active');
  portfolio.classList.remove('active');
});

portfolio.addEventListener('click', () => {
  about.classList.remove('active');
  skills.classList.remove('active');
  portfolio.classList.add('active');
});

// add classname 'active' when scroll
const highlightMenu = () => {
  let scrollPos = window.scrollY;

  if (window.innerWidth > 768 && scrollPos < 1400) {
    about.classList.add('active');
    skills.classList.remove('active');
    return;
  } else if (window.innerWidth > 768 && scrollPos < 2300) {
    skills.classList.add('active');
    about.classList.remove('active');
    portfolio.classList.remove('active');
    return;
  } else if (window.innerWidth > 768 && scrollPos > 2000) {
    portfolio.classList.add('active');
    about.classList.remove('active');
    skills.classList.remove('active');
    return;
  }
};

window.addEventListener('scroll', highlightMenu);
