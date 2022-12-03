import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";


    const firebaseConfig = {
        apiKey: "AIzaSyDUmSAQYeQsfYJRV4_JxeG7c1md3y2Zb5s",
        authDomain: "medbriki-3f332.firebaseapp.com",
        projectId: "medbriki-3f332",
        storageBucket: "medbriki-3f332.appspot.com",
        messagingSenderId: "442877798485",
        appId: "1:442877798485:web:712b66545d90b6e0bd4cdc",
        measurementId: "G-QDGKVTGQE4"
      };
   
      const app = initializeApp(firebaseConfig);
      export const db = getDatabase(app);