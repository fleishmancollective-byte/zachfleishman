"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { timingSafeEqual } from "node:crypto";

export type LoginState = { error: boolean };

/**
 * Constant-time string comparison. Prevents timing attacks where an attacker
 * measures response times to guess the password character-by-character.
 */
function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a, "utf8");
  const bufB = Buffer.from(b, "utf8");
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export async function loginAction(
  _prev: LoginState,
  formData: FormData
): Promise<LoginState> {
  const submitted = String(formData.get("password") ?? "").trim();
  const expected = process.env.ACCESS_PASSWORD;

  if (!expected) {
    // Misconfiguration: log on the server, surface a generic error to the client.
    console.error(
      "[login] ACCESS_PASSWORD env var is not set. Refusing all logins."
    );
    return { error: true };
  }

  if (!submitted || !safeEqual(submitted, expected)) {
    return { error: true };
  }

  const cookieStore = await cookies();
  cookieStore.set({
    name: "zts_access",
    value: "granted",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  });

  redirect("/dashboard");
}
