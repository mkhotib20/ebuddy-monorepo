import { firestore } from "firebase-admin";

export class BaseRepository {
  constructor(protected readonly db: firestore.Firestore) {}
}
