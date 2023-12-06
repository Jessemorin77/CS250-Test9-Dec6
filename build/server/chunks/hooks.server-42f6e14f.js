import { d as db } from './database-f0cdcbcd.js';
import 'os';
import 'tty';
import 'util';
import 'fs';
import 'path';
import 'child_process';
import 'fs/promises';
import 'async_hooks';
import 'events';

const handle = async ({ event, resolve }) => {
  const session = event.cookies.get("session");
  if (!session) {
    return await resolve(event);
  }
  const user = await db.user.findUnique({
    where: { userAuthToken: session },
    select: { id: true, email: true }
  });
  if (user) {
    event.locals.user = {
      id: user.id,
      // Store the userId in locals
      email: user.email
    };
  }
  return await resolve(event);
};

export { handle };
//# sourceMappingURL=hooks.server-42f6e14f.js.map
