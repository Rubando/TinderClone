import {initializeApp} from 'firebase/app'
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyA2dHK71ngtuCrfyd80glG3gDyOBx2QZzg",
  
    authDomain: "uggo-f2d61.firebaseapp.com",
  
    projectId: "uggo-f2d61",
  
    storageBucket: "uggo-f2d61.appspot.com",
  
    messagingSenderId: "597027461752",
  
    appId: "1:597027461752:web:a2b3bb9b73a71b2bfe6b8d",
  
    measurementId: "G-MQ3CL6VFWF"
  
  };

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);


export default database;