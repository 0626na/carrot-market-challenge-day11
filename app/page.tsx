"use client";

import { useFormState, useFormStatus } from "react-dom";
import { validate } from "./action";

export default function Home() {
  const [state, action] = useFormState(validate, null);

  return (
    <main className="min-h-screen flex justify-center items-center">
      <form action={action} className="flex w-1/3 flex-col gap-2 text-black">
        {/* email */}
        <input
          name="email"
          type="email"
          placeholder="이메일을 입력하세요"
          className="px-4 py-2 rounded-full outline-none ring-0 ring-transparent focus:ring-offset-2 ring-offset-black focus:ring focus:ring-orange-400"
        />
        {state?.errors && (
          <div className="flex flex-col">
            {state.errors.fieldErrors.email?.map((error, index) => (
              <span key={index} className="text-red-500">
                {error}
              </span>
            ))}
          </div>
        )}

        {/* username */}
        <input
          name="username"
          type="text"
          placeholder="아이디를 입력하세요"
          className="px-4 py-2 rounded-full outline-none ring-0 ring-transparent focus:ring-offset-2 ring-offset-black focus:ring focus:ring-orange-400"
        />
        {state?.errors && (
          <div className="flex flex-col">
            {state.errors.fieldErrors.username?.map((error, index) => (
              <span key={index} className="text-red-500">
                {error}
              </span>
            ))}
          </div>
        )}

        {/* password */}
        <input
          name="password"
          type="password"
          placeholder="패스워드를 입력하세요"
          className="px-4 py-2 rounded-full outline-none ring-0 ring-transparent focus:ring-offset-2 ring-offset-black focus:ring focus:ring-orange-400"
        />
        {state?.errors && (
          <div className="flex flex-col">
            {state.errors.fieldErrors.password?.map((error, index) => (
              <span key={index} className="text-red-500">
                {error}
              </span>
            ))}
          </div>
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
