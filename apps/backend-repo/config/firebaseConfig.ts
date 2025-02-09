import serviceAccount from "@/credential.json";
import admin, { credential } from "firebase-admin";

const configureFirebase = () => {
  const readCred = credential.cert(serviceAccount);

  admin.initializeApp({
    ...(readCred && {
      credential: readCred,
    }),
    projectId: process.env.FIREBASE_PROJECT_ID,
    databaseURL: `https://${serviceAccount.projectId}.firebaseio.com`,
  });

  return {
    db: admin.firestore(),
    auth: admin.auth(),
  };
};

export default configureFirebase;
