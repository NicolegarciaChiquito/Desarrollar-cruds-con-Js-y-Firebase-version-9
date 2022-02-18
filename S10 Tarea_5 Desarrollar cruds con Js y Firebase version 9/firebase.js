// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZkaSrs2T3ITDxMnw5D8IqisuKRGZQfzA",
    authDomain: "fir-javacript-crud-b502e.firebaseapp.com",
    projectId: "fir-javacript-crud-b502e",
    storageBucket: "fir-javacript-crud-b502e.appspot.com",
    messagingSenderId: "855590927394",
    appId: "1:855590927394:web:d293c14a58f8747f0d9e7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const getTasks = () => getDocs(collection(db, "tasks"));

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);
