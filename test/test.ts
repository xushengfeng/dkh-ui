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
} from "../src/main";
pureStyle();

setTranslate((s) => s.toUpperCase());

let i = 0;
const t = txt("")
    .bindSet((v: string, el, t) => (el.innerText = t("count: ") + v))
    .sv(0)
    .style({ "font-size": "2rem", "user-select": "none" });
const b = button(txt("+")).on("click", () => {
    i++;
    t.sv(i);
});
const v = view("x", [t, b]).style({ "align-items": "center" });

document.body.append(v.el);

document.body.append(
    input("hi").on("input", (_e, cel) => {
        t.sv(cel.el.value);
    }).el
);

function myComnent() {
    const Input = input("number").attr({ readOnly: true }).data({ "data-a": "1", b: "2" });
    const add = button(txt("+"));
    const down = button(txt("-"));

    let n = 0;
    Input.bindSet((v, el) => (el.value = v + "n")).sv(n);
    add.on("click", () => {
        n++;
        Input.sv(n);
    });
    down.on("click", () => {
        n--;
        Input.sv(n);
    });

    return view("x", [Input, view("y", [add, down])])
        .bindSet((v) => {
            Input.sv(v);
        })
        .bindGet(() => {
            return Input.gv();
        });
}

const c = myComnent();

window["g"] = c.gv;

document.body.append(ele("hr").el);

document.body.append(c.el);

document.body.append(
    input("x").on("input", (_, el) => {
        c.sv(el.gv());
    }).el
);

const f = frame("a", {
    o: view(),
    a: txt("hi"),
    b: p("p2"),
    _: { x: view(), xx: input("a"), bu: button(txt("ok")) },
    e: p("end"),
});

f.els.xx.sv("123456");
f.els.x.style({ display: "flex", "flex-direction": "column" }).style({ "--color": "#ff0" });
console.log(f);
document.body.append(f.el.el);

setProperties({ "--main-color": "#0f0", "--font-size": "20px" });

const radioG = radioGroup("buttons");

const buttons = view("x");

buttons.add([radioG.new("web", txt("web")), radioG.new("swift", txt("swift")), radioG.new("flutter", txt("flutter"))]);

window["setRadio"] = radioG.set;

document.body.append(buttons.el);

radioG.on(() => console.log(radioG.get()));

const ch = check("sw", [txt("hi"), txt("bye")]).on("change", (_, el) => {
    console.log(el.gv());
});

document.body.append(ch.el);
