/// <reference types="vite/client" />

import type * as CSS from "csstype";

import type { frameType } from "./frame";

type csshyphen = CSS.PropertiesHyphen &
    CSS.Properties & { [key: `--${string}`]: string };

import type {
    ParseSelector,
    StrictlyParseSelector, // or use the strict parser
} from "typed-query-selector/parser";

export {
    setTranslate,
    pureStyle,
    type el as ElType,
    pack,
    ele,
    elFromId,
    noI18n,
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
    label,
    radioGroup,
    table,
    addStyle,
    addClass,
    setProperty,
    setProperties,
    theme,
    frame,
    trackPoint,
    animate,
    initDev,
};

let dev = false;

type Text = string | PureText;

let t = (s: Text) => (s instanceof PureText ? s.text : s);

function setTranslate(f: (s: string) => string) {
    t = (s) => (s instanceof PureText ? s.text : f(s));
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

type inputTypeType =
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";

type getAttr<el extends HTMLElement> = (el extends HTMLInputElement
    ? Omit<{ [k in NonFunctionKeys<el>]?: el[k] }, "type"> & {
          type?: inputTypeType;
      }
    : { [k in NonFunctionKeys<el>]?: el[k] }) & {
    popover?: "auto" | "manual";
};

type generalEl =
    | HTMLElement
    | { el: HTMLElement }
    | el0
    | Text
    | DocumentFragment;
type addType = generalEl | generalEl[];

type dkhEL<EL extends HTMLElement, setValue, getValue> = {
    el: EL;
    style: (css: csshyphen) => dkhEL<EL, setValue, getValue>;
    on: <key extends keyof HTMLElementEventMap>(
        e: key,
        cb: (
            event: HTMLElementEventMap[key],
            cel: dkhEL<EL, setValue, getValue>,
        ) => void,
        op?: AddEventListenerOptions,
    ) => dkhEL<EL, setValue, getValue>;
    class: (...classes: string[]) => dkhEL<EL, setValue, getValue>;
    attr: (attr: getAttr<EL>) => dkhEL<EL, setValue, getValue>;
    data: (data: { [key: string]: string | null | undefined }) => dkhEL<
        EL,
        setValue,
        getValue
    >;
    add: (
        els?: addType,
        firstRender?: number,
        slice?: number,
    ) => dkhEL<EL, setValue, getValue>;
    clear: () => dkhEL<EL, setValue, getValue>;
    remove: () => void;
    addInto: (el?: HTMLElement | el0) => dkhEL<EL, setValue, getValue>;
    query: <selector extends string>(
        q: selector,
    ) => dkhEL<ParseSelector<selector, HTMLElement>, unknown, unknown> | null;
    queryAll: <selector extends string>(
        q: selector,
    ) => dkhEL<ParseSelector<selector, HTMLElement>, unknown, unknown>[];
    bindSet: <SV>(
        f: (v: SV, el: EL, trans: typeof t) => void,
    ) => dkhEL<EL, SV, getValue>;
    bindGet: <GV>(f: (el: EL) => GV) => dkhEL<EL, setValue, GV>;
    sv: (v?: NoInfer<setValue>) => dkhEL<EL, setValue, getValue>;
    svc: NoInfer<setValue>;
    readonly gv: NoInfer<getValue>;
};

function pack<EL extends HTMLElement>(
    el: EL,
    setter: (v: unknown, el: NoInfer<EL>, trans: typeof t) => void = () => {},
    getter: (el: NoInfer<EL>) => unknown = () => {},
) {
    function p(el: EL) {
        return pack(el, setter, getter);
    }

    const pel: dkhEL<EL, unknown, unknown> = {
        el,
        style: (css) => {
            for (const [i, x] of Object.entries(css)) {
                if (i.startsWith("--")) {
                    el.style.setProperty(i, x);
                } else {
                    const n = i
                        .split("-")
                        .map((v, i) => {
                            if (i === 0) return v;
                            return v.slice(0, 1).toUpperCase() + v.slice(1);
                        })
                        .join("");
                    // @ts-ignore
                    el.style[n] = x;
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
        class: (...classes) => {
            el.classList.add(
                ...classes
                    .filter((i) => typeof i === "string")
                    .map((i) => i.trim())
                    .filter((i) => i !== "" && !i.match(/\s/)),
            );
            return p(el);
        },
        attr: (attr) => {
            for (const i in attr) {
                // @ts-ignore
                el[i] = attr[i];
            }
            return p(el);
        },
        data: (data) => {
            for (const i in data) {
                const name = !i.startsWith("data-") ? `data-${i}` : i;
                if (data[i] !== null && data[i] !== undefined)
                    el.setAttribute(name, data[i]);
                else el.removeAttribute(name);
            }
            return p(el);
        },
        add: (els, firstRender, slice = 1) => {
            const listEl = els ? (Array.isArray(els) ? els : [els]) : [];
            const list = listEl.filter(Boolean).flatMap((el) => {
                if (typeof el === "string" || el instanceof PureText)
                    return document.createTextNode(t(el));
                if ("el" in el && el.el instanceof HTMLElement) return el.el;
                if (el instanceof DocumentFragment || el instanceof HTMLElement)
                    return el;
                return [];
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
        remove: () => {
            el.remove();
        },
        addInto: (pel = document.body) => {
            if (pel instanceof HTMLElement) {
                pel.appendChild(el);
            } else {
                pel.add(el);
            }
            return p(el);
        },
        query: <s extends string>(q: s) => {
            const qel = el.querySelector(q) as ParseSelector<s, HTMLElement>;
            if (!qel) return null;
            return pack(qel);
        },
        queryAll: <s extends string>(q: s) =>
            Array.from(el.querySelectorAll(q)).map((i) =>
                pack(i as ParseSelector<s, HTMLElement>),
            ),
        // @ts-ignore
        bindSet: (f: (v, el: EL, trans: typeof t) => void) => {
            return pack(el, f, getter);
        },
        // @ts-ignore
        bindGet: (f: (el: EL) => unknown) => {
            return pack(el, setter, f);
        },
        sv: (v?) => {
            setter(v, el, t);
            return p(el);
        },
        get gv() {
            return getter(el);
        },
        // @ts-ignore
        set svc(v) {
            setter(v, el, t);
        },
    };
    if (dev) {
        const error = new Error();
        // @ts-ignore
        if (!el._dkh) el._dkh = [];
        // @ts-ignore
        el._dkh.push({ el: pel, pos: error });
    }
    return pel;
}

type devData = { pos: Error; el: el0 }[];

function initDev() {
    dev = true;
    // @ts-ignore
    window._dkhDEV = (el: HTMLElement) => {
        // @ts-ignore
        const data: devData = el._dkh;
        if (!data) return null;
        for (const i of data) {
            console.log(i.pos);
        }
        return data.map((i) => i.el);
    };
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type el<t extends HTMLElement> = dkhEL<t, any, any>;

type el0 = el<HTMLElement>;

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

class PureText {
    constructor(public text: string) {}
}

function noI18n(text: string) {
    return new PureText(text);
}

function txt(text: Text = "", noI18n?: boolean) {
    return ele("span")
        .bindSet((v: Text, el) => {
            el.innerText = v instanceof PureText ? v.text : noI18n ? v : t(v);
        })
        .bindGet((el) => el.innerText)
        .sv(text);
}

function p(text: Text = "", noI18n?: boolean) {
    return ele("p")
        .bindSet((v: Text, el) => {
            el.innerText = v instanceof PureText ? v.text : noI18n ? v : t(v);
        })
        .bindGet((el) => el.innerText)
        .sv(text);
}

function a(url: string, localNav?: boolean) {
    const na = ele("a").attr({ href: url });
    if (localNav) {
        return na;
    }
    return na.attr({ target: "_blank" });
}

function view(stack?: "x" | "y", wrap?: "wrap") {
    const div = ele("div");
    if (stack)
        div.style({
            display: "flex",
            "flex-direction": stack === "x" ? "row" : "column",
            "flex-wrap": wrap ?? "nowrap",
        });
    return div;
}

function spacer() {
    return ele("div").style({ "flex-grow": "1" });
}

function image(src: string, name: Text) {
    return ele("img").attr({ src: src, alt: t(name) });
}

function button(el?: addType) {
    return ele("button").add(el);
}

function input(type: inputTypeType = "text") {
    return ele("input")
        .attr({ type })
        .bindSet((v: string, el) => {
            el.value = v;
        })
        .bindGet((el) => el.value);
}

function textarea(placeholder = "") {
    return ele("textarea")
        .attr(placeholder ? { placeholder: t(placeholder) } : {})
        .bindSet((v: string, el) => {
            el.value = v;
        })
        .bindGet((el) => el.value);
}

function check(name: string, els?: [generalEl, generalEl]) {
    const newName = name;
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
    const True =
        typeof els[0] === "object" && "gv" in els[0]
            ? els[0]
            : txt().add(els[0]);
    const False =
        typeof els[1] === "object" && "gv" in els[1]
            ? els[1]
            : txt().add(els[1]);
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
            v.sv(!v.gv);
            v.el.dispatchEvent(new Event("input"));
            v.el.dispatchEvent(new Event("change"));
        });
    return v;
}

function select<t extends string>(v: { name?: Text; value: t }[]) {
    return ele("select")
        .add(
            v.map((i) =>
                ele("option").attr({
                    innerText: t(i.name ?? i.value),
                    value: i.value,
                }),
            ),
        )
        .bindGet((el) => el.value as t)
        .bindSet((v: t, el) => {
            el.value = v;
        });
}

function label<xel extends el0>(els: [xel, ...generalEl[]], insertIndex = 0) {
    const el = els[0];
    const nels = els
        .slice(1, insertIndex + 1)
        .concat(el)
        .concat(els.slice(insertIndex + 1));
    return ele("label")
        .add(nels)
        .bindGet(() => {
            return el.gv;
        })
        .bindSet((v: xel["gv"]) => {
            el.sv(v);
        });
}

/** form radio, tab, buttons */
function radioGroup<t extends string>(name: string, _showInput = false) {
    const newName = name;
    const cb: (() => void)[] = [];
    let first = true;
    return {
        new: (value: t, el?: generalEl, showInput?: boolean) => {
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
                            display: !(showInput ?? _showInput) ? "none" : "",
                        })
                        .on("input", () => {
                            for (const c of cb) c();
                        }),
                )
                .add(el || value);
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
    body: Array<Array<generalEl>>,
    head?: { col?: boolean; row?: boolean },
) {
    function el(element: generalEl, type: "td" | "th") {
        if (typeof element === "string" || element instanceof PureText) {
            return ele(type).attr({ innerText: t(element) });
        }
        const tagName = type.toUpperCase();
        if ("el" in element) {
            if (element.el.tagName === tagName)
                return element as el<HTMLTableCellElement>;
        } else if ("tagName" in element) {
            if (element.tagName === tagName)
                return pack(element) as el<HTMLTableCellElement>;
        } else if (
            element.childElementCount === 1 &&
            element.children[0].tagName === tagName
        ) {
            return pack(
                element.children[0] as HTMLElement,
            ) as el<HTMLTableCellElement>;
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
                if ((head?.row && x === 0) || (head?.col && y === 0))
                    xels.push(el(element, "th"));
                else xels.push(el(element, "td"));
            }
        }
        yels.push(ele("tr").add(xels));
    }
    return ele("table").add(yels);
}

function createStyle(style: Record<string, csshyphen>) {
    let css = "";
    for (const [name, i] of Object.entries(style)) {
        css += `${name} {\n`;
        for (const [x, n] of Object.entries(i)) {
            css += `${css2css(x)}: ${n};\n`;
        }
        css += "}\n";
    }
    return css;
}

function addStyle(style: Record<string, csshyphen>) {
    ele("style")
        .attr({ innerHTML: createStyle(style) })
        .addInto();
}

function addClass(style: csshyphen, c: Record<string, csshyphen>) {
    const className = `dkh_${crypto.randomUUID().slice(0, 7)}`;
    let css = `.${className} {\n`;
    for (const [x, n] of Object.entries(style)) {
        css += `${css2css(x)}: ${n};\n`;
    }
    css += createStyle(c);
    css += "}\n";
    ele("style").attr({ innerHTML: css }).addInto();
    return className;
}

function css2css(css: string) {
    return css.replaceAll(/([A-Z])/g, "-$1").toLowerCase();
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

function theme<base extends Record<string, string>, themeName extends string>(
    baseTheme: base,
    themes: Record<themeName, Partial<base>>,
) {
    function setVar(map: { [name: string]: string }) {
        for (const i in map) {
            setProperty(`--${i}`, map[i]);
        }
    }
    setVar(baseTheme);
    const _var: Record<string, string> = {};
    for (const i of Object.keys(baseTheme)) {
        _var[i] = `var(--${i})`;
    }

    return {
        set: (name: themeName | "0") => {
            if (name === "0") {
                setVar(baseTheme);
                return;
            }
            setVar({ ...baseTheme, ...themes[name] });
        },
        var: _var as Record<keyof base, string>,
        getThemeNames: [...Object.keys(themes), "0"] as (themeName | "0")[],
    };
}

type Point = { x: number; y: number };

function trackPoint<Data, Data2>(
    el: el0,
    op: {
        start?: (e: PointerEvent) =>
            | (Point & {
                  zoom?: number;
                  data?: Data;
              })
            | null
            | undefined
            | false;
        ing: (
            point: Point & { zoom?: number },
            e: PointerEvent,
            more: {
                center: Point;
                startData: Data;
                v: ReturnType<typeof speed>;
            },
        ) => Data2;
        all?: (e: PointerEvent) => void;
        end?: (
            e: PointerEvent,
            more: {
                moved: boolean;
                startData: Data;
                ingData: Data2;
                v: ReturnType<typeof speed>;
            },
        ) => void;
    },
) {
    // todo zoom
    let start: Point | null = null;
    let moved = false;
    let abPoint = { x: 0, y: 0 };
    let initData: unknown;

    const history: (Point & { t: number })[] = [];

    el.on("pointerdown", (e) => {
        if (op.start) {
            const s = op.start(e);
            if (!s) return;
            e.preventDefault();
            start = { x: s.x, y: s.y };
            initData = s.data;
        } else start = { x: 0, y: 0 };
        abPoint = { x: e.clientX, y: e.clientY };
        history.push({ x: e.clientX, y: e.clientY, t: e.timeStamp });
    });
    function ing(e: PointerEvent) {
        const dx = e.clientX - abPoint.x;
        const dy = e.clientY - abPoint.y;
        const point = { x: dx + (start?.x ?? 0), y: dy + (start?.y ?? 0) };
        const v = speed(history);
        history.push({ x: e.clientX, y: e.clientY, t: e.timeStamp });
        return op.ing(point, e, {
            center: { x: e.clientX, y: e.clientY },
            startData: initData as Data,
            v,
        });
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
        if (op.end)
            op.end(e, {
                moved,
                startData: initData as Data,
                ingData: endData,
                v: speed(history),
            });
        moved = false;
    });
}

function speed(history: (Point & { t: number })[]): { v: number } & Point {
    const t = 100;
    if (history.length < 2) return { v: 0, x: 0, y: 0 };
    const last = history.at(-1) as (typeof history)[0];
    let first = history.at(0) as (typeof history)[0];
    for (let i = history.length - 1; i >= 0; i--) {
        first = history[i];
        if (history[i].t < last.t - t) break;
    }
    const dt = last.t - first.t;
    if (dt === 0) return { v: 0, x: 0, y: 0 };
    const dx = last.x - first.x;
    const dy = last.y - first.y;
    const v = Math.sqrt(dx * dx + dy * dy) / dt;
    return { v, x: dx / dt, y: dy / dt };
}

function animate<t extends Record<string, number>>(
    initData: () => t,
    run: (t: t) => void,
    duration = 1000,
) {
    let linearT = 0;
    let start: DOMHighResTimeStamp | null = null;

    let nowState: t | null = null;
    let lastState: t | null = null;
    let lastT = 0;
    let willState: t | null = null;

    stop();

    function r() {
        if (!start) return;
        linearT = (performance.now() - start) / duration;
        if (linearT <= 1 && lastState && willState) {
            const state = structuredClone(lastState);
            for (const [key, o] of Object.entries(state)) {
                const w = willState[key];
                const t = (linearT - lastT) / (1 - lastT);

                if (w !== undefined) {
                    // @ts-ignore
                    state[key] = (1 - t) * o + t * w;
                }
            }
            nowState = structuredClone(state);
            run(state);
            requestAnimationFrame(r);
        } else {
            run(structuredClone(willState) as t);
            stop();
        }
    }
    function stop() {
        nowState = null;
        lastState = null;
        lastT = 0;
        linearT = 1;
        start = null;
    }
    return {
        set: (state: t, runT?: number | ((t: number) => number)) => {
            const _l = linearT;
            linearT = 1 - linearT;
            if (runT) {
                linearT = typeof runT === "number" ? runT : runT(_l);
            }
            start = performance.now() - linearT * duration;

            if (linearT >= 1 || linearT === 0) {
                linearT = 0;
                start = performance.now();
                lastState = initData();
                lastT = 0;
            } else {
                lastState = structuredClone(nowState);
                lastT = linearT;
            }

            willState = structuredClone(state);
            r();
        },
        stop: () => {
            stop();
        },
    };
}
