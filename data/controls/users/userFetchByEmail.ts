import { list } from "@vercel/blob";
import { User } from "./userCreate";

/**
 * Fetches a user by email from Vercel Blob storage.
 * @param email - The email address to search for.
 * @returns The user data if found.
 */
export default async function UserFetchByEmail(email: string): Promise<User | null> {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    
    try {
        // List all user blobs
        const historicBlobs = await list({ token: token });
        const userBlobs = historicBlobs.blobs.filter(blob => 
            blob.pathname.startsWith('users/') && blob.pathname.endsWith('.json')
        );
        
        // Search through each user file for matching email
        for (const blob of userBlobs) {
            try {
                const response = await fetch(blob.url, {
                    method: "GET",
                    headers: {
                        "User-Agent":
                            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
                    },
                });
                
                if (response.ok) {
                    const userData: User = await response.json();
                    if (userData.email === email) {
                        console.log(`✅ Found user by email: ${email}`);
                        return userData;
                    }
                }
            } catch (error) {
                console.warn(`⚠️ Failed to fetch user blob ${blob.pathname}:`, error);
                continue;
            }
        }
        
        console.log(`❌ User not found with email: ${email}`);
        return null;
    } catch (error) {
        console.log(`❌ User fetch by email failed: ${error}`);
        throw error;
    }
}