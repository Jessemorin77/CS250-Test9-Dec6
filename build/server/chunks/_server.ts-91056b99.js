import { d as db } from './database-f0cdcbcd.js';
import 'dns';
import { j as json } from './index-0087e825.js';
import 'os';
import 'tty';
import 'util';
import 'fs';
import 'path';
import 'child_process';
import 'fs/promises';
import 'async_hooks';
import 'events';

async function POST({ request }) {
  const { username } = await request.json();
  const user = await db.user.findUnique({
    where: { username }
  });
  return json({ user }, { status: 201 });
}

export { POST };
//# sourceMappingURL=_server.ts-91056b99.js.map
