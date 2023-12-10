import { z } from 'zod';

export const CreateUserValidator = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, 'The password must be at least 8 characters long')
      .regex(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?~])(.{8,})$/,
        'The password must contain at least one uppercase letter and one special character',
      ),
    passwordConfirmation: z
      .string()
      .min(8)
      .regex(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?~])(.{8,})$/,
        'The password must contain at least one uppercase letter and one special character',
      ),
  })
  .superRefine(({ password, passwordConfirmation }, ctx) => {
    if (password !== passwordConfirmation) {
      ctx.addIssue({
        code: 'custom',
        message: 'Passwords do not match',
      });
    }
  });

export type CreateUserDto = z.infer<typeof CreateUserValidator>;
