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

function assertHTML(el: ElType<HTMLElement>, expected: string) {
    assert(el, expected, (el) => el.el.outerHTML);
}

ele("h2").add("bind").addInto();

const v = view().addInto();
// none
v.gv; // any
v.svc; // any
v.sv(["any"]);
console.assert(v.el.innerHTML === "");

// only set
const set = v.bindSet((v: string, el) => {
    el.innerText = v;
});
set.sv("hello");
console.assert(v.el.innerHTML === "hello");
set.svc = "world";
console.assert(v.el.innerHTML === "world");
console.assert(set.gv === undefined);

// only get
const get = v.bindGet((el) => el.innerText);
console.assert(get.gv === "world");
get.sv(["any"]);
console.assert(get.gv === "world");

// both
const all = v
    .bindSet((v: string, el) => {
        el.innerText = v;
    })
    .bindGet((el) => el.innerText);

all.sv("hw");
console.assert(all.gv === "hw");
all.svc = "world";
console.assert(all.gv === "world");

// both reverse
const all1 = v
    .bindGet((el) => el.innerText)
    .bindSet((v: string, el) => {
        el.innerText = v;
    });

all1.sv("hw");
console.assert(all1.gv === "hw");
all1.svc = "world";
console.assert(all1.gv === "world");

// span
set.style({ width: "100px", height: "100px" }).sv("span sv");
console.assert(set.el.innerHTML === "span sv");

// cover set
const set1 = set
    .bindSet((v, el) => {
        el.innerText = `${v} set1`;
    })
    .sv("x");
console.assert(set.el.innerHTML === "x set1");
set1.sv("y");
console.assert(set.el.innerHTML === "y set1");

// cover get
v.clear();
const get1 = get.bindGet((el) => `${el.innerText} get1`).sv("x");
console.assert(get1.gv === " get1");

// svc set value chain
const svc1 = view().bindSet((v) => console.assert(v === "hello"));
const svc2 = view().bindSet((v) => console.assert(v === "hello"));
const svc3 = view().bindSet((v) => console.assert(v === "hello"));
svc1.svc = svc2.svc = svc3.svc = "hello";
