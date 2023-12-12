import { z } from 'zod';

const schema = z.object({
  DATABASE_URL: z.string(),
});

export const validateEnvVars = (config: Record<string, string>) => {
  const result = schema.safeParse(config);

  if (!result.success && 'error' in result) {
    const { errors } = result.error;

    const parsedErrors = errors.reduce((acc, curr) => {
      acc[curr.path[0]] = curr.message;
      return acc;
    }, {});

    throw new Error(JSON.stringify(parsedErrors));
  }

  return result.data;
};
