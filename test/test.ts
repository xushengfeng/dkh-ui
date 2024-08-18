import {
    addStyle,
    view,
    txt,
    ele,
    spacer,
    setTranslate,
    pureStyle,
    p,
    input,
    button,
    frame,
    setProperties,
    radioGroup,
    check,
    trackPoint,
    table,
    initDev,
} from "../src/main";
pureStyle();

initDev();

setTranslate((s) => (s[0] || "").toUpperCase() + s.slice(1));

let i = 0;
const t = txt("")
    .bindSet((v: number | string, el, t) => {
        el.innerText = t("count: ") + v;
    })
    .sv(0)
    .style({ "font-size": "2rem", "user-select": "none" });
const b = button(txt("+")).on("click", () => {
    i++;
    t.sv(i);
});
const v = view("x").add([t, b]).style({ "align-items": "center" });

document.body.append(v.el);

document.body.append(
    input("hi").on("input", (_e, cel) => {
        t.sv(cel.el.value);
    }).el,
);

function myComnent() {
    const Input = input("number")
        .attr({ readOnly: true })
        .data({ "data-a": "1", b: "2" });
    const add = button(txt("+"));
    const down = button(txt("-"));

    let n = 0;
    Input.bindSet((v, el) => {
        el.value = `${v}n`;
    }).sv(n);
    add.on("click", () => {
        n++;
        Input.sv(n.toString());
    });
    down.on("click", () => {
        n--;
        Input.sv(n.toString());
    });

    return view("x")
        .add([Input, view("y").add([add, down])])
        .bindSet((v: string) => {
            Input.sv(v);
        })
        .bindGet(() => {
            return Input.gv();
        });
}

const c = myComnent();

// @ts-ignore
window.g = c.gv;

document.body.append(ele("hr").el);

document.body.append(c.el);

document.body.append(
    input("x").on("input", (_, el) => {
        c.sv(el.gv());
    }).el,
);

const f = frame("a", {
    _: view(),
    t: txt("hi"),
    b: p("p2"),
    v: { _: view(), xx: input("a"), bu: button(txt("ok")) },
    e: p("end"),
});

console.log(f.src);

f.els.xx.sv("123456");
f.els.v
    .style({ display: "flex", "flex-direction": "column" })
    .style({ "--color": "#ff0" });
document.body.append(f.el.el);

setProperties({ "--main-color": "#0f0", "--font-size": "20px" });

const radioG = radioGroup<"web" | "swift" | "flutter">("buttons");

const buttons = view("x");

buttons.add([
    radioG.new("web"),
    radioG.new("swift", txt("swift"), true),
    radioG.new("flutter", txt("flutter")),
]);

// @ts-ignore
window.setRadio = radioG.set;

document.body.append(buttons.el);

radioG.on(() => console.log(radioG.get()));

const ch = check("sw", [txt("hi"), txt("bye")]).on("change", (_, el) => {
    console.log(el.gv());
});

document.body.append(ch.el);

const pointEl = view().style({
    width: "32px",
    height: "32px",
    background: "#0002",
    position: "relative",
});
document.body.append(pointEl.el);
trackPoint(pointEl, {
    start: (e) => {
        if (!e.shiftKey) {
            return { x: 0, y: 0 };
        }
    },
    ing: (p, c, e) => {
        console.log(p);
        pointEl.style({ left: `${p.x}px` });
    },
});

trackPoint(pointEl, {
    start: (e) => {
        if (e.shiftKey) {
            return { x: 0, y: 0 };
        }
    },
    ing: (p, c, e) => {
        console.log(p);
        pointEl.style({ top: `${p.y}px` });
    },
});

document.body.append(
    table(
        [
            ["1", "2", "3"],
            ["4", "5", "6"],
        ],
        { row: true, col: true },
    ).el,
);
