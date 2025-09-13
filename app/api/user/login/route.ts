import { NextRequest, NextResponse } from "next/server";

import UserFetchByEmail from "@/data/controls/users/userFetchByID";


export async function GET(request: NextRequest) {



    const user = await UserFetchByEmail(email);
    if (!user) {
        // User not found
        return { success: false, error: "User not found" };
    }
    if (user.password === inputPassword) {
        // Password correct
        return { success: true, userId: user.id };
    } else {
        // Password incorrect
        return { success: false, error: "Invalid password" };
    }
}   