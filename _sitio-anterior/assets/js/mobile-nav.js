(function () {
  var menuBtn = document.querySelector('.mobile-menu-btn');
  var mobileNav = document.querySelector('.mobile-nav');
  if (!menuBtn || !mobileNav) return;

  var closeBtn = mobileNav.querySelector('.mobile-nav__close');
  var backdrop = mobileNav.querySelector('.mobile-nav__backdrop');
  var navLinks = mobileNav.querySelectorAll('.mobile-nav__link');

  function openMenu() {
    mobileNav.classList.add('is-open');
    mobileNav.setAttribute('aria-hidden', 'false');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    mobileNav.classList.remove('is-open');
    mobileNav.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  menuBtn.addEventListener('click', function () {
    if (mobileNav.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && mobileNav.classList.contains('is-open')) {
      closeMenu();
      menuBtn.focus();
    }
  });
})();
