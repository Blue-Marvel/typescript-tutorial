import express, { Express } from "express";
import dotenv from "dotenv";
import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

import { routes as guitarRoutes } from "./guitar/routes";
import { routes as taskRoutes } from "./task/routes";

const firebaseConfig = {
  apiKey: "AIzaSyALhSH73TpzWiefe-6jzWHWLFqiAQkH9rA",
  authDomain: "task-list-api-8fd1d.firebaseapp.com",
  projectId: "task-list-api-8fd1d",
  storageBucket: "task-list-api-8fd1d.appspot.com",
  messagingSenderId: "375101728581",
  appId: "1:375101728581:web:4fc98325aa20e76c4b802c",
};

dotenv.config();

/* Initialize Firebase @ https://firebase.google.com/docs/web/setup */
const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/guitar", guitarRoutes);

app.use("/tasks", taskRoutes);
app.use(express.json());

app.post("/api/data", (req, res) => {
  const data = req.body; // Assuming data is sent in JSON format

  // Process the data...
  console.log("Received data:", data);

  res.status(200).json({ message: "Data received successfully" });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
