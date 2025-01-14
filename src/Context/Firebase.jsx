import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";

const Context = createContext(null);
const firebaseConfig = {
    apiKey: "AIzaSyCBPGHUVw0j0nOz0F2TcrKPpgjhMJQTSPM",
    authDomain: "inspire-circle.firebaseapp.com",
    projectId: "inspire-circle",
    storageBucket: "inspire-circle.firebasestorage.app",
    messagingSenderId: "603807495320",
    appId: "1:603807495320:web:a6149c6b95f57121d10ced",
    measurementId: "G-9TCPJ0LXYV",
    databaseURL: "https://inspire-circle-default-rtdb.firebaseio.com/"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app)

export const useFirebase = () => useContext(Context);
export const FirebaseProvider = (props) => {

    const addData = (key, data) => set(ref(database, key), data);
    <Context.Provider value={addData}>
        {props.childern}
    </Context.Provider>
}