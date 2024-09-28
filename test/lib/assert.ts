import { view, type ElType } from "../../src/main";

function assert<El extends ElType<HTMLElement>>(
    el: El,
    expected: string,
    path: (el: El) => string,
) {
    document.body.append(view().add(el).el);
    console.assert(
        path(el) === expected,
        el.el,
        `${path} should be\n${expected}\nbut got\n${path(el)}`,
    );
}

export default assert;
