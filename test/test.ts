import {
    view,
    ele,
    setTranslate,
    pureStyle,
    p,
    initDev,
    a,
    addStyle,
} from "../src/main";
pureStyle();

addStyle({
    h2: {
        fontWeight: "bold",
        fontSize: "20px",
    },
});

initDev();

setTranslate((s) => (s[0] || "").toUpperCase() + s.slice(1));

view()
    .add([
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
            ele("h2").add("bind"),
            a("./testBind/test.html").add(p("test bind")),
        ]),
        view().add([
            ele("h2").add("style"),
            a("./testStyle/test.html").add(p("test style")),
        ]),
        view().add([
            ele("h2").add("trackPoint"),
            a("./testTrackPoint/test.html").add(p("test trackPoint")),
        ]),
        view().add([
            ele("h2").add("animate"),
            a("./testAnimate/test.html").add(p("test animate")),
        ]),
        view().add([
            ele("h2").add("todo MVC"),
            a("./todoMVC/main.html").add(p("todo")),
        ]),
    ])
    .addInto();
