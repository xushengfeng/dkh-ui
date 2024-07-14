import { addStyle, view, txt, ele, spacer, setTranslate, pureStyle } from "../src/main";
pureStyle();

setTranslate((s) => s.toUpperCase());

let i = 0;
const t = txt("count");
const b = ele("button")
    .on("click", (e) => {
        i++;
        t.el.innerText = `count${i}`;
    })
    .add(txt("+"));
const v = view([t, b], "x").style({ "align-items": "center" });

document.body.append(v.el);
