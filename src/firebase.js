import firebase from "firebase"

const config = {
  apiKey: "AIzaSyAHZj32-IxgG0kif6gsHgKOD2HXalTrZko",
  authDomain: "otp-verify-ddc32.firebaseapp.com",
  projectId: "otp-verify-ddc32",
  storageBucket: "otp-verify-ddc32.appspot.com",
  messagingSenderId: "420291590722",
  appId: "1:420291590722:web:656ee7b98786062ecc0bdb"
}

firebase.initializeApp(config);
export default firebase