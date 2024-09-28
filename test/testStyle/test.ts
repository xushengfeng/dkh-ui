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

ele("h2").add("theme").addInto();

const colorTheme = theme(
    { txt: "black", bg: "#eee", fontW: "normal" },
    { dark: { txt: "white", bg: "black", fontW: "bold" } },
);

const switchEl = radioGroup<(typeof colorTheme.getThemeNames)[number]>(
    "theme",
    true,
);
switchEl.new("0", "normal").addInto();
switchEl.new("dark", "dark").addInto();

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
switchEl2.new("0", "none").addInto();
switchEl2.new("r1", "round").addInto();
switchEl2.new("r2", "round2").addInto();

switchEl2.on(() => {
    shapeTheme.set(switchEl2.get());
});

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
    .add("Hello")
    .addInto();
