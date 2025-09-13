import { NextRequest, NextResponse } from "next/server";

const GET = async (request: NextRequest) => { return NextResponse.json({ ok: true }); }