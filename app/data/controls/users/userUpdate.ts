import { put } from "@vercel/blob";
import { User } from "./userCreate";

/**
 * Updates an existing user in Vercel Blob storage.
 * @param user - The updated user data.
 * @returns The updated blob's URL.
 */
export default async function UserUpdate(user: User) {
    const blobKey = `users/${user.id}.json`;
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    if (!token) throw new Error("Missing Blob token, failed to Update User");
    
    const updatedBlob = await put(blobKey, JSON.stringify(user, null, 2), {
        access: "public",
        contentType: "application/json",
        token
    });
    
    console.log(`✅ Updated User Blob: ${updatedBlob.url}`);
    return updatedBlob.url;
}