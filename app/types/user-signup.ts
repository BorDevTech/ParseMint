export type hearAboutUsOption = "" | "Select an option" | "Search Engine" | "Social Media" | "Friend or Family" | "Advertisement" | "News Article or Blog" | "Other";


export interface UserSignupData {
    // Name fields 
    firstName: string;
    lastName: string;
    //Email fields
    email: string;
    phone?: string;
    //Referal fields
    hearAboutUs: hearAboutUsOption;
    hearAboutUsOther?: string;
    // Optional fields 
    referralCode?: string;
    // Timestamps
    account_created_at: string;
    id: string; // Unique identifier for the user set by nanoid
}