import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, get } from "firebase/database";

const firebaseConfig = {
    apiKey: import.meta.env.APP_KEY,
    authDomain: "inspire-circle.firebaseapp.com",
    projectId: "inspire-circle",
    storageBucket: "inspire-circle.firebasestorage.app",
    messagingSenderId: "603807495320",
    appId: "1:603807495320:web:a6149c6b95f57121d10ced",
    measurementId: "G-9TCPJ0LXYV",
    databaseURL: "https://inspire-circle-default-rtdb.firebaseio.com/"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Context = createContext(null);

export const useFirebase = () => useContext(Context);

export const FirebaseProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const addData = (path, newData) => {
    const db = getDatabase();
    const dataRef = ref(db, path);
    push(dataRef, newData);
  };

  const getData = () => {
    const userRef = ref(database, 'users');
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log(data.length)
          setUserData(data); // Storing the fetched data in state
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    getData(); 
  }, []);

  return (
    <Context.Provider value={{ addData, userData }}>
      {children}
    </Context.Provider>
  );
};
