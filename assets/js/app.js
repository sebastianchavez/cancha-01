/**
 * app.js
 * Bootstrap común: carga layout (navbar/footer) según la página.
 */
(function bootstrap() {
  document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;
    if (page) UI.mountLayout(page);
  });
})();