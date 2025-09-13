import { NextRequest, NextResponse } from "next/server";
import userFetch from "@/data/controls/users/userFetch";
import userCreate from "@/data/controls/users/userCreate";
import userUpdate from "@/data/controls/users/userUpdate";
import userSync from "@/data/controls/users/userSync";
import userConvert from "@/data/controls/users/userConvert";


export async function GET(request: NextRequest) {
    const key = "user";
    try {
        const data = await userFetch(key);
        // ✅ Convert and write blob immediately after fetch
        // await userConvert(key, data); // TODO: Fix type mismatch - userConvert expects { results: object[] } but userFetch returns UserSignupData

        return NextResponse.json({
            blob: data,
            count: Array.isArray(data) ? data.length : 0,
        });
    } catch (error) {
        console.warn(`⚠️ userFetch failed for ${key}, falling back to live parse`);
        // If blob does not exist, fetch and parse, then create/update blob
        try {

            // // // 🌐 Fallback: fetch HTML and parse
            // const { verify } = await import(`./../../../app/api/verify/${key}/logic`);
            // // Forward all query string parameters from the incoming request
            // const { search } = new URL(request.url);
            // const results = await verify(search); // 👈 verify now parses HTML directly
            // await userCreate(key);
            // await userUpdate(key, {
            //     timestamp: new Date().toISOString(),
            //     state: key,
            //     results
            // });
            // // Optionally, sync the blob after update
            // const blob = await userSync(key, results);

            // return NextResponse.json({ count: results.length, blob, results });
        } catch (fallbackError) {
            return NextResponse.json({
                ok: false,
                error: fallbackError instanceof Error ? fallbackError.message : `Failed to fetch ${key} data`,
                status: 500,
            });
        };
    }
}