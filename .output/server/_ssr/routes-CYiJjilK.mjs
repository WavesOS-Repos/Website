import { r as __toESM } from "../_runtime.mjs";
import { n as previewCategories, t as nextPreviewIndex } from "./preview-manifest-D4Ib-wjU.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as ArrowDownToLine, _ as ChevronDown, a as Sun, b as ArrowRight, c as Moon, d as Layers, f as Images, g as Command, h as FileCodeCorner, i as Terminal, l as Monitor, m as FolderTree, n as Waypoints, o as ScrollText, p as Github, r as WandSparkles, s as Palette, t as X, u as Menu, v as Check, x as ArrowLeft, y as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as SiGithub, r as SiReddit, t as SiDiscord } from "../_libs/react-icons.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CYiJjilK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var localArchiveFilename = "wavesos-website.zip";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function DesktopPreview({ media: mediaProp, categories = previewCategories }) {
	const [category, setCategory] = (0, import_react.useState)(0);
	const media = mediaProp ?? categories[category]?.media ?? [];
	const [index, setIndex] = (0, import_react.useState)(0);
	const [direction, setDirection] = (0, import_react.useState)(1);
	const [failedSource, setFailedSource] = (0, import_react.useState)(null);
	const item = media[index] ?? media[0];
	(0, import_react.useEffect)(() => {
		const linkEls = [];
		for (const m of media) {
			if (m.kind !== "image") continue;
			const link = document.createElement("link");
			link.rel = "preload";
			link.as = "image";
			link.href = m.src;
			document.head.appendChild(link);
			linkEls.push(link);
		}
		return () => {
			linkEls.forEach((el) => el.remove());
		};
	}, [media]);
	const move = (step) => {
		setDirection(step);
		setIndex((current) => nextPreviewIndex(current, step, media.length));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "desktop-preview-section container",
		id: "desktop-preview",
		"aria-labelledby": "desktop-preview-heading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gallery-intro",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "desktop-preview-heading",
					children: "Take a look"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "WavesOS / In motion"
				})]
			}),
			!mediaProp && categories.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "preview-categories",
				role: "tablist",
				"aria-label": "Preview categories",
				children: categories.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "tab",
					"aria-selected": i === category,
					className: `preview-category${i === category ? " active" : ""}`,
					onClick: () => {
						setCategory(i);
						setIndex(0);
						setFailedSource(null);
					},
					children: c.name
				}, c.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "desktop-preview",
				role: "region",
				"aria-roledescription": "carousel",
				"aria-label": "WavesOS desktop media",
				onKeyDown: (event) => {
					if (event.target.tagName === "VIDEO") return;
					if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
						event.preventDefault();
						move(event.key === "ArrowLeft" ? -1 : 1);
					}
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "desktop-preview-stage",
					children: item ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `desktop-preview-slide ${direction < 0 ? "from-left" : "from-right"}`,
						children: failedSource === item.src ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "desktop-preview-empty",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Images, { size: 28 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This preview could not be loaded." })]
						}) : item.kind === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							className: "desktop-preview-media",
							src: item.src,
							controls: true,
							playsInline: true,
							preload: "metadata",
							"aria-label": item.label,
							onError: () => setFailedSource(item.src)
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							className: "desktop-preview-picture",
							"aria-label": "Next desktop preview",
							title: "Next desktop preview",
							onClick: () => move(1),
							disabled: media.length < 2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "desktop-preview-media",
								src: item.src,
								alt: item.label,
								decoding: "async",
								loading: "eager",
								onError: () => setFailedSource(item.src)
							})
						})
					}, item.src) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "desktop-preview-empty",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Images, { size: 32 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [mediaProp ? "Desktop" : categories[category]?.name ?? "Desktop", " previews coming soon"] })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "desktop-preview-toolbar",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "desktop-preview-status",
						"aria-live": "polite",
						"aria-atomic": "true",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item?.label ?? "WavesOS desktop" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "desktop-preview-count",
							children: media.length ? `${index + 1} / ${media.length}` : "0 / 0"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "desktop-preview-controls",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "desktop-preview-arrow",
							"aria-label": "Previous preview",
							title: "Previous preview",
							disabled: media.length < 2,
							onClick: () => move(-1),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "desktop-preview-arrow",
							"aria-label": "Next preview",
							title: "Next preview",
							disabled: media.length < 2,
							onClick: () => move(1),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })
						})]
					})]
				})]
			})
		]
	});
}
function prefersReducedMotion() {
	return typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function useRevealOnScroll() {
	(0, import_react.useEffect)(() => {
		const targets = document.querySelectorAll("[data-reveal]");
		if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
			targets.forEach((element) => element.classList.add("is-visible"));
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			}
		}, {
			rootMargin: "0px 0px -10% 0px",
			threshold: .12
		});
		targets.forEach((element) => observer.observe(element));
		return () => observer.disconnect();
	}, []);
}
function useScrollTilt(ref) {
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node || prefersReducedMotion()) return;
		let frame = 0;
		const update = () => {
			frame = 0;
			const rect = node.getBoundingClientRect();
			const viewport = window.innerHeight;
			const progress = Math.min(1, Math.max(0, (viewport - rect.top) / (viewport + rect.height)));
			node.style.setProperty("--scroll", progress.toFixed(3));
		};
		const requestUpdate = () => {
			if (!frame) frame = window.requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", requestUpdate, { passive: true });
		window.addEventListener("resize", requestUpdate);
		return () => {
			window.removeEventListener("scroll", requestUpdate);
			window.removeEventListener("resize", requestUpdate);
			window.cancelAnimationFrame(frame);
		};
	}, [ref]);
}
var ZIP_URL = `/downloads/${encodeURIComponent(localArchiveFilename)}`;
var SOURCE_URL = "https://github.com/WavesOS-Repos/WavesHyprland";
var DISCORD_URL = "https://discord.gg/y3p9J4z75";
var REDDIT_URL = "https://www.reddit.com/r/WavesOS/";
var DOWNLOAD_FILENAME = "wavesos-website.zip";
var WALLPAPER_WEBP_URL = `/wavesos-wallpaper.webp`;
var WALLPAPER_BASE = `/wavesos-wallpaper`;
var WALLPAPER_JPEG_URL = `/wavesos-wallpaper.jpg`;
var LOGO_URL = `/wavesos-logo.jpg`;
var faqs = [
	{
		q: "What is WavesOS?",
		source: true,
		a: "WavesOS is an Arch Linux + Hyprland rice delivered by the WavesHyprland installer. It sets up a coordinated desktop—compositor, bar, launcher, theming, lock and login—so you start from something that already feels intentional, not from an empty tty and a pile of unrelated dotfiles."
	},
	{
		q: "Is WavesOS a full Linux distribution?",
		a: "No. It isn’t a separate distro like Omarchy. You stay on Arch. WavesOS is the desktop layer and installer that makes Hyprland usable and cohesive from the first session."
	},
	{
		q: "Is WavesOS free and open source?",
		source: true,
		a: "Yes. The installer and configuration live in the open as WavesHyprland on GitHub. You can read every script before you run it."
	},
	{
		q: "Do I need Quickshell or a custom desktop shell?",
		a: "No. WavesOS doesn’t replace Hyprland with a heavy shell stack. It stays close to Hyprland itself: modular config, scripts and familiar tools like Waybar and Rofi."
	},
	{
		q: "How do settings work?",
		a: "There’s no separate settings app hiding everything behind a proprietary panel. Practical controls use scripts and Hyprland configuration—including a Hyprland settings script that edits your config directly. You keep the Arch habit of knowing where your files live."
	},
	{
		q: "Can I still customize everything?",
		a: "Yes. The point is a strong default, not a cage. Configs are modular and editable—install for a finished baseline, then change what you care about."
	},
	{
		q: "What hardware do I need?",
		a: "A machine that runs Arch and Hyprland comfortably: 64-bit, with working GPU drivers for Wayland. Exactly like any modern Hyprland setup—nothing exotic beyond that."
	},
	{
		q: "How do updates work?",
		a: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"You update Arch as usual with ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "pacman" }),
			" or your normal workflow. WavesOS doesn’t take over your system updater. Desktop config lives in your home directory, so you stay in control of what changes."
		] })
	}
];
function Home() {
	const [isDark, setIsDark] = (0, import_react.useState)(true);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const heroStageRef = (0, import_react.useRef)(null);
	useScrollTilt(heroStageRef);
	useRevealOnScroll();
	(0, import_react.useEffect)(() => {
		let dark = true;
		try {
			dark = window.localStorage.getItem("wavesos-theme") !== "light";
		} catch {}
		setIsDark(dark);
		document.documentElement.classList.toggle("dark", dark);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", isDark);
	}, [isDark]);
	const toggleTheme = () => setIsDark((value) => {
		const next = !value;
		try {
			window.localStorage.setItem("wavesos-theme", next ? "dark" : "light");
		} catch {}
		return next;
	});
	const external = {
		target: "_blank",
		rel: "noreferrer"
	};
	const closeMenu = () => setMenuOpen(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "site-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "topbar",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container nav-inner",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "brand",
							href: "#top",
							"data-testid": "link-home",
							onClick: closeMenu,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: LOGO_URL,
								alt: "",
								width: 38,
								height: 38
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["WavesOS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ARCH / HYPRLAND" })] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: `nav-links${menuOpen ? " is-open" : ""}`,
							"aria-label": "Main navigation",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#experience",
									onClick: closeMenu,
									children: "Experience"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#stack",
									onClick: closeMenu,
									children: "The toolkit"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#install",
									onClick: closeMenu,
									children: "Install"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#philosophy",
									onClick: closeMenu,
									children: "Philosophy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#faq",
									onClick: closeMenu,
									children: "FAQ"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "nav-actions",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									className: "theme-toggle",
									type: "button",
									onClick: toggleTheme,
									"aria-label": `Switch to ${isDark ? "light" : "dark"} theme`,
									title: `Switch to ${isDark ? "light" : "dark"} theme`,
									"data-testid": "button-theme-toggle",
									children: isDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { size: 17 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 17 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "button small nav-download",
									href: ZIP_URL,
									download: DOWNLOAD_FILENAME,
									"data-testid": "link-download-nav",
									children: ["Download ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownToLine, { size: 15 })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "menu-toggle",
									type: "button",
									"aria-expanded": menuOpen,
									"aria-label": menuOpen ? "Close navigation menu" : "Open navigation menu",
									onClick: () => setMenuOpen((open) => !open),
									children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 19 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 19 })
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hero container",
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", {
						className: "hero-wallpaper",
						"aria-hidden": "true",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							type: "image/webp",
							sizes: "100vw",
							srcSet: `${WALLPAPER_BASE}-640.webp 640w, ${WALLPAPER_BASE}-960.webp 960w, ${WALLPAPER_BASE}-1280.webp 1280w, ${WALLPAPER_WEBP_URL} 2048w`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: WALLPAPER_JPEG_URL,
							alt: "",
							width: 1024,
							height: 576,
							fetchPriority: "high"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-content",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "eyebrow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "live-dot" }), " An Arch + Hyprland desktop, brought together"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: ["Everything matches — ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "because everything listens." })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-copy",
								children: "One wallpaper drives Matugen, Waybar, Rofi, terminal, GTK, and lock — the whole rice stays in conversation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-buttons",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "button",
									href: ZIP_URL,
									download: DOWNLOAD_FILENAME,
									"data-testid": "link-download-hero",
									children: ["Download the installer ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownToLine, { size: 16 })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "button outline",
									href: SOURCE_URL,
									...external,
									"data-testid": "link-source-hero",
									children: ["View source ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-meta",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 13 }), " Open source"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { size: 13 }), " Guided or full install"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Command, { size: 13 }), " You stay in control"] })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-3d",
						ref: heroStageRef,
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-3d-scene",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hero-3d-layer hero-3d-back",
									style: { "--z": -120 }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "hero-3d-layer hero-3d-window",
									style: { "--z": 0 },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hero-3d-layer hero-3d-bar",
									style: { "--z": 110 }
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-aside",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							" A desktop in sync"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-index",
						children: "WAVESOS / 2025"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "signal-strip",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container signal-inner",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "signal-label",
						children: "One change. Every layer."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "signals",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waypoints, {}), " Hyprland"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, {}), " Matugen + Wallfliper"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {}), " Waybar + Rofi"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {}), " GTK + Qt themes"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, {}), " qylock + SDDM"] })
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section container",
				id: "experience",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "02 / Why WavesOS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							"data-reveal": "lines",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "line",
								children: "A desktop is more"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "line",
								children: "than its windows."
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Most setups stop at the compositor. WavesOS connects the details around it—so your colors, controls and daily tools feel like parts of the same place." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "manifesto-panel",
						"aria-label": "The WavesOS manifesto",
						"data-reveal": true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "manifesto-quote",
							children: ["“Made to be shown off. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Built to disappear.”" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "manifesto-copy",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "WavesOS is for people who care how Hyprland looks—and don’t want to rebuild it every week. It should feel finished when you log in, and still feel right when you stop tinkering." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "One wallpaper sets the tone. Matugen, Waybar, Rofi, terminal, and lock screens follow. You’re free to dig into the configs; you shouldn’t have to in order to get a desktop that matches." })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "feature-layout",
						"data-reveal": true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "feature-visual",
							role: "img",
							"aria-label": "WavesOS desktop preview showing wallpaper-led desktop styling",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "visual-grid",
								"aria-hidden": "true",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "W / 01" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "COLOR, IN MOTION" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "visual-label",
								children: ["WavesOS / desktop system", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Everything in its element." })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "feature-list",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "feature-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "feature-icon",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { size: 20 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Color has a through-line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Matugen carries wallpaper colors into your apps and desktop chrome. Change the scene, keep the system together." })] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "feature-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "feature-icon",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waypoints, { size: 20 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Hyprland at the center" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Wallfliper, Waybar and Rofi work around a tuned Wayland workflow, not beside it." })] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "feature-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "feature-icon",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { size: 20 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Install on your terms" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Use the guided menu, or choose the complete setup. The scripts are there to inspect before you run them." })] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "feature-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "feature-icon",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 20 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Yours to understand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Open source, community shaped, and built on your Arch install—not a mystery image." })] })]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopPreview, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section stack-section",
				id: "stack",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow",
								children: "03 / The toolkit"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								"data-reveal": "lines",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "line",
									children: "Separate tools."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "line",
									children: "One visual logic."
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A wallpaper-led system works because each layer has a job. WavesHyprland installs the pieces and gives them a shared language." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stack-grid",
							"data-reveal": true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "stack-item",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "stack-number",
											children: "01 / THE CANVAS"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Hyprland + Lua" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A configurable Wayland compositor with a workflow shaped around it." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "stack-item",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "stack-number",
											children: "02 / THE PALETTE"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Matugen + Wallfliper" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Wallpaper rotation and generated colors, carried through the system." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "stack-item",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "stack-number",
											children: "03 / THE STATUS"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Waybar" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Multiple layouts and a layout switcher, with styles driven by the active Matugen colors." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "stack-item",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "stack-number",
											children: "04 / THE LAUNCHER"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Rofi" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A multi-style launcher and theme switcher, with previews and colors matched to the wallpaper." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "stack-item",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "stack-number",
											children: "05 / THE APP SURFACE"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "GTK + Qt themes" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Dark and light switches coordinate Relax GTK, Kvantum and Relax icon packs across apps." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "stack-item",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "stack-number",
											children: "06 / THE SESSION"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Kitty, Hyprlock + qylock" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Matugen-colored terminal, Hyprlock session lock and SDDM login themed through qylock." })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stack-footnote",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "stack-footnote-mark",
								children: "↳"
							}), " Plus Thunar, wlogout, cliphist, screenshots, brightness and volume controls, nightlight, and other daily-use scripts."]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section container",
				id: "install",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "install-layout",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "install-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow",
								children: "04 / Start with a clean Arch install"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								"data-reveal": "lines",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "line",
									children: "Your system."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "line",
									children: "Your call."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Download or clone ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "WavesHyprland" }),
								", review the README, then run the installer from its directory."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "button outline",
								href: SOURCE_URL,
								...external,
								"data-testid": "link-inspect-source",
								children: ["Read the install notes ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "install-note",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "install-note-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"Run as a normal user. ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Do not launch with sudo." }),
									" The installer requests elevated access only for steps that need it."
								] })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "terminal",
						"aria-label": "Installation commands",
						"data-reveal": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "terminal-top",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "terminal-dots",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"bash ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "/" }),
										" WavesHyprland"
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "terminal-lock",
										children: "INSTALL"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "terminal-body",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "terminal-comment",
										children: "# Enter the project directory"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "term-code",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "term-prompt",
											children: "$"
										}), " cd WavesHyprland"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "term-code",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "term-prompt",
											children: "$"
										}), " chmod +x install.sh scripts/*.sh"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "terminal-comment terminal-comment-gap",
										children: "# Guided installer menu"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "term-code",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "term-prompt",
											children: "$"
										}), " ./install.sh"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "terminal-comment terminal-comment-gap",
										children: "# Or select the complete setup"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "term-code",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "term-prompt",
											children: "$"
										}), " ./install.sh --all"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "terminal-note",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "terminal-status",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), " Ready when you are"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "normal user · sudo when needed" })]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section heart-section",
				id: "philosophy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow",
								children: "05 / The heart of Hyprland"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								"data-reveal": "lines",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "line",
									children: "Simple"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "line",
									children: "on purpose."
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Hyprland is a modern Wayland compositor built on one idea: you shape the desktop through configuration you can read. WavesOS respects that." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "manifesto-panel heart-panel",
							"aria-label": "The WavesOS philosophy",
							"data-reveal": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "manifesto-quote",
								children: ["“Less setup. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nothing hidden.”" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "manifesto-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "WavesOS doesn’t wrap your rice in a heavy shell layer that’s hard to touch, and there’s no mandatory mega settings app standing between you and your files. A Hyprland-focused settings script and clear, modular configs edit the same configuration Hyprland already reads." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Arch’s strength is ownership—the terminal, the paths, the ability to change one file and know exactly what happened. WavesOS keeps that heart. It removes the painful first-time grind of assembling a rice from scratch, then gets out of the way." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "heart-result",
										children: "A desktop that’s convenient for everyday work—and still yours."
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pillar-grid",
							"data-reveal": true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "stack-item pillar",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "stack-number",
											children: ["01 / ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCodeCorner, { size: 13 })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Readable configs" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Modular Hyprland files you can open, understand and change—no generated maze." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "stack-item pillar",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "stack-number",
											children: ["02 / ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollText, { size: 13 })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Scripts, not black boxes" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Practical controls are plain shell scripts. Read them, tweak them, or replace them." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "stack-item pillar",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "stack-number",
											children: ["03 / ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderTree, { size: 13 })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Arch ownership" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
											"Your files live in ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "~/.config" }),
											". Your updates stay with ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "pacman" }),
											". You stay in charge."
										] })
									]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section container",
				id: "faq",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "06 / Common questions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						"data-reveal": "lines",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "line",
							children: "Before you"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "line",
							children: "install."
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Straight answers about what WavesOS is, what it isn’t, and how it fits into your Arch system." })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "faq-list",
					"data-reveal": true,
					children: faqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "faq-item",
						open: index === 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "faq-index",
								children: String(index + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "faq-q",
								children: faq.q
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
								className: "faq-chevron",
								size: 18,
								"aria-hidden": "true"
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "faq-a",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: faq.a }), faq.source && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "faq-link",
								href: SOURCE_URL,
								...external,
								children: ["Explore the source ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 13 })]
							})]
						})]
					}, faq.q))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "closing container",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "closing-panel",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "closing-orbit",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "W" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "closing-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow",
									children: "wavesos.org / make it yours"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									"data-reveal": "lines",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "line",
										children: "Hyprland,"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "line",
										children: "finished."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Start with the installer. Shape the desktop around you." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "closing-action",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "button",
								href: ZIP_URL,
								download: DOWNLOAD_FILENAME,
								"data-testid": "link-download-final",
								children: ["Get WavesOS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open source · Arch Linux · Hyprland" })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "footer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container footer-inner",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "brand",
							href: "#top",
							"data-testid": "link-footer-home",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: LOGO_URL,
								alt: "",
								width: 38,
								height: 38
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["WavesOS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "HYPRLAND, FINISHED." })] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "footer-credit",
							children: ["Developed by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tarang Verma" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "footer-socials",
							"aria-label": "WavesOS community links",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "social-link",
									href: DISCORD_URL,
									...external,
									"aria-label": "WavesOS Discord server",
									title: "Discord",
									"data-testid": "link-discord",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiDiscord, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Discord" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "social-link",
									href: REDDIT_URL,
									...external,
									"aria-label": "WavesOS Reddit community",
									title: "Reddit",
									"data-testid": "link-reddit",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiReddit, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reddit" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "social-link",
									href: SOURCE_URL,
									...external,
									"aria-label": "WavesHyprland on GitHub",
									title: "GitHub",
									"data-testid": "link-github-source",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiGithub, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "GitHub" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "footer-domain",
							href: "https://wavesos.org",
							...external,
							children: ["wavesos.org ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 12 })]
						})
					]
				})
			})
		]
	});
}
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Home, {});
}
var SplitComponent = App;
//#endregion
export { SplitComponent as component };
