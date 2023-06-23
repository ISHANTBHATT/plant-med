import {getApp,getApps,initializeApp} from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

  const firebaseConfig = {
    apiKey: "AIzaSyDOm5fImbkzqLr48U6sxPOPhbJ5PGnHbHE",
    authDomain: "restaurantapp-99292.firebaseapp.com",
    databaseURL: "https://restaurantapp-99292-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-99292",
    storageBucket: "restaurantapp-99292.appspot.com",
    messagingSenderId: "989984188136",
    appId: "1:989984188136:web:19015d11003592c6da0b5d"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app,firestore,storage};