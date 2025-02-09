import { BaseRepository } from "@/entities/BaseRepository";
import { NotFoundError } from "@/entities/NotFoundError";
import { UserEntity } from "@/entities/User";
import { firestore } from "firebase-admin";

/**
 * Based on Clean code architecture, repository is used to fetch, mutate external data source
 */
export class UserRepository extends BaseRepository {
  constructor(db: firestore.Firestore) {
    super(db);
  }

  findOneByEmail = async (email: string): Promise<UserEntity | null> => {
    const usersRef = this.db.collection("USERS");
    const snapshot = await usersRef.where("email", "==", email).get();

    if (snapshot.empty) {
      return null;
    }

    const [foundDocument] = snapshot.docs;
    const documentData = foundDocument.data() as UserEntity;
    documentData.id = foundDocument.id;

    return documentData;
  };

  // login or signup user
  onboardUser = async (userData: UserEntity) => {
    const foundOne = await this.findOneByEmail(userData.email);

    const timestamp = new Date().toISOString();

    if (foundOne?.id) {
      const usersRef = this.db.collection("USERS").doc(foundOne.id);
      foundOne.updatedAt = timestamp;

      // Prioritize existing data if already exists
      usersRef.set({ ...userData, ...foundOne });

      return;
    }
    const usersRef = this.db.collection("USERS");
    const result = await usersRef.add({
      ...userData,
      updatedAt: timestamp,
      createdAt: timestamp,
    });
    return result;
  };

  updateUser = async (userData: UserEntity) => {
    const foundOne = await this.findOneByEmail(userData.email);

    if (!foundOne?.id) {
      throw new NotFoundError("No data with provided email!");
    }

    const timestamp = new Date().toISOString();

    const usersRef = this.db.collection("USERS").doc(foundOne.id);
    foundOne.updatedAt = timestamp;

    // Prioritize existing data if already exists
    const newUser = { ...foundOne, ...userData };

    await usersRef.set(newUser);
    return newUser;
  };
}
