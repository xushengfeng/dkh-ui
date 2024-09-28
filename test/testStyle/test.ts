import {
    addStyle,
    view,
    pureStyle,
    initDev,
    type ElType,
    ele,
    theme,
    check,
    radioGroup,
} from "../../src/main";
import assert from "../lib/assert";
pureStyle();

addStyle({
    h2: {
        fontWeight: "bold",
        fontSize: "20px",
    },
});

initDev();

function assertStyle(el: ElType<HTMLElement>, expected: string) {
    assert(el, expected, (el) => el.el.getAttribute("style") || "");
}

assertStyle(
    view().style({
        backgroundColor: "aqua",
        width: "100px",
        height: "100px",
    }),
    "background-color: aqua; width: 100px; height: 100px;",
);
assertStyle(
    view().style({
        backgroundColor: "aqua",
        width: "100px",
        height: "100px",
        "background-color": "aquamarine",
    }),
    "background-color: aquamarine; width: 100px; height: 100px;",
);
assertStyle(
    view()
        .style({
            backgroundColor: "aqua",
            width: "100px",
            height: "100px",
        })
        .style({ backgroundColor: "aquamarine" }),
    "background-color: aquamarine; width: 100px; height: 100px;",
);
assertStyle(
    view()
        .style({
            backgroundColor: "aqua",
            width: "100px",
            height: "100px",
            border: "1px solid black",
        })
        .style({ backgroundColor: "" }),
    "width: 100px; height: 100px; border: 1px solid black;",
);

function add(...els: ElType<HTMLElement>[]) {
    for (const el of els) {
        document.body.append(el.el);
    }
}

add(ele("h2").add("theme"));

const colorTheme = theme(
    { txt: "black", bg: "#eee", fontW: "normal" },
    { dark: { txt: "white", bg: "black", fontW: "bold" } },
);

const switchEl = radioGroup<(typeof colorTheme.getThemeNames)[number]>(
    "theme",
    true,
);
add(switchEl.new("0", "normal"));
add(switchEl.new("dark", "dark"));

switchEl.on(() => {
    colorTheme.set(switchEl.get());
});

const shapeTheme = theme(
    { br: "0", p: "0" },
    { r1: { br: "10px", p: "10px" }, r2: { br: "20px", p: "20px" } },
);
const switchEl2 = radioGroup<(typeof shapeTheme.getThemeNames)[number]>(
    "shape",
    true,
);
add(switchEl2.new("0", "none"));
add(switchEl2.new("r1", "round"));
add(switchEl2.new("r2", "round2"));

switchEl2.on(() => {
    shapeTheme.set(switchEl2.get());
});

add(
    view()
        .style({
            backgroundColor: colorTheme.var.bg,
            color: colorTheme.var.txt,
            fontWeight: colorTheme.var.fontW,
            borderRadius: shapeTheme.var.br,
            padding: shapeTheme.var.p,
            transition: "all 0.3s",
            margin: "10px",
        })
        .add("Hello"),
);
