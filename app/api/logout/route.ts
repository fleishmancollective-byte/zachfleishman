import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

async function logout(req: NextRequest) {
  const cookieStore = await cookies();
  cookieStore.set({
    name: "zts_access",
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  return NextResponse.redirect(new URL("/", req.nextUrl.origin));
}

export const GET = logout;
export const POST = logout;
