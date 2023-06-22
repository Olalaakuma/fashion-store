import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Config = {
    apiKey: "AIzaSyB_-7ciRGtm48lYTT_jeSd_FpAh4QinxFg",
    authDomain: "fashionstore-db-fd271.firebaseapp.com",
    projectId: "fashionstore-db-fd271",
    storageBucket: "fashionstore-db-fd271.appspot.com",
    messagingSenderId: "100066177091",
    appId: "1:100066177091:web:1ef77ba9541a27e5bda4f6",
    measurementId: "G-9HFJWHEC5P"
  };

 export const CreateUserProfileDocument =async (userAuth, additionalData)=>{
 if(!userAuth) return;

 const userRef = firestore.doc(`users/ ${userAuth.uid}`);
 const snapShot = await userRef.get();

if(!snapShot.exists){

const{displayName, email} = userAuth;
const createdAt = new Date();

try{
  await userRef.set({
   displayName,
   email,
   createdAt,
   ...additionalData

  })

} catch(error){
  console.log('error creating user', error.message);


}
}
return userRef;

  }
  

  firebase.initializeApp(Config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =()=>auth.signInWithPopup(provider);
  export default firebase;