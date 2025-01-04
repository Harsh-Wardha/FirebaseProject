 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
// firestore Cloud databbase

 import { getFirestore,collection, addDoc,getDocs,updateDoc,doc,deleteDoc} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js"; 

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDclyDgk3okuTkjdn_l3TGXhQtI3KiHIMo",
   authDomain: "myprojecct-355a2.firebaseapp.com",
   projectId: "myprojecct-355a2",
   storageBucket: "myprojecct-355a2.firebasestorage.app",
   messagingSenderId: "1065183852597",
   appId: "1:1065183852597:web:a34ce5289047d541ca597c"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 export{
    app, collection, addDoc,db,getDocs,updateDoc,doc,deleteDoc
 }