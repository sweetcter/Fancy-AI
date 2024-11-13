import { z } from "zod";

export const loginSchema = z.object({
  email_or_username: z.string().min(1, {
    message: 'Email hoặc username không được để trống.'
  }).min(3,{
    message: 'Email hoặc username phải có ít nhất 3 ký tự.'
  }).trim(),
  password: z
    .string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự.")
    .max(64, "Mật khẩu nên tối đa là 64 ký tự."),
});

export const signupSchema = z
  .object({
    email: z.string().email("Email không hợp lệ."),
    username: z
      .string()
      .min(6, "Username phải có ít nhất 6 kí tự.")
      .max(32, "User name có tối đa là 32 ký tự.")
      .trim()
      .refine((value) => !/\s/.test(value), {
        message: "Không được nhập khoảng trắng",
      }),
    password: z
      .string()
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự.")
      .max(64, "Mật khẩu tối đa là 64 ký tự."),
    confirmPassword: z
      .string()
      .min(6, "Mật khẩu xác nhận phải có ít nhất 6 ký tự.")
      .max(64, "Mật khẩu tối đa là 64 ký tự."),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        message: "Mật khẩu xác nhận không khớp với mật khẩu.",
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
      });
    }
  });

export const changePasswordSchema = z
  .object({
    email: z.string().email("Email không hợp lệ."),
    password: z.string().min(6, "Mật khẩu mới phải có ít nhất 6 ký tự."),
    confirmPassword: z
      .string()
      .min(6, "Mật khẩu xác nhận phải có ít nhất 6 ký tự."),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        message: "Mật khẩu xác nhận không khớp với mật khẩu.",
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
      });
    }
  });
