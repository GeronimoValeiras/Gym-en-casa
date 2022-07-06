import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBGAAYzOvgxAgmKswG-w_PFhGbeJYZ36Lo",
  authDomain: "gym-en-casa---proyecto-react.firebaseapp.com",
  projectId: "gym-en-casa---proyecto-react",
  storageBucket: "gym-en-casa---proyecto-react.appspot.com",
  messagingSenderId: "407376287902",
  appId: "1:407376287902:web:652346b0d407655e3d438f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const productosDB = getFirestore(app)