importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDuDkgQUsVdVGMSjC0_AEk8qJa2NAAnZzE",
  authDomain: "custodiosschlp.firebaseapp.com",
  projectId: "custodiosschlp",
  storageBucket: "custodiosschlp.firebasestorage.app",
  messagingSenderId: "602870189296",
  appId: "1:602870189296:web:87b07ff0431cc120244635"
});

const messaging = firebase.messaging();

// Notificación cuando la app está en segundo plano o cerrada
messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/logo.png',
    badge: '/logo.png',
    tag: 'alerta-santuario',   // reemplaza la anterior en lugar de apilar
    renotify: true
  });
});
