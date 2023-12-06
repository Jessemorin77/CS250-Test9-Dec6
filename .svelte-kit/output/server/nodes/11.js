import * as server from '../entries/pages/(app)/friends/_page.server.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/friends/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/friends/+page.server.ts";
export const imports = ["_app/immutable/nodes/11.be4fa13a.js","_app/immutable/chunks/index.229400e6.js","_app/immutable/chunks/forms.15716094.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.5e8b43ba.js","_app/immutable/chunks/navigation.7b839990.js"];
export const stylesheets = [];
export const fonts = [];
