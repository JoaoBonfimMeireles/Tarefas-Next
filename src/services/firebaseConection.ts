import { initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAVUnnXYPRI6JPM6Mk7fVuwxnnv4kQq3Ws",
  authDomain: "tarefasplus-7efe8.firebaseapp.com",
  projectId: "tarefasplus-7efe8",
  storageBucket: "tarefasplus-7efe8.appspot.com",
  messagingSenderId: "228445916476",
  appId: "1:228445916476:web:8b7ae16860e570f4a6e239"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };