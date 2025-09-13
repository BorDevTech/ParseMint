import { list } from "@vercel/blob";
import { UserSignupData } from "@/app/types/user-signup";

/**
 * Fetches a user by userID from Vercel Blob storage.
 * @param userID - The userID address to search for.
 * @returns The user data if found.
 */
export default async function UserFetchID(userID: string): Promise<UserSignupData | null> {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    try {
        // List all user blobs
        const historicBlobs = await list({ token: token });
        const userBlobs = historicBlobs.blobs.filter(blob =>
            blob.pathname.startsWith('Users/') && blob.pathname.endsWith('.json')
        );
        // Search through each user file for matching userID
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
                    const userData: UserSignupData = await response.json();
                    if (userData.id === userID) {
                        console.log(`✅ Found user by userID: ${userID}`);
                        return userData;
                    }
                }
            } catch (error) {
                console.warn(`⚠️ Failed to fetch user blob ${blob.pathname}:`, error);
                continue;
            }
        }
        console.log(`❌ User not found with userID: ${userID}`);
        return null;
    } catch (error) {
        console.log(`❌ User fetch by userID failed: ${error}`);
        throw error;
    }
}