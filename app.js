import { Router } from './src/router.js';
import { Spinner } from './src/component/Spinner.js';

// Function to apply dark theme (optional)
function applyTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
}

// Function for internal SPA routing
async function router() {
  const view = location.hash.slice(2) || 'login'; // Default to 'login' if no hash
  const main = document.getElementById('main-content');
  if (!main) {
    console.error('main-content element not found');
    return;
  }

  Spinner.show();

  const page = await loadPage(view);
  main.innerHTML = await page.render();
  await page.afterRender();

  Spinner.hide();
}

async function loadPage(view) {
  switch (view) {
    case 'home':
      return (await import('./view/HomeView.js')).HomeView;
    case 'add':
      return (await import('./view/AddView.js')).AddView;
    case 'mystory':
      return (await import('./view/MystoryView.js')).MystoryView;
    case 'login':
      return (await import('./view/LoginView.js')).LoginView;
    case 'register':
      return (await import('./view/RegisterView.js')).RegisterView;
    default:
      return (await import('./view/LoginView.js')).LoginView;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  Router.init();
  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);
});
