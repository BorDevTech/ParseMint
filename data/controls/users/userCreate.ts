import { put } from "@vercel/blob";
import { UserSignupData } from "@/app/types/user-signup";


// UserSignupData is used here for type consistency


// In production, this should be hashed
/**
 * Creates a new user in Vercel Blob storage.
 * @param user - The user data to store.
 * @returns The created blob's URL.
 */
export default async function UserCreate(user: UserSignupData): Promise<string> {
  const blobKey = `/Users/${user.id}.json`;
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) throw new Error("Missing Blob token, failed to Create User");

  const createdBlob = await put(blobKey, JSON.stringify(user, null, 2), {
    access: "private",
    contentType: "application/json",
    token
  });

  console.log(`✅ Created User Blob: ${createdBlob.url}`);
  return createdBlob.url;
}
