"use client";

import { useFormState, useFormStatus } from "react-dom";
import { validate } from "./action";

export default function Home() {
  const [state, action] = useFormState(validate, null);

  return (
    <main className="min-h-screen flex justify-center items-center">
      <form action={action} className="flex w-1/3 flex-col gap-2 text-black">
        <input
          name="email"
          type="email"
          placeholder="이메일을 입력하세요"
          className="px-4 py-2 rounded-full outline-none ring-0 ring-transparent focus:ring-offset-2 ring-offset-black focus:ring focus:ring-orange-400"
        />
        {state?.errors && (
          <span className="text-red-500">{state.errors.fieldErrors.email}</span>
        )}
        <input
          name="username"
          type="text"
          placeholder="아이디를 입력하세요"
          className="px-4 py-2 rounded-full outline-none ring-0 ring-transparent focus:ring-offset-2 ring-offset-black focus:ring focus:ring-orange-400"
        />
        {state?.errors && (
          <span className="text-red-500">
            {state.errors.fieldErrors.username}
          </span>
        )}
        <input
          name="password"
          type="password"
          placeholder="패스워드를 입력하세요"
          className="px-4 py-2 rounded-full outline-none ring-0 ring-transparent focus:ring-offset-2 ring-offset-black focus:ring focus:ring-orange-400"
        />
        {state?.errors && (
          <span className="text-red-500">
            {state.errors.fieldErrors.password}
          </span>
        )}
        <Login />
        {state?.success && (
          <div className="bg-green-500 rounded-lg p-4">
            <span>Welcome back!</span>
          </div>
        )}
      </form>
    </main>
  );
}

const Login = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="p-2 bg-neutral-200 rounded-full"
    >
      {pending ? "Loading..." : "Log In"}
    </button>
  );
};
