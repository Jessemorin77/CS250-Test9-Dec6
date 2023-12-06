const load = async ({ locals }) => {
  const userId = locals.user.id;
  return {
    userId
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-9acb17b0.js')).default;
const server_id = "src/routes/(app)/chatrooms/create/+page.server.ts";
const imports = ["_app/immutable/nodes/8.760e45d3.js","_app/immutable/chunks/index.229400e6.js","_app/immutable/chunks/navigation.fd9e95e2.js","_app/immutable/chunks/singletons.5f08f404.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-1ff79654.js.map
