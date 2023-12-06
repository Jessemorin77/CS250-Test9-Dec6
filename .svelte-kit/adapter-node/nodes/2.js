import * as server from '../entries/pages/(app)/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.e5824f9c.js","_app/immutable/chunks/index.229400e6.js","_app/immutable/chunks/navigation.7b839990.js","_app/immutable/chunks/singletons.5e8b43ba.js","_app/immutable/chunks/clsx.m.1229b3e0.js"];
export const stylesheets = ["_app/immutable/assets/2.39103503.css"];
export const fonts = [];
