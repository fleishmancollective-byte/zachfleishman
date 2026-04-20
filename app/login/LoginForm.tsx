"use client";

import { useActionState, useEffect, useRef } from "react";
import { loginAction, type LoginState } from "./actions";

const initialState: LoginState = { error: false };

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState
  );
  const inputRef = useRef<HTMLInputElement>(null);

  // Wipe the field after a failed attempt so they re-type cleanly.
  useEffect(() => {
    if (state?.error && inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }, [state]);

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <div className="text-left">
        <label
          htmlFor="password"
          className="sr-only"
        >
          Password
        </label>
        <input
          ref={inputRef}
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          required
          autoFocus
          className="w-full px-4 py-3.5 rounded-[var(--r2)] bg-white/70 border border-[var(--border-strong)] focus:outline-none focus:border-[var(--ink)] focus:bg-white text-[15px] text-[var(--ink)] placeholder:text-[var(--muted-2)] transition-colors"
        />
        {state?.error ? (
          <p className="mt-2 text-[13px] text-[var(--muted)]">
            That's not it. Try again.
          </p>
        ) : null}
      </div>
      <button
        type="submit"
        disabled={pending}
        className="btn-primary w-full justify-center !py-3.5 !text-[15px] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Checking..." : "Enter"}
      </button>
    </form>
  );
}
