import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  deleteUser,
} from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  getDocs,
  collection,
} from 'firebase/firestore';

import { getStorage } from 'firebase/storage';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCiKexVhH3KvEEGpj3A7F6o_rk4L3Baha0',
  authDomain: 'user-admin-event-auth.firebaseapp.com',
  projectId: 'user-admin-event-auth',
  storageBucket: 'user-admin-event-auth.appspot.com',
  messagingSenderId: '903538793974',
  appId: '1:903538793974:web:cd4fcf2f8f9b0d72c73bd7',
  measurementId: 'G-562NHRZ12Q',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export {
  signOut,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  collection,
  getDocs,
  app,
  deleteUser,
};
export const db = getFirestore(app);
export const storage = getStorage(app);
// When you have deployed a full application with users using it
// const analytics = getAnalytics(app);
