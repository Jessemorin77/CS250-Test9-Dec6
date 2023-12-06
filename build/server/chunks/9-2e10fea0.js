import { d as db } from './database-f0cdcbcd.js';
import { f as fail } from './index-0087e825.js';
import 'os';
import 'tty';
import 'util';
import 'fs';
import 'path';
import 'child_process';
import 'fs/promises';
import 'async_hooks';
import 'events';

const load = async ({ request, cookies }) => {
  const foundUserCookie = cookies.get("foundUser");
  return {
    foundUserCookie
  };
};
const actions = {
  findUser: async ({ request, cookies }) => {
    try {
      const formData = Object.fromEntries(await request.formData());
      const { userName } = formData;
      const foundUser = await db.user.findUnique({
        where: {
          username: String(userName)
        }
      });
      console.log(foundUser);
      if (!foundUser) {
        return fail(404, { error: { message: "User not found" } });
      }
      if (foundUser) {
        cookies.set("foundUser", JSON.stringify(foundUser));
      }
      return {
        body: {
          foundUser
        }
      };
    } catch (err) {
      console.error(err);
      return fail(500, {
        error: { message: "Internal Server Error: finding user" }
      });
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-e743d346.js')).default;
const server_id = "src/routes/(app)/chatrooms/create.backup/+page.server.ts";
const imports = ["_app/immutable/nodes/9.20e81d19.js","_app/immutable/chunks/index.229400e6.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-2e10fea0.js.map
