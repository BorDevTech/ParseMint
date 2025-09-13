import { list } from "@vercel/blob";

/**
 * Checks if a user exists in Vercel Blob storage.
 * @param userId - The unique identifier for the user to check.
 * @returns True if the user exists, false otherwise.
 */
export default async function UserCheck(userId: string) {
    const blobKey = `/Users/${userId}.json`;
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    
    try {
        const historicBlobs = await list({ token: token });
        return historicBlobs.blobs.some((blob) => blob.pathname === blobKey);
    } catch (error) {
        console.warn(`⚠️ Failed to list information for user ${userId}:`, error);
        return false;
    }
}