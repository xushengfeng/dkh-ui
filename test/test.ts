import { addStyle, view, txt, ele, spacer, setTranslate, pureStyle } from "../src/main";
pureStyle();

setTranslate((s) => s.toUpperCase());

let i = 0;
const t = txt("")
    .value((el, v: string, t) => (el.innerText = t("count: ") + v))
    .sv(0)
    .style({ "font-size": "2rem" });
const b = ele("button")
    .on("click", (e) => {
        i++;
        t.sv(i);
    })
    .add(txt("+"));
const v = view([t, b], "x").style({ "align-items": "center" });

document.body.append(v.el);
