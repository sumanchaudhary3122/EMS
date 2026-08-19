// Login.jsx
import React, { useState } from "react";

export const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            Login to your account to continue
          </p>
        </div>

        <form
          onSubmit={submitHandler}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-7 shadow-2xl"
        >
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Email or username
              </label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="text"
                placeholder="Enter your email or username"
                className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Password
              </label>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                placeholder="Enter your password"
                className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
              />
            </div>

            <button
              type="submit"
              className="h-12 w-full rounded-xl bg-emerald-400 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-300 active:scale-[0.98]"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
