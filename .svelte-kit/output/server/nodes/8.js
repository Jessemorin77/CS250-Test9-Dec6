import * as server from '../entries/pages/(app)/chatrooms/create/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/chatrooms/create/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/chatrooms/create/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.a86d4a04.js","_app/immutable/chunks/index.229400e6.js","_app/immutable/chunks/navigation.7b839990.js","_app/immutable/chunks/singletons.5e8b43ba.js"];
export const stylesheets = [];
export const fonts = [];
