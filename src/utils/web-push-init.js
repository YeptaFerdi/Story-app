import { AuthModel } from '../model/AuthModel';

const VAPID_PUBLIC_KEY =
  'BCCs2eonMI-6H2ctvFaWg-UYdDv387Vno_bzUzALpB442r2lCnsHmtrx8biyPi_E-1fSGABK_Qs_GlvPoJJqxbk';

const API_BASE =
  location.hostname === 'localhost' && location.port === '9000'
    ? '/api'
    : 'https://story-api.dicoding.dev/v1';

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  return new Uint8Array([...rawData].map((char) => char.charCodeAt(0)));
}

async function sendSubscriptionToServer(subscription) {
  try {
    const token = AuthModel.getToken();
    if (!token || !token.includes('.')) {
      throw new Error('No valid token found. Please login first.');
    }

    const { endpoint, keys } = subscription.toJSON();

    const response = await fetch(`${API_BASE}/notifications/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        endpoint,
        keys: {
          p256dh: keys.p256dh,
          auth: keys.auth,
        },
      }),
    });

    const contentType = response.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      const text = await response.text();
      console.error('⚠️ Invalid content-type:', contentType);
      console.error('📄 Response content:\n', text);
      throw new Error('Server did not return JSON');
    }

    const result = await response.json();

    if (!response.ok || result.error) {
      throw new Error(result.message || 'Failed to subscribe on server.');
    }

    console.log('📡 Subscription sent to server:', result);
  } catch (error) {
    console.error('❌ Error sending subscription:', error);
    alert('Failed to save subscription: ' + error.message);
  }
}

async function sendUnsubscribeToServer(endpoint) {
  try {
    const token = AuthModel.getToken();
    if (!token || !token.includes('.')) {
      throw new Error('No valid token found. Please login first.');
    }

    const response = await fetch(`${API_BASE}/notifications/subscribe`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ endpoint }),
    });

    const result = await response.json();

    if (!response.ok || result.error) {
      throw new Error(result.message || 'Failed to unsubscribe.');
    }

    console.log('📭 Unsubscription sent to server:', result);
  } catch (error) {
    console.error('❌ Error unsubscribing on server:', error);
    alert('Failed to unsubscribe: ' + error.message);
  }
}

export async function initPush() {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    console.warn('🚫 Push messaging is not supported in this browser.');
    return;
  }

  if (Notification.permission === 'denied') {
    alert('Notifications are blocked. Please enable them in browser settings.');
    return;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    const existingSubscription =
      await registration.pushManager.getSubscription();

    if (existingSubscription) {
      console.log('🔔 Already subscribed.');
      return;
    }

    const newSubscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
    });

    console.log('🔔 New subscription:', newSubscription);
    alert('Successfully subscribed to push notifications!');
    await sendSubscriptionToServer(newSubscription);
  } catch (error) {
    console.error('❌ Subscription failed:', error);
    alert('Subscription failed: ' + error.message);
  }
}

export async function unsubscribePush() {
  try {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();

    if (!subscription) {
      console.log('ℹ️ No active subscription.');
      return;
    }

    const endpoint = subscription.endpoint;
    await subscription.unsubscribe();
    await sendUnsubscribeToServer(endpoint);

    console.log('🔕 Unsubscribed successfully.');
    alert('Unsubscribed from push notifications.');
  } catch (error) {
    console.error('❌ Failed to unsubscribe:', error);
    alert('Unsubscribe failed: ' + error.message);
  }
}

export async function sendPushNotification({ title, body, image, url }) {
  try {
    const token = AuthModel.getToken();
    if (!token || !token.includes('.')) {
      throw new Error('No valid token found. Please login first.');
    }

    const response = await fetch(`${API_BASE}/push-notifications/web-push`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, body, image, url }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Push failed: ${response.status} - ${errorText}`);
    }

    console.log('📨 Push notification sent!');
  } catch (error) {
    console.error('❌ Failed to send push notification:', error);
    alert('Push notification failed: ' + error.message);
  }
}
