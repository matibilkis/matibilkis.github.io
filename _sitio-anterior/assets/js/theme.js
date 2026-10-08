(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll('[data-theme-set]');
  if (!buttons.length) return;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-theme-set') === theme));
    });

    var themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute('content', getComputedStyle(root).getPropertyValue('--color-bg').trim());
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var theme = button.getAttribute('data-theme-set');
      applyTheme(theme);
      try {
        localStorage.setItem('site-theme', theme);
      } catch (e) {}
    });
  });

  applyTheme(root.getAttribute('data-theme') || 'miro');
})();
