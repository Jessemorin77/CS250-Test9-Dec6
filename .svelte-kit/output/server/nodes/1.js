

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.853d297c.js","_app/immutable/chunks/index.229400e6.js","_app/immutable/chunks/singletons.5e8b43ba.js"];
export const stylesheets = [];
export const fonts = [];
