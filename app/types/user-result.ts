export interface UserResultData {
    id?: string;
    // Name fields
    name?: string;
    firstName: string;
    lastName: string;
    //Email fields
    email: string;
    emailVerified?: boolean;
    // Profile fields
    avatar_url?: string;
    plan?: "free" | "pro" | "enterprise";
    role?: 'admin' | 'user' | 'auditor' | 'tester';
    // Contact fields
    phone: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: number;
    country?: string;
    // Timestamps
    account_created_at: string;
    account_updated_at: string;
    // Optional fields
    auto_logout_duration: 3 | 5 | 10 | null;
    last_login: string;
    theme_selection?:
    "teal-blue" |
    "green-blue" |
    "blue-purple" |
    "green-teal"
    ;
}