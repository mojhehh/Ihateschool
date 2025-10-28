import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCaNPIKQU-LVWctrZffkIJAP1-odXOdof8",
  authDomain: "school-thingy-45207.firebaseapp.com",
  databaseURL: "https://school-thingy-45207-default-rtdb.firebaseio.com",
  projectId: "school-thingy-45207",
  storageBucket: "school-thingy-45207.firebasestorage.app",
  messagingSenderId: "1048084200731",
  appId: "1:1048084200731:web:b0d9927aee9f4d3dbce7be",
  measurementId: "G-7Y7KRR2EYK"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

// --- Auto-create bookmarks node if it doesn't exist ---
(async () => {
  const bookmarksRef = ref(db, 'bookmarks');
  const snap = await get(bookmarksRef);
  if (!snap.exists()) {
    await set(bookmarksRef, {}); // create empty bookmarks node
    console.log('Created empty bookmarks node in Firebase.');
  }
})();
