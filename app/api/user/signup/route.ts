import { NextResponse } from "next/server";
import UserCheck from "@/data/controls/users/userCheck";
import UserCreate from "@/data/controls/users/userCreate";
import { nanoid } from "nanoid";
import { UserSignupData } from "@/app/types/user-signup";

export async function POST(request: Request) {
    const body = await request.json();

    // Generate a unique user ID and check for collisions
    let userId: string;
    let exists = true;
    do {
        userId = `PM-${nanoid(8).toUpperCase()}`;
        exists = await UserCheck(userId);
    } while (exists);

    // Prepare user data
    const userData: UserSignupData = {
        ...body,
        id: userId,
        account_created_at: new Date().toISOString(),
    };

    // Create user in blob storage
    try {
        const url = await UserCreate(userData);
        return NextResponse.json({ success: true, firstName: body.firstName, lastName: body.lastName, userId, url });
    } catch (error) {
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}