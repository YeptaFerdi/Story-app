(function () {
  const isDevelopment =
    location.hostname === 'localhost' || location.hostname === '127.0.0.1';

  const script = document.createElement('script');
  if (isDevelopment) {
    script.type = 'module';
    script.src = './app.js';
  } else {
    script.src = 'dist/main.js';
    script.defer = true;
  }
  document.body.appendChild(script);
})();
