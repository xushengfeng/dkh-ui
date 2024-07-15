import { addStyle, view, txt, ele, spacer, setTranslate, pureStyle, input, button } from "../src/main";
pureStyle();

setTranslate((s) => s.toUpperCase());

let i = 0;
const t = txt("")
    .bindSet((el, v: string, t) => (el.innerText = t("count: ") + v))
    .sv(0)
    .style({ "font-size": "2rem", "user-select": "none" });
const b = button(txt("+")).on("click", () => {
    i++;
    t.sv(i);
});
const v = view([t, b], "x").style({ "align-items": "center" });

document.body.append(v.el);

document.body.append(
    input("hi").on("input", (_e, cel) => {
        t.sv(cel.value);
    }).el
);

function myComnent() {
    const Input = input("number").attr({ readonly: "true" });
    const add = button(txt("+"));
    const down = button(txt("-"));

    let n = 0;
    Input.bindSet((el, v) => (el.value = v + "n")).sv(n);
    add.on("click", () => {
        n++;
        Input.sv(n);
    });
    down.on("click", () => {
        n--;
        Input.sv(n);
    });

    return view([Input, view([add, down], "y")], "x")
        .bindSet((el, v) => {
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
        c.sv(el.value);
    }).el
);
