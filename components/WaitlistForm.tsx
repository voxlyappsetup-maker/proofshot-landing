"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setState("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setState("success");
      setMessage("You're on the list. We'll email you when ProofShot opens.");
      setEmail("");
    } catch {
      setState("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md space-y-3">
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          disabled={state === "loading"}
          className="h-12 w-full flex-1 rounded-lg border border-slate-300 bg-white px-4 text-base text-ink outline-none ring-teal/30 placeholder:text-slate-400 focus:border-teal focus:ring-2 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="h-12 shrink-0 rounded-lg bg-ink px-6 text-sm font-semibold text-white transition hover:bg-teal disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "loading" ? "Joining…" : "Join waitlist"}
        </button>
      </div>
      {message ? (
        <p
          role="status"
          className={`text-sm ${
            state === "success" ? "text-teal" : "text-red-700"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
