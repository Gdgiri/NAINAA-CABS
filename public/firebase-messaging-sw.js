/* This file must be in the public folder */

importScripts(
  "https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDq-k7kxagXw0w1p7W66t5ibcd0jTHL0QE",
  authDomain: "nainaa-7de66.firebaseapp.com",
  projectId: "nainaa-7de66",
  storageBucket: "nainaa-7de66.appspot.com",
  messagingSenderId: "657749411060",
  appId: "1:657749411060:web:e3ace1d09cc91919658aa1",
  measurementId: "G-X39EE1Y2EM",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo.png", // optional icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
