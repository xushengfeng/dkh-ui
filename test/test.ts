import { addStyle, view, txt, ele, spacer, setTranslate, pureStyle, input, button } from "../src/main";
pureStyle();

setTranslate((s) => s.toUpperCase());

let i = 0;
const t = txt("")
    .value((el, v: string, t) => (el.innerText = t("count: ") + v))
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
