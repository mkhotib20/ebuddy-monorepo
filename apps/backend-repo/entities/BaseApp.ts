import { auth, firestore } from "firebase-admin";

export interface BaseApp {
  db: firestore.Firestore;
  auth: auth.Auth;
}
