import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
 apiKey: "AIzaSyA8yJ-j9QbcPmRaC3aJYPaAF8zf5rY6UCU",
 authDomain: "inventory-management-app-305da.firebaseapp.com",
 projectId: "inventory-management-app-305da",
 storageBucket: "inventory-management-app-305da.appspot.com",
 messagingSenderId: "288583659723",
 appId: "1:288583659723:web:f384fe8f4ec64ffaefeb4e"
 }

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export {firestore};