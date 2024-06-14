// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,addDoc, collection,doc,getDoc, updateDoc,deleteDoc  } from 'firebase/firestore'
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export default defineNuxtPlugin(nuxtApp=>{


  const firebaseConfig = {
    apiKey: "AIzaSyCaH2AzHkj6aKZkD22MXhQkZ6e0OS2yKxc",
    authDomain: "well-within-farm-sanctuary.firebaseapp.com",
    projectId: "well-within-farm-sanctuary",
    storageBucket: "well-within-farm-sanctuary.appspot.com",
    messagingSenderId: "13255360481",
    appId: "1:13255360481:web:fa90746886f5ac93db5ca0",
    measurementId: "G-WGW9YGQT5J"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const auth = getAuth(app);

nuxtApp.vueApp.provide('auth', auth)
nuxtApp.provide('auth', auth)

nuxtApp.vueApp.provide('db', db)
nuxtApp.provide('db', db)

nuxtApp.vueApp.provide('addDoc',addDoc)
nuxtApp.provide('addDoc', addDoc)


nuxtApp.vueApp.provide('collection',collection)
nuxtApp.provide('collection', collection)

nuxtApp.vueApp.provide('doc',doc)
nuxtApp.provide('doc', doc)

nuxtApp.vueApp.provide('getDoc',getDoc)
nuxtApp.provide('getDoc', getDoc)

nuxtApp.vueApp.provide('updateDoc',updateDoc)
nuxtApp.provide('updateDoc', updateDoc)

nuxtApp.vueApp.provide('deleteDoc',deleteDoc)
nuxtApp.provide('deleteDoc', deleteDoc)

//firebase Storage

nuxtApp.vueApp.provide('getStorage',getStorage)
nuxtApp.provide('getStorage', getStorage)

nuxtApp.vueApp.provide('storageRef',storageRef)
nuxtApp.provide('storageRef', storageRef)

nuxtApp.vueApp.provide('uploadBytesResumable',uploadBytesResumable)
nuxtApp.provide('uploadBytesResumable', uploadBytesResumable)

nuxtApp.vueApp.provide('getDownloadURL ',getDownloadURL )
nuxtApp.provide('getDownloadURL ', getDownloadURL )



});


