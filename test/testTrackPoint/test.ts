import {
    addStyle,
    view,
    ele,
    pureStyle,
    initDev,
    animate,
    button,
    addClass,
    trackPoint,
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
    {
        width: "50px",
        height: "50px",
        backgroundColor: "red",
        position: "relative",
    },
    {},
);

const b = view().class(boxClass).addInto();

trackPoint(b, {
    start: () => {
        return { x: b.el.offsetLeft, y: b.el.offsetTop };
    },
    ing: ({ x, y }) => {
        b.el.style.left = `${x}px`;
        b.el.style.top = `${y}px`;
        return { x, y };
    },
    end: (_, { moved, ingData }) => {
        if (moved) {
            console.log("moved", ingData.x, ingData.y);
        } else {
            ingData; // undefined
        }
    },
});

const b2 = view()
    .class(boxClass)
    .addInto()
    .on("click", () => {
        console.log("click");
    })
    .on("pointerdown", () => {
        console.log("pointerdown");
    })
    .on("pointerup", () => {
        console.log("pointerup");
    });

trackPoint(b2, {
    start: (e) => {
        if (e.ctrlKey) return { x: b2.el.offsetLeft, y: b2.el.offsetTop };
        return null;
    },
    ing: ({ x, y }) => {
        b2.el.style.left = `${x}px`;
        b2.el.style.top = `${y}px`;
    },
});
