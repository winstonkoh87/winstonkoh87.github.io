const winstonAvatar = new Proxy({"src":"/_astro/winston-avatar.CP04Uh4d.jpg","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/winston-avatar.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/winston-avatar.jpg");
							return target[name];
						}
					});

export { winstonAvatar as w };
