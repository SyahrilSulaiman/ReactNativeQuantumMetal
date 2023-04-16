/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// // // Import the functions you need from the SDKs you need
// import firebase from "@react-native-firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDcFZz1xfm8QZHRjY919gL4NYuo6rKa_CQ",
//   authDomain: "quantummetal-2023.firebaseapp.com",
//   projectId: "quantummetal-2023",
//   storageBucket: "quantummetal-2023.appspot.com",
//   messagingSenderId: "87417800383",
//   appId: "1:87417800383:web:4f4fe05e9d6cf3081de80a",
//   measurementId: "G-XBLQGLEXH8",
//   databaseURL: 'https://quantummetal-2023-default-rtdb.asia-southeast1.firebasedatabase.app/'
// };

// let app;
// if (firebase.apps.length === 0) {
//     app = firebase.initializeApp(firebaseConfig)
// } else {
//     app = firebase.app()
// }

// export const auth = firebase.auth()

AppRegistry.registerComponent(appName, () => App);
