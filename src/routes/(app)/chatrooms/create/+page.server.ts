import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  const userId = locals.user.id;

  return {
    userId,
  };
};
