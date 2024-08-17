/// <reference types="vite/client" />

import type * as CSS from "csstype";

import type { frameType } from "./frame";

type csshyphen = CSS.PropertiesHyphen & { [key: `--${string}`]: string };

export {
    setTranslate,
    pureStyle,
    type el as ElType,
    pack,
    ele,
    elFromId,
    txt,
    p,
    a,
    view,
    spacer,
    image,
    input,
    textarea,
    button,
    check,
    select,
    radioGroup,
    table,
    addStyle,
    setProperty,
    setProperties,
    frame,
    trackPoint,
    initDev,
};

let dev = false;

let t = (s: string) => s;

function setTranslate(f: typeof t) {
    t = f;
}

function pureStyle() {
    // from tailwind css
    addStyle({
        "*,::before,::after": {
            "box-sizing": "border-box",
            "border-width": "0",
            "border-style": "solid",
        },
        "html,:host": {
            "line-height": "1.5",
            "-webkit-text-size-adjust": "100%",
            "-moz-tab-size": "4",
            "tab-size": "4",
            "-webkit-tap-highlight-color": "transparent",
        },
        body: {
            margin: "0",
            "line-height": "inherit",
        },
        hr: {
            height: "0",
            color: "inherit",
            "border-top-width": "1px",
        },
        "abbr:where([title])": {
            "text-decoration": "underline dotted",
        },
        "h1,h2,h3,h4,h5,h6": {
            "font-size": "inherit",
            "font-weight": "inherit",
        },

        a: {
            color: "inherit",
            "text-decoration": "inherit",
        },

        "b,strong": {
            "font-weight": "bolder",
        },
        "code,kbd,samp,pre": {
            "font-size": "1em",
        },
        small: {
            "font-size": "80%",
        },
        "sub,sup": {
            "font-size": "75%",
            "line-height": "0",
            position: "relative",
            "vertical-align": "baseline",
        },
        sub: {
            bottom: "-0.25em",
        },
        sup: {
            top: " -0.5em",
        },
        table: {
            "text-indent": "0",
            "border-color": "inherit",
            "border-collapse": "collapse",
        },
        "button,input,optgroup,select,textarea": {
            "font-family": "inherit",
            "font-feature-settings": "inherit",
            "font-variation-settings": "inherit",
            "font-size": "100%",
            "font-weight": "inherit",
            "line-height": "inherit",
            "letter-spacing": "inherit",
            color: "inherit",
            margin: "0",
            padding: "0",
        },
        "button,select": {
            "text-transform": "none",
        },
        "button,input:where([type='button']),input:where([type='reset']),input:where([type='submit'])":
            {
                "-webkit-appearance": "button",
                "background-color": "transparent",
                "background-image": "none",
            },
        ":-moz-focusring": {
            outline: "auto",
        },
        ":-moz-ui-invalid": {
            "box-shadow": "none",
        },
        progress: {
            "vertical-align": "baseline",
        },
        "::-webkit-inner-spin-button,::-webkit-outer-spin-button": {
            height: "auto",
        },
        "[type='search']": {
            "-webkit-appearance": "textfield",
            "outline-offset": "-2px",
        },
        "::-webkit-search-decoration": {
            "-webkit-appearance": "none",
        },
        "::-webkit-file-upload-button": {
            "-webkit-appearance": "button",
            font: "inherit",
        },
        summary: {
            display: "list-item",
        },
        "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": {
            margin: "0",
        },
        fieldset: {
            margin: "0",
            padding: "0",
        },
        legend: {
            padding: "0",
        },

        "ol,ul,menu": {
            "list-style": "none",
            margin: "0",
            padding: "0",
        },
        dialog: {
            padding: "0",
        },
        textarea: {
            resize: "vertical",
        },
        "input::placeholder,textarea::placeholder": {
            opacity: "1",
        },
        'button,[role="button"]': {
            cursor: "pointer",
        },
        ":disabled": {
            cursor: "default",
        },
        "img,svg,video,canvas,audio,iframe,embed,object": {
            display: "block",
            "vertical-align": "middle",
        },
        "img,video": {
            "max-width": "100%",
            height: "auto",
        },
        "[hidden]": {
            display: "none",
        },
    });
}

type frameI = { [key: string]: el0 | frameI; _: el<HTMLDivElement> };
// biome-ignore lint: I cant ctrl
function frame<Id extends string, t extends { [key: string]: any; _: any }>(
    id: Id,
    f: t,
) {
    // biome-ignore lint: I cant ctrl
    const l: { [key: string]: any } = {};
    function w(iid: string, ff: frameI) {
        let vi: ReturnType<typeof view> = view();
        for (const i in ff) {
            if (i === "_") {
                vi = ff[i];
                if (!vi.el.id) vi.el.id = `${id}_${iid}`;
                l[iid] = ff[i];
            } else {
                l[i] = ff[i];

                if ("_" in ff[i]) {
                    vi.add(w(i, ff[i]));
                } else {
                    const el = ff[i] as el0;
                    if (!el.el.id) el.el.id = `${id}_${i}`;
                    vi.add(el);
                }
            }
        }
        return vi;
    }
    return {
        el: w(id, f),
        els: l as frameType<t> & { [key in Id]: ReturnType<typeof view> },
        src: f,
    };
}

type NonFunctionKeys<T> = {
    [K in keyof T]: T[K] extends string
        ? K
        : T[K] extends number
          ? K
          : T[K] extends boolean
            ? K
            : never;
}[keyof T];

type getAttr<el extends HTMLElement> = { [k in NonFunctionKeys<el>]?: el[k] };

function pack<EL extends HTMLElement>(
    el: EL,
    setter: (v: unknown, el: NoInfer<EL>, trans: typeof t) => void = () => {},
    getter: (el: NoInfer<EL>) => unknown = () => {},
) {
    function p(el: EL) {
        return pack(el, setter, getter);
    }

    const pel = {
        el,
        style: (css: csshyphen) => {
            for (const i in css) {
                if (i.startsWith("--")) {
                    el.style.setProperty(i, css[i]);
                } else {
                    const n = i
                        .split("-")
                        .map((v, i) => {
                            if (i === 0) return v;
                            return v.slice(0, 1).toUpperCase() + v.slice(1);
                        })
                        .join("");
                    el.style[n] = css[i];
                }
            }
            return p(el);
        },
        on: <key extends keyof HTMLElementEventMap>(
            e: key,
            cb: (
                event: HTMLElementEventMap[key],
                cel: ReturnType<typeof p>,
            ) => void,
            op?: AddEventListenerOptions,
        ) => {
            el.addEventListener(e, (ev) => cb(ev, p(el)), op);
            return p(el);
        },
        class: (...classes: string[]) => {
            el.classList.add(...classes);
            return p(el);
        },
        attr: (attr: getAttr<EL>) => {
            for (const i in attr) {
                el[i] = attr[i];
            }
            return p(el);
        },
        data: (data: { [key: string]: string }) => {
            for (const i in data) {
                const name = !i.startsWith("data-") ? `data-${i}` : i;
                el.setAttribute(name, data[i]);
            }
            return p(el);
        },
        add: (
            els?:
                | HTMLElement
                | { el: HTMLElement }
                | string
                | (HTMLElement | { el: HTMLElement } | string)[],
            firstRender?: number,
            slice = 1,
        ) => {
            const listEl = els ? (Array.isArray(els) ? els : [els]) : [];
            const list = listEl.map((el) => {
                if (typeof el === "string")
                    return document.createTextNode(t(el));
                if ("el" in el) return el.el;
                return el;
            });
            let renderI = 0;
            function start(width: number) {
                if (width === 1) {
                    el.append(list[renderI]);
                } else {
                    const end = Math.min(renderI + width, list.length);
                    const f = document.createDocumentFragment();
                    f.append(...list.slice(renderI, end));
                    el.append(f);
                }
            }
            if (firstRender) {
                start(firstRender);
                function w() {
                    requestAnimationFrame(() => {
                        if (renderI < list.length) {
                            start(slice);
                            renderI += slice;
                            w();
                        }
                    });
                }
                renderI += firstRender;
                w();
            } else {
                start(listEl.length);
            }
            return p(el);
        },
        clear: () => {
            el.innerHTML = "";
            return p(el);
        },
        // biome-ignore lint: any input
        bindSet: (f: (v: any, el: EL, trans: typeof t) => void) => {
            return pack(el, f, getter);
        },
        bindGet: (f: (el: EL) => unknown) => {
            return pack(el, setter, f);
        },
        sv: (v?: unknown) => {
            setter(v, el, t);
            return p(el);
        },
        gv: () => {
            return getter(el);
        },
    };
    if (dev) {
        const error = new Error();
        if (!devMap.get(el)) devMap.set(el, []);
        devMap.get(el).push({ el: pel, pos: error });
    }
    return pel;
}

const devMap: Map<HTMLElement, { pos: Error; el: el0 }[]> = new Map();

function initDev() {
    dev = true;
    // @ts-ignore
    window._dkhDEV = (el: HTMLElement) => {
        for (const i of devMap.get(el)) {
            console.log(i.pos);
        }
        return devMap.get(el).map((i) => i.el);
    };
}

type el<t extends HTMLElement> = ReturnType<typeof pack<t>>;

type el0 = ReturnType<typeof pack>;

function ele<K extends keyof HTMLElementTagNameMap>(
    tagName: K,
): el<HTMLElementTagNameMap[K]>;
function ele<K extends keyof HTMLElementDeprecatedTagNameMap>(
    tagName: K,
): el<HTMLElementDeprecatedTagNameMap[K]>;
function ele(tagName: string): el<HTMLElement>;
function ele(tagname: string) {
    return pack(document.createElement(tagname));
}

function elFromId<EL extends HTMLElement>(id: string) {
    const el = document.getElementById(id);
    if (!el) return null;
    return pack<EL>(el as EL);
}

function txt(text: string, noI18n?: boolean) {
    return ele("span")
        .bindSet((v, el) => {
            el.innerText = noI18n ? v : t(v);
        })
        .sv(text);
}

function p(text: string, noI18n?: boolean) {
    return ele("p")
        .bindSet((v, el) => {
            el.innerText = noI18n ? v : t(v);
        })
        .sv(text);
}

function a(url: string, localNav?: boolean) {
    const na = ele("a").attr({ href: url });
    if (localNav) {
        return na;
    }
    return na.attr({ target: "_blank" });
}

function view(stack?: "x" | "y", el?: el0 | el0[]) {
    const div = ele("div").add(el);
    if (stack)
        div.style({
            display: "flex",
            "flex-direction": stack === "x" ? "row" : "column",
        });
    return div;
}

function spacer() {
    return ele("div").style({ "flex-grow": "1" });
}

function image(src: string, name: string) {
    return ele("img").attr({ src: src, alt: t(name) });
}

function button(el?: el0 | el0[] | string) {
    return ele("button").add(el);
}

function input(name: string) {
    return ele("input")
        .attr({ name: t(name), type: "text" })
        .bindSet((v: string, el) => {
            el.value = v;
        })
        .bindGet((el) => el.value);
}

function textarea(name: string) {
    return ele("textarea")
        .attr({ name: t(name) })
        .bindSet((v: string, el) => {
            el.value = v;
        })
        .bindGet((el) => el.value);
}

function check(name: string, els?: [el0, el0]) {
    const newName = t(name);
    if (!els) {
        const input = ele("input")
            .attr({ name: newName, type: "checkbox" })
            .bindSet((v: boolean, el) => {
                el.checked = v;
            })
            .bindGet((el) => el.checked);
        return input;
    }
    // todo 无障碍
    const True = els[0];
    const False = els[1];
    let value = false;
    const v = view()
        .add([True.style({ display: "none" }), False])
        .bindSet((v: boolean) => {
            value = v;
            if (v) {
                True.style({ display: "" });
                False.style({ display: "none" });
            } else {
                True.style({ display: "none" });
                False.style({ display: "" });
            }
        })
        .bindGet(() => value)
        .on("click", () => {
            v.sv(!v.gv());
            v.el.dispatchEvent(new Event("input"));
            v.el.dispatchEvent(new Event("change"));
        });
    return v;
}

function select(v: { name?: string; value: string }[]) {
    return ele("select")
        .add(
            v.map((i) =>
                ele("option").attr({
                    innerText: i.name ?? i.value,
                    value: i.value,
                }),
            ),
        )
        .bindGet((el) => el.value)
        .bindSet((v, el) => {
            el.value = v;
        });
}

/** form radio, tab, buttons */
function radioGroup<t extends string>(name: string) {
    const newName = t(name);
    const cb: (() => void)[] = [];
    let first = true;
    return {
        new: (value: t, el?: el0, showInput?: boolean) => {
            const p = ele("label")
                .add(
                    ele("input")
                        .attr({
                            type: "radio",
                            name: newName,
                            value: value,
                            checked: first,
                        })
                        .style({
                            display: el && !showInput ? "none" : "",
                        })
                        .on("input", () => {
                            for (const c of cb) c();
                        }),
                )
                .add(el || txt(value));
            first = false;
            return p;
        },
        get: () => {
            return (
                Array.from(
                    document.getElementsByName(newName),
                ) as HTMLInputElement[]
            ).find((i) => i.checked)?.value as t;
        },
        set: (value: t) => {
            if (!value) {
                for (const el of Array.from(
                    document.getElementsByName(newName),
                ) as HTMLInputElement[])
                    el.checked = false;
                return;
            }
            const el = (
                Array.from(
                    document.getElementsByName(newName),
                ) as HTMLInputElement[]
            ).find((i) => i.value === value);
            if (el) el.checked = true;
        },
        on: (callback: () => void) => {
            cb.push(callback);
        },
    };
}

function table(
    body: Array<Array<string | el0>>,
    head?: { col?: boolean; row?: boolean },
) {
    function el(element: string | el0, type: "td" | "th") {
        if (typeof element === "string") {
            return ele(type).attr({ innerText: element });
        }
        if (element.el.tagName === type.toUpperCase()) {
            return element as el<HTMLTableCellElement>;
        }
        return ele(type).add(element);
    }
    // todo span
    const yels: el<HTMLTableRowElement>[] = [];
    for (let y = 0; y < body.length; y++) {
        const xels: el<HTMLTableCellElement>[] = [];
        for (let x = 0; x < body[y].length; x++) {
            const element = body[y][x];
            if (element) {
                if ((head.row && x === 0) || (head.col && y === 0))
                    xels.push(el(element, "th"));
                else xels.push(el(element, "td"));
            }
        }
        yels.push(ele("tr").add(xels));
    }
    return ele("table").add(yels);
}

function addStyle(style: { [className: string]: csshyphen }) {
    let css = "";
    for (const i in style) {
        css += `${i} {\n`;
        for (const x in style[i]) {
            css += `  ${x}: ${style[i][x]};\n`;
        }
        css += "}";
    }
    document.body.append(ele("style").attr({ innerHTML: css }).el);
}

function setProperty(name: string, v: string, el = document.documentElement) {
    el.style.setProperty(name, v);
}
function setProperties(
    map: { [name: string]: string },
    el = document.documentElement,
) {
    for (const i in map) {
        setProperty(i, map[i], el);
    }
}

function trackPoint<Data, Data2>(
    el: el0,
    op: {
        start?: (e: PointerEvent) => {
            x: number;
            y: number;
            zoom?: number;
            data?: Data;
        };
        ing: (
            point: { x: number; y: number; zoom?: number },
            center: { x: number; y: number },
            e: PointerEvent,
            data: Data,
        ) => Data2;
        all?: (e: PointerEvent) => void;
        end?: (moved: boolean, e: PointerEvent, data: Data2) => void;
    },
) {
    // todo zoom
    let start: { x: number; y: number };
    let moved = false;
    let abPoint = { x: 0, y: 0 };
    let initData: unknown;
    el.on("pointerdown", (e) => {
        e.preventDefault();
        if (op.start) {
            const s = op.start(e);
            start = { x: s.x, y: s.y };
            if (s.data) initData = s.data;
        } else start = { x: 0, y: 0 };
        abPoint = { x: e.clientX, y: e.clientY };
    });
    function ing(e: PointerEvent) {
        const dx = e.clientX - abPoint.x;
        const dy = e.clientY - abPoint.y;
        const point = { x: dx + start.x, y: dy + start.y };
        return op.ing(
            point,
            { x: e.clientX, y: e.clientY },
            e,
            initData as Data,
        );
    }
    window.addEventListener("pointermove", (e) => {
        if (!start) {
            if (op.all) op.all(e);
            return;
        }
        e.preventDefault();
        ing(e);
        moved = true;
    });
    window.addEventListener("pointerup", (e) => {
        if (!start) return;
        e.preventDefault();
        const endData = ing(e);
        start = null;
        if (op.end) op.end(moved, e, endData);
    });
}
