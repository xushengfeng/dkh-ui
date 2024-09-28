import {
    addStyle,
    view,
    pureStyle,
    initDev,
    type ElType,
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
