const VAPID_PUBLIC_KEY =
  'BCCs2eonMI-6H2ctvFaWg-UYdDv387Vno_bzUzALpB442r2lCnsHmtrx8biyPi_E-1fSGABK_Qs_GlvPoJJqxbk';

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  return new Uint8Array([...rawData].map((char) => char.charCodeAt(0)));
}

async function sendSubscriptionToServer(subscription) {
  try {
    async function saveSubscriptionToServer(subscription) {
      const response = await fetch('/api/save-subscription/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(subscription),
      });

      if (!response.ok) {
        throw new Error('Bad status code from server.');
      }

      const responseJson = await response.json();

      if (!(responseJson.data && responseJson.data.success)) {
        throw new Error('Bad response from server.');
      }
    }
    console.log('📡 Subscription sent to server successfully');
  } catch (error) {
    console.error('❌ Failed to send subscription:', error);
    alert('Failed to save subscription to server: ' + error.message);
  }
}

export async function initPush() {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) return;

  if (Notification.permission === 'denied') {
    alert(
      'You have blocked notifications. Please enable them in your browser settings.'
    );
    return;
  }

  try {
    const registration = await navigator.serviceWorker.ready;

    const existingSub = await registration.pushManager.getSubscription();
    if (existingSub) {
      console.log('🔔 Already subscribed to push');
      return;
    }

    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
    });

    console.log('🔔 Push subscribed:', subscription);
    alert('Push notification subscribed successfully!');

    await sendSubscriptionToServer(subscription);
  } catch (err) {
    console.error('❌ Push Notification Error:', err);
    alert('Failed to subscribe: ' + err.message);
  }
}

export async function unsubscribePush() {
  try {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();

    if (subscription) {
      await subscription.unsubscribe();
      console.log('🔕 Unsubscribed');
      alert('Unsubscribed from push notifications.');
    }
  } catch (err) {
    console.error('❌ Unsubscribe Error:', err);
    alert('Failed to unsubscribe: ' + err.message);
  }
}
