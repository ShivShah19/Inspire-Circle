import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, get, update } from "firebase/database";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.URL_KEY,
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
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const Context = createContext(null);

export const useFirebase = () => useContext(Context);

export const FirebaseProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [googleUser, setGoogleUser] = useState(null);

  // Function to add data to Firebase database
  const addData = (path, newData) => {
    const db = getDatabase();
    const dataRef = ref(db, path);
    push(dataRef, newData);
  };

  // Function to fetch data from Firebase
  const getData = () => {
    const userRef = ref(database, "users");
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const dataWithIds = Object.keys(data).map((key) => ({
            key: key,
            ...data[key],
          }));
          console.log(`Total records: ${dataWithIds.length}`);
          // console.log(dataWithIds);
          setUserData(dataWithIds);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  
  
  const updateData = (path, updatedData) => {
    const db = getDatabase();
    const dataRef = ref(db, path);
  
    update(dataRef, updatedData)
      .then(() => {
        console.log("Data updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  // Google sign-in function
  const signWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setGoogleUser(user)
      console.log("Signed in as: ", user.displayName);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  useEffect(() => {
   onAuthStateChanged(auth, (user) => {
    if(user) setGoogleUser(user);
    else setGoogleUser(null)
   })
  }, []);

  return (
    <Context.Provider value={{ addData,getData,updateData, userData, signWithGoogle, googleUser }}>
      {children}
    </Context.Provider>
  );
};
