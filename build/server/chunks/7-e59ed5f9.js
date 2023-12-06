import { d as db } from './database-f0cdcbcd.js';
import { f as fail, r as redirect } from './index-0087e825.js';
import 'os';
import 'tty';
import 'util';
import 'fs';
import 'path';
import 'child_process';
import 'fs/promises';
import 'async_hooks';
import 'events';

const load = async ({ params }) => {
  try {
    const roomId = parseInt(params.slug);
    const room = await db.room.findUnique({
      where: {
        id: roomId
      }
    });
    return {
      room
    };
  } catch (err) {
    console.error("Error: ", err);
    return fail(500, { error: { message: "Internal server error" } });
  }
};
const actions = {
  rename: async ({ params, request }) => {
    try {
      const roomId = parseInt(params.slug);
      const data = await request.formData();
      const newName = data.get("newName")?.toString();
      if (newName && (newName.length > 15 || newName.length < 3)) {
        throw "Name is too long or too short";
      }
      await db.room.update({
        where: {
          id: roomId
        },
        data: {
          name: newName
        }
      });
    } catch (err) {
      console.error("Error: ", err);
      return fail(500, { error: { message: "Internal server error" } });
    }
  },
  exit: async ({ locals, params }) => {
    try {
      const roomId = parseInt(params.slug);
      const userId = parseInt(locals.user.id);
      const room = await db.room.findUnique({
        where: { id: roomId },
        include: { users: true }
        // Include users for filtering
      });
      if (!room) {
        return fail(400, { error: { message: "Missing room ID" } });
      }
      if (room.users.length == 1) {
        await db.room.update({
          where: { id: roomId },
          data: {
            users: {
              disconnect: { id: userId }
              // Disconnect the specific user
            }
          }
        });
        await db.room.delete({
          where: { id: roomId }
        });
        console.log("deleted");
      } else {
        await db.room.update({
          where: { id: roomId },
          data: {
            users: {
              disconnect: { id: userId }
              // Disconnect the specific user
            }
          }
        });
      }
    } catch (error) {
      console.error("Error removing user:", error);
      return fail(500, { error: { message: "Internal server error" } });
    }
    throw redirect(302, "/chatrooms");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-c86605fe.js')).default;
const server_id = "src/routes/(app)/chatrooms/[slug]/edit/+page.server.ts";
const imports = ["_app/immutable/nodes/7.399626f4.js","_app/immutable/chunks/index.229400e6.js","_app/immutable/chunks/forms.15716094.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.5e8b43ba.js","_app/immutable/chunks/navigation.7b839990.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-e59ed5f9.js.map
