import * as server from '../entries/pages/(app)/sendNot/_page.server.ts.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/sendNot/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/sendNot/+page.server.ts";
export const imports = ["_app/immutable/nodes/15.dcdb68b0.js","_app/immutable/chunks/index.229400e6.js","_app/immutable/chunks/forms.15716094.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.5e8b43ba.js","_app/immutable/chunks/navigation.7b839990.js"];
export const stylesheets = [];
export const fonts = [];
