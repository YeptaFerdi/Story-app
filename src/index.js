import 'leaflet/dist/leaflet.css';
import './style.css';
import './add.css';
import { Router } from './router.js';
import { initPush, unsubscribePush } from './utils/web-push-init.js';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default Leaflet icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'leaflet/images/marker-icon.png',
  iconRetinaUrl: 'leaflet/images/marker-icon-2x.png',
  shadowUrl: 'leaflet/images/marker-shadow.png',
});

function applyTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
}

function setupPushButtons() {
  const subscribeBtn = document.getElementById('subscribe-btn');
  const unsubscribeBtn = document.getElementById('unsubscribe-btn');

  if (!subscribeBtn || !unsubscribeBtn) return;

  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    subscribeBtn.style.display = 'none';
    unsubscribeBtn.style.display = 'none';
    return;
  }

  navigator.serviceWorker.ready.then(async (reg) => {
    try {
      const sub = await reg.pushManager.getSubscription();
      const isSubscribed = Boolean(sub);
      subscribeBtn.style.display = isSubscribed ? 'none' : 'inline-block';
      unsubscribeBtn.style.display = isSubscribed ? 'inline-block' : 'none';
    } catch (err) {
      console.error('Error checking subscription status', err);
    }
  });

  subscribeBtn.addEventListener('click', async () => {
    await initPush();
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.getSubscription();
    if (sub) {
      subscribeBtn.style.display = 'none';
      unsubscribeBtn.style.display = 'inline-block';
    }
  });

  unsubscribeBtn.addEventListener('click', async () => {
    await unsubscribePush();
    subscribeBtn.style.display = 'inline-block';
    unsubscribeBtn.style.display = 'none';
  });
}

function setupSkipLink() {
  const skipLink = document.getElementById('skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      setTimeout(() => {
        const main = document.getElementById('main-content');
        if (main) {
          main.focus();
          main.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }
}

// Service Worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swPath = '/sw.js';
    navigator.serviceWorker
      .register(swPath)
      .then((reg) => {
        console.log('✅ Service Worker registered:', reg.scope);
        initPush();
      })
      .catch((err) => {
        console.error('❌ Service Worker registration failed:', err);
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  Router.init();
  setupPushButtons();
  setupSkipLink();
});
