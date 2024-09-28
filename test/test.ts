import {
    view,
    ele,
    setTranslate,
    pureStyle,
    p,
    initDev,
    pack,
    a,
} from "../src/main";
pureStyle();

initDev();

setTranslate((s) => (s[0] || "").toUpperCase() + s.slice(1));

pack(document.body).add(
    view().add([
        view().add([
            ele("h2").add("element"),
            a("./testItem/test.html").add(
                p("test element add class attr data"),
            ),
        ]),
        view().add([
            ele("h2").add("frame"),
            a("./testFrame/test.html").add(p("test frame")),
        ]),
        view().add([
            ele("h2").add("style"),
            a("./testStyle/test.html").add(p("test style")),
        ]),
        view().add([
            ele("h2").add("todo MVC"),
            a("./todoMVC/main.html").add(p("todo")),
        ]),
    ]),
);
