import UserCheck from "./userCheck";
import { User } from "./userCreate";

/**
 * Fetches a user from Vercel Blob storage.
 * @param userId - The unique identifier for the user to fetch.
 * @returns The user data.
 */
export default async function UserFetch(userId: string): Promise<User> {
    const blobKey = `users/${userId}.json`;
    
    try {
        // 🔍 Check for existing user
        const userExists = await UserCheck(userId);
        if (!userExists) {
            throw new Error(`User ${userId} not found`);
        }
        
        // 🔍 Pull existing user data
        const url = `${process.env.BLOB_STORE_URL}/${blobKey}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
            },
        });
        
        if (!response.ok) {
            throw new Error(`Failed to fetch user: ${response.statusText}`);
        }
        
        const userData = await response.json();
        console.log(`✅ Fetched existing user: ${userId}`);
        return userData;
    } catch (error) {
        console.log(`❌ User fetch failed: ${error}`);
        throw error;
    }
}