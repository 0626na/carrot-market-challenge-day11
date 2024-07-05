import { z } from "zod";

const schema = z.object({
  email: z
    .string({ required_error: "이메일을 입력하세요" })
    .email("유효한 이메일이 아닙니다")
    .refine(
      (email) => email.endsWith("@zod.com"),
      "이메일은 @zod.com만 허용됩니다."
    ),
  username: z
    .string({ required_error: "아이디를 입력하세요" })
    .min(5, "아이디는 5자 이상이어야 합니다.")
    .refine((username) => username !== "", "아이디를 입력하세요"),
  password: z
    .string({ required_error: "패스워드를 입력하세요" })
    .min(10, "패스워드는 10자 이상이어야 합니다.")
    .regex(/\d/, "패스워드는 1개이상의 숫자를 포함해야 합니다 "),
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
