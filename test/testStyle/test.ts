import {
    addStyle,
    view,
    txt,
    ele,
    a,
    setTranslate,
    pureStyle,
    p,
    initDev,
    type ElType,
    noI18n,
    spacer,
    image,
    button,
    input,
    textarea,
    check,
    select,
    table,
    label,
    radioGroup,
} from "../../src/main";
pureStyle();

addStyle({
    h2: {
        fontWeight: "bold",
        fontSize: "20px",
    },
});

initDev();

function add(...els: ElType<HTMLElement>[]) {
    for (const el of els) {
        document.body.append(el.el);
    }
}

function assert(
    el: ElType<HTMLElement>,
    expected: string,
    path: "innerHTML" | "style",
) {
    add(view().add(el));
    console.assert(
        el.el[path] === expected,
        el.el,
        `${path} should be\n${expected}\nbut got\n${el.el[path]}`,
    );
}

function assertStyle(el: ElType<HTMLElement>, expected: string) {
    add(view().add(el));
    console.assert(
        el.el.getAttribute("style") === expected,
        el.el,
        `style should be\n${expected}\nbut got\n${el.el.getAttribute("style")}`,
    );
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
