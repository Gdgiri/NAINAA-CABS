import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkrYnQInqLD4XN4ohhliuCpvmt7dtPeSQ",
  authDomain: "wedease-d4f71.firebaseapp.com",
  projectId: "wedease-d4f71",
  storageBucket: "wedease-d4f71.appspot.com",
  messagingSenderId: "999051690514",
  appId: "1:999051690514:web:566d68c95e00b528ba4ecb",
};

// ✅ Only initialize Firebase if it hasn't been initialized already
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const storage = getStorage(app);

export { storage };
