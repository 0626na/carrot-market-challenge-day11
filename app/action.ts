import { z } from "zod";

const schema = z.object({
  email: z
    .string({ required_error: "이메일을 입력하세요" })
    .email({ message: "유효한 이메일이 아닙니다" }),
  username: z
    .string({ required_error: "아이디를 입력하세요" })
    .refine((username) => username !== "", {
      message: "아이디를 입력하세요",
    }),
  password: z
    .string({ required_error: "패스워드를 입력하세요" })
    .refine((password) => password === "12345", {
      message: "패스워드가 틀립니다.",
    }),
});

export const validate = (_: any, formData: FormData) => {
  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const result = schema.safeParse(data);
  if (!result.success) {
    return {
      errors: result.error.flatten(),
      success: result.success,
    };
  }

  return {
    success: result.success,
    errors: null,
  };
};
