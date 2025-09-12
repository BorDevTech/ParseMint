import { put } from "@vercel/blob";

export interface User {
  id: string;
  email: string;
  password: string; // In production, this should be hashed
  fullName: string;
  phone?: string;
  createdAt: string;
}

/**
 * Creates a new user in Vercel Blob storage.
 * @param user - The user data to store.
 * @returns The created blob's URL.
 */
export default async function UserCreate(user: User) {
    const blobKey = `users/${user.id}.json`;
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    if (!token) throw new Error("Missing Blob token, failed to Create User");
    
    const createdBlob = await put(blobKey, JSON.stringify(user, null, 2), {
        access: "public",
        contentType: "application/json",
        token
    });
    
    console.log(`✅ Created User Blob: ${createdBlob.url}`);
    return createdBlob.url;
}