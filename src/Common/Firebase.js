import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDq-k7kxagXw0w1p7W66t5ibcd0jTHL0QE",
  authDomain: "nainaa-7de66.firebaseapp.com",
  projectId: "nainaa-7de66",
  storageBucket: "nainaa-7de66.appspot.com",
  messagingSenderId: "657749411060",
  appId: "1:657749411060:web:e3ace1d09cc91919658aa1",
  measurementId: "G-X39EE1Y2EM",
};

export const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestPermissionAndToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      console.warn("Notification permission not granted.");
      return null;
    }

    const swReg = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js"
    );
    console.log("Service Worker Registered");

    const token = await getToken(messaging, {
      vapidKey:
        "BM4g9FsF32T5YDYNjTOZBpph3uIw63BkkJOk8seJYKBh9_4d6SbrcGXHqmwPDlvYlvWYF7CUq0hju72bblL2mxw",
      serviceWorkerRegistration: swReg,
    });

    console.log("FCM Token:", token);
    return token;
  } catch (error) {
    console.error("Error getting FCM token", error);
    return null;
  }
};

export const listenForMessages = () => {
  onMessage(messaging, (payload) => {
    console.log("Message received:", payload);
    alert(`${payload.notification.title} - ${payload.notification.body}`);
  });
};
