import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBdIEeK52GBAjQF9QHN7uacuA1W71T8KV0",
  authDomain: "todo-list-a5d86.firebaseapp.com",
  databaseURL: "https://todo-list-a5d86.firebaseio.com",
  projectId: "todo-list-a5d86",
  storageBucket: "todo-list-a5d86.appspot.com",
  messagingSenderId: "128098383861"
}

const fire = firebase.initializeApp(config);
export default fire;