import {
    view,
    pureStyle,
    initDev,
    type ElType,
    dynamicList,
} from "../../src/main";
import assert from "../lib/assert";
pureStyle();

initDev();

function assertHTML(el: ElType<HTMLElement>, expected: string) {
    assert(el, expected, (el) => el.el.innerHTML);
}

const srcL = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function crEl(l: string[]) {
    return l.map((i) => [i, view().add(i)] as [string, ElType<HTMLDivElement>]);
}

function crEl2(l: string[]) {
    return l.map((i) => `<div>${i}</div>`).join("");
}

const pel = view().addInto();

const dl = dynamicList(pel, crEl(srcL), (id) => view().add(id));

assertHTML(pel, crEl2(srcL));

// move 1
srcL.splice(0, 1);
srcL.push("1");
dl.setList(srcL);
assertHTML(pel, crEl2(srcL));

// random move
for (let i = 0; i < srcL.length; i++) {
    const j = Math.floor(Math.random() * srcL.length);
    const temp = srcL[i];
    srcL[i] = srcL[j];
    srcL[j] = temp;
}
dl.setList(srcL);
assertHTML(pel, crEl2(srcL));

// add rm
srcL.splice(0, 2);
srcL.splice(3, 0, "12");
srcL.push("11");
dl.setList(srcL);
assertHTML(pel, crEl2(srcL));

// add rm
const nl = Array.from(
    new Set(
        Array(20)
            .fill(0)
            .map(() => Math.floor(Math.random() * 20).toString()),
    ),
);
dl.setList(nl);
assertHTML(pel, crEl2(nl));
