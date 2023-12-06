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
  const { addedUsers, chatname } = await request.json();
  const usersToConnect = addedUsers.map((id) => ({
    id
  }));
  const room = await db.room.create({
    data: {
      name: chatname,
      Chatroom: true,
      users: {
        connect: usersToConnect
      }
    },
    include: {
      users: true
    }
  });
  if (!room) {
    console.error("error creating room");
  } else {
    console.log("room created: ", room);
  }
  return json({ room }, { status: 201 });
}

export { POST };
//# sourceMappingURL=_server.ts-e228b69a.js.map
