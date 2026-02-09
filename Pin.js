import { auth, db } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById("savePin").onclick = async () => {
  const pin = document.getElementById("pin").value;
  const user = auth.currentUser;

  await setDoc(doc(db, "users", user.uid), {
    phone: user.phoneNumber,
    pin: pin
  });

  window.location.href = "index.html";
};