const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.f137ca87.js","app":"_app/immutable/entry/app.6c25b8a1.js","imports":["_app/immutable/entry/start.f137ca87.js","_app/immutable/chunks/index.229400e6.js","_app/immutable/chunks/singletons.5e8b43ba.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.6c25b8a1.js","_app/immutable/chunks/index.229400e6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-17acda9e.js')),
			__memo(() => import('./chunks/1-3e1833b8.js')),
			__memo(() => import('./chunks/2-219b4011.js')),
			__memo(() => import('./chunks/3-30a2126a.js')),
			__memo(() => import('./chunks/4-583d2927.js')),
			__memo(() => import('./chunks/5-0c5e7aa2.js')),
			__memo(() => import('./chunks/6-28891864.js')),
			__memo(() => import('./chunks/7-e59ed5f9.js')),
			__memo(() => import('./chunks/8-f3b26e45.js')),
			__memo(() => import('./chunks/9-2e10fea0.js')),
			__memo(() => import('./chunks/10-c2b672ef.js')),
			__memo(() => import('./chunks/11-a94b7908.js')),
			__memo(() => import('./chunks/12-d2349e50.js')),
			__memo(() => import('./chunks/13-48ad1862.js')),
			__memo(() => import('./chunks/14-a5501f6e.js')),
			__memo(() => import('./chunks/15-719c3414.js')),
			__memo(() => import('./chunks/16-2424fe0d.js')),
			__memo(() => import('./chunks/17-6615c06d.js')),
			__memo(() => import('./chunks/18-f026ab19.js')),
			__memo(() => import('./chunks/19-e3816e77.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(app)/api/createRoom",
				pattern: /^\/api\/createRoom\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-e228b69a.js'))
			},
			{
				id: "/(app)/api/searchFriend",
				pattern: /^\/api\/searchFriend\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-91056b99.js'))
			},
			{
				id: "/(app)/api/searchUser",
				pattern: /^\/api\/searchUser\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-cf9163ed.js'))
			},
			{
				id: "/(app)/chatrooms",
				pattern: /^\/chatrooms\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(app)/chatrooms/create.backup",
				pattern: /^\/chatrooms\/create\.backup\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/chatrooms/create",
				pattern: /^\/chatrooms\/create\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/chatrooms/[slug]",
				pattern: /^\/chatrooms\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/chatrooms/[slug]/edit",
				pattern: /^\/chatrooms\/([^/]+?)\/edit\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/directMessage",
				pattern: /^\/directMessage\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(app)/friends",
				pattern: /^\/friends\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(app)/globalChat",
				pattern: /^\/globalChat\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(auth)/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(app)/notifications",
				pattern: /^\/notifications\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(app)/notifications/[slug]",
				pattern: /^\/notifications\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(auth)/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(app)/sendNot",
				pattern: /^\/sendNot\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(app)/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
