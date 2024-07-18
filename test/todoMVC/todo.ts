import { button, check, ele, frame, image, input, radioGroup, txt, view } from "../../src/main";

let data: { id: string; content: string; active: boolean }[] = [];

let filter: "all" | "active" | "completed" = "all";

function filterData() {
    if (filter === "all") return data;
    if (filter === "active") return data.filter((i) => i.active);
    if (filter === "completed") return data.filter((i) => !i.active);
}

function getData(id: string) {
    return data.find((i) => i.id === id);
}

function item(i: string) {
    const d = getData(i);
    const fr = frame("item", {
        0: view("x"),
        check: check("finished").sv(!d.active),
        t: input("content").attr({ readOnly: true, value: d.content }),
        close: button(),
    });
    fr.els.check.on("input", (_, el) => {
        const item = getData(i);
        item.active = !el.gv();

        list.sv(filterData());
        tools.els.count.sv("");
    });
    fr.els.close.on("click", () => {
        data = data.filter((item) => item.id != i);
        fr.el.el.remove();

        list.sv(filterData());
        tools.els.count.sv("");
    });
    return fr;
}

const filterEl = radioGroup("filter");

const tools = frame("tools", {
    0: view("x"),
    count: txt("").bindSet((_, el) => (el.innerText = `${data.filter((i) => i.active).length} items left!`)),
    radio: view().add([filterEl.new("all"), filterEl.new("active"), filterEl.new("completed")]),
    clear: button().add(txt("Clear completed")),
});

const inputEl = frame("input", {
    0: view("x"),
    all: button().add(txt("v")),
    add: input("add"),
});

const list = view("y").bindSet((v: typeof data, el) => {
    el.innerHTML = "";
    list.add(v.map((i) => item(i.id).el));
});

inputEl.els.add.on("keydown", (e, el) => {
    if (e.key === "Enter") {
        const id = new Date().getTime().toString();
        data.push({ id, active: true, content: el.gv() as string });
        list.sv(filterData());

        el.sv("");
        tools.els.count.sv("");
    }
});

inputEl.els.all.on("click", () => {
    let fdata = filterData();
    if (fdata.filter((i) => !i.active).length < fdata.length) {
        fdata.forEach((i) => (getData(i.id).active = false));
    } else {
        fdata.forEach((i) => (getData(i.id).active = true));
    }

    list.sv(filterData());
    tools.els.count.sv("");
});

filterEl.on(() => {
    filter = filterEl.get() as typeof filter;
    list.sv(filterData());
});

tools.els.clear.on("click", () => {
    data = data.filter((i) => i.active);

    list.sv(filterData());
    tools.els.count.sv("");
});

document.body.append(view("y", [inputEl.el, list, tools.el]).el);
