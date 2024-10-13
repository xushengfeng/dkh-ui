import {
    addStyle,
    view,
    ele,
    pureStyle,
    initDev,
    animate,
    button,
    addClass,
} from "../../src/main";
pureStyle();

addStyle({
    h2: {
        fontWeight: "bold",
        fontSize: "20px",
    },
});

initDev();

const boxClass = addClass(
    { width: "50px", height: "50px", backgroundColor: "red" },
    {},
);

ele("h2").add("play").addInto();

const playEl = view().class(boxClass).addInto();
const play = animate(
    () => ({
        x: playEl.el.offsetLeft,
    }),
    (data) => {
        playEl.style({ marginLeft: `${data.x}px` });
    },
    3000,
);

button("play")
    .on("click", () => {
        play.set({ x: 300 });
    })
    .addInto();

button("reset")
    .on("click", () => {
        play.set({ x: 0 });
    })
    .addInto();

ele("h2").add("打断").addInto();

const interruptEl = view()
    .addInto()
    .class(
        addClass(
            {},
            {
                "&:hover>:nth-child(1)": {
                    marginLeft: "300px",
                },
            },
        ),
    );
const interruptC1 = view()
    .class(boxClass)
    .addInto(interruptEl)
    .style({ transition: "3s linear" });
const interruptC2 = view().class(boxClass).addInto(interruptEl);

const interrupt = animate(
    () => ({
        x: interruptC2.el.offsetLeft,
    }),
    (data) => {
        interruptC2.style({ marginLeft: `${data.x}px` });
    },
    3000,
);

interruptEl.on("mouseenter", () => {
    interrupt.set({ x: 300 }, (t) => 1 - t);
});
interruptEl.on("mouseleave", () => {
    interrupt.set({ x: 0 }, (t) => 1 - t);
});
