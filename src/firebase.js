import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCPY8lCcuc1JdApy1TFLkf9kvf48XI75b4",
  authDomain: "joy-oat-react-eshop-2023.firebaseapp.com",
  projectId: "joy-oat-react-eshop-2023",
  storageBucket: "joy-oat-react-eshop-2023.appspot.com",
  messagingSenderId: "141484686651",
  appId: "1:141484686651:web:be203f92011a2c19ef8b1e",
  measurementId: "G-5TFGLVKDBE"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }