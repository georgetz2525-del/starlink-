import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

let timer;

function resetTimer() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    signOut(auth).then(() => {
      window.location.href = "login.html";
    });
  }, 10 * 60 * 1000);
}

window.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeypress = resetTimer;