/// <reference types="vite/client" />

import type * as CSS from "csstype";

type csshyphen = CSS.PropertiesHyphen & { [key: `--${any}`]: string };

export {
    setTranslate,
    pureStyle,
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
    button,
    check,
    radioGroup,
    addStyle,
    setProperty,
    setProperties,
    frame,
};

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
        "button,input:where([type='button']),input:where([type='reset']),input:where([type='submit'])": {
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

type v<x> = { [key in keyof x]: x[key] } & ("_" extends keyof x ? v<x["_"]> : {});

type frameI = { [key: string]: el0 | frameI; children?: frameI };
function frame<t extends { [key: string]: any }>(id: string, f: t) {
    let l = {};
    function w(ff: frameI) {
        let vi: ReturnType<typeof view>;
        for (let i in ff) {
            l[i] = ff[i];
            if (Object.keys(ff).indexOf(i) === 0) {
                vi = ff[i] as el<HTMLDivElement>;
                if (!vi.el.id) vi.el.id = `${id}_${i}`;
                continue;
            }
            if (i === "_") {
                vi.add(w(ff[i] as frameI));
            } else {
                const el = ff[i] as el0;
                if (!el.el.id) el.el.id = `${id}_${i}`;
                vi.add(ff[i] as el0);
            }
        }
        return vi;
    }
    return { el: w(f), els: l as v<t> };
}

type NonFunctionKeys<T> = {
    [K in keyof T]: T[K] extends String ? K : T[K] extends Number ? K : T[K] extends Boolean ? K : never;
}[keyof T];

type getAttr<el extends HTMLElement> = { [k in NonFunctionKeys<el>]?: el[k] };

function pack<EL extends HTMLElement>(
    el: EL,
    frag?: DocumentFragment,
    setter?: (el: EL, v: unknown, trans?: typeof t) => void,
    getter?: (el: EL) => unknown
) {
    if (!frag) frag = document.createDocumentFragment();
    function p(el: EL) {
        return pack(el, frag, setter, getter);
    }
    return {
        el,
        style: (css: csshyphen) => {
            for (let i in css) {
                if (i.startsWith("--")) {
                    el.style.setProperty(i, css[i]);
                } else {
                    const n = i
                        .split("-")
                        .map((v, i) => {
                            if (i === 0) return v;
                            else return v.slice(0, 1).toUpperCase() + v.slice(1);
                        })
                        .join("");
                    el.style[n] = css[i];
                }
            }
            return p(el);
        },
        on: <key extends keyof HTMLElementEventMap>(
            e: key,
            cb: (event?: HTMLElementEventMap[key], cel?: typeof el) => void
        ) => {
            el.addEventListener(e, (ev) => cb(ev, el));
            return p(el);
        },
        class: (...classes: string[]) => {
            classes.forEach((i) => el.classList.add(i));
            return p(el);
        },
        attr: (attr: getAttr<EL>) => {
            for (let i in attr) {
                el[i] = attr[i];
            }
            return p(el);
        },
        data: (data: { [key: string]: string }) => {
            for (let i in data) {
                const name = !i.startsWith("data-") ? `data-${i}` : i;
                el.setAttribute(name, data[i]);
            }
            return p(el);
        },
        add: (els: { el: HTMLElement } | { el: HTMLElement }[], firstRender?: number, slice?: number) => {
            if (Array.isArray(els)) {
                const list = els;
                let renderI = 0;
                function start(width: number) {
                    if (width === 1) {
                        el.append(list[renderI].el);
                    } else {
                        const end = Math.min(renderI + width, list.length);
                        const f = document.createDocumentFragment();
                        f.append(...list.slice(renderI, end).map((i) => i.el));
                        el.append(f);
                    }
                }
                if (firstRender) {
                    if (!slice) slice = 1;
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
                    start(ele.length);
                }
            } else {
                el.append(els.el);
            }
            return p(el);
        },
        bindSet: (f: (v: unknown, el: EL, trans?: typeof t) => void) => {
            setter = f;
            return p(el);
        },
        bindGet: (f: (el: EL) => unknown) => {
            getter = f;
            return p(el);
        },
        sv: (v: unknown) => {
            if (setter) setter(el, v, t);
            return p(el);
        },
        gv: () => {
            return getter(el);
        },
    };
}

type el<t extends HTMLElement> = ReturnType<typeof pack<t>>;

type el0 = ReturnType<typeof pack>;

function ele<K extends keyof HTMLElementTagNameMap>(tagName: K): el<HTMLElementTagNameMap[K]>;
function ele<K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K): el<HTMLElementDeprecatedTagNameMap[K]>;
function ele(tagName: string): el<HTMLElement>;
function ele(tagname: string) {
    return pack(document.createElement(tagname));
}

function elFromId(id: string) {
    const el = document.getElementById(id);
    if (!el) return el;
    else return pack(el);
}

function txt(text: string) {
    const span = document.createElement("span");
    span.innerText = t(text);
    return pack(span);
}

function p(text: string) {
    const p = document.createElement("p");
    p.innerText = t(text);
    return pack(p);
}

function a(t: el0, url: string, newTab?: string) {
    const a = document.createElement("a");
    a.href = url;
    a.append(t.el);
    const na = pack(a);
    if (newTab) {
        na.attr({ target: "_blank" });
    }
    return na;
}

function view(el?: el0 | el0[], stack?: "x" | "y") {
    const div = pack(document.createElement("div"));
    if (el) div.add(el);
    if (stack) div.style({ display: "flex" });
    if (stack === "x") div.style({ "flex-direction": "row" });
    else if (stack === "y") div.style({ "flex-direction": "column" });
    return div;
}

function spacer() {
    const div = pack(document.createElement("div"));
    div.style({ "flex-grow": "1" });
    return div;
}

function image(src: string, name: string) {
    const img = pack(document.createElement("img"));
    img.attr({ src: src, name: t(name) });
    return img;
}

function button(el?: el0 | el0[]) {
    const button = pack(document.createElement("button"));
    if (el) button.add(el);
    return button;
}

function input(name: string) {
    const input = pack(document.createElement("input"));
    input.attr({ name: t(name), type: "text" });
    input.bindSet((v: string, el) => (el.value = v));
    input.bindGet((el) => el.value);
    return input;
}

function check(name: string, els: [el0, el0]) {
    name = t(name);
    if (!els) {
        const input = pack(document.createElement("input"));
        input.attr({ name: name, type: "checkbox" });
        input.bindSet((v: boolean, el) => (el.checked = v));
        input.bindGet((el) => el.checked);
        return input;
    } else {
        const v = view();
        const True = els[0];
        const False = els[1];
        let value = false;
        v.add([True.style({ display: "none" }), False])
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
}

/** form radio, tab, buttons */
function radioGroup(name: string) {
    name = t(name);
    return {
        new: (value: string, el: el0) => {
            const p = view();
            p.add(
                ele("label")
                    .add(ele("input").attr({ type: "radio", name: name, value: value }))
                    .add(el)
            );
            return p;
        },
        get: () => {
            const l = document.getElementsByName(name);
            return Array.from(l).find((i: HTMLInputElement) => i.checked);
        },
        set: (value: string) => {
            const l = document.getElementsByName(name);
            (Array.from(l) as HTMLInputElement[]).find((i: HTMLInputElement) => i.value === value).checked = true;
        },
    };
}

function addStyle(style: { [className: string]: csshyphen }) {
    let css = "";
    for (let i in style) {
        css += `${i} {\n`;
        for (let x in style[i]) {
            css += `  ${x}: ${style[i][x]};\n`;
        }
        css += "}";
    }
    const styleEl = document.createElement("style");
    styleEl.innerHTML = css;
    document.body.append(styleEl);
}

function setProperty(name: string, v: string, el?: HTMLElement) {
    if (!el) {
        el = document.documentElement;
    }
    el.style.setProperty(name, v);
}
function setProperties(map: { [name: string]: string }, el?: HTMLElement) {
    if (!el) {
        el = document.documentElement;
    }
    for (let i in map) {
        setProperty(i, map[i], el);
    }
}
