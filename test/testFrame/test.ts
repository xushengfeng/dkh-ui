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
    frame,
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

function add(...els: ElType<HTMLElement>[]) {
    for (const el of els) {
        document.body.append(el.el);
    }
}

function assertContent(el: ElType<HTMLElement>, expected: string) {
    assert(el, expected, (el) => el.el.innerText);
}
function assertHTML(el: ElType<HTMLElement>, expected: string) {
    assert(el, expected, (el) => el.el.outerHTML);
}

add(ele("h2").add("frame"));

const f = frame("test", {
    _: view("y"),
    title: txt("t"), // todo 可支持其他类型
    content: p(),
    l1: {
        _: view("x"),
        deepInput: input(),
    },
});

f.els.content.sv("hello");
f.els.deepInput.sv("test");
console.assert(f.els.deepInput.gv === "test");

assertHTML(
    f.el,
    '<div style="display: flex; flex-flow: column;" id="test_test"><span id="test_title">t</span><p id="test_content">hello</p><div style="display: flex; flex-flow: row;" id="test_l1"><input type="text" id="test_deepInput"></div></div>',
);
