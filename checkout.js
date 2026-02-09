import { db, auth } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById("confirmBtn").onclick = async () => {
  const bundle = JSON.parse(localStorage.getItem("selectedBundle"));
  const user = auth.currentUser;

  await addDoc(collection(db, "orders"), {
    userId: user.uid,
    bundleId: bundle.id,
    price: bundle.price,
    status: "PENDING",
    createdAt: Date.now()
  });

  alert("Order saved. Proceed to payment");
};