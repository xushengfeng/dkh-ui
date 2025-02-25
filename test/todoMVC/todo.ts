import {
    a,
    button,
    check,
    ele,
    frame,
    input,
    p,
    txt,
    view,
} from "../../src/main";

const dbName = "todos-dkh-ui";

let data: { id: string; title: string; completed: boolean }[] = [];

let filter: "all" | "active" | "completed" = "all";

function filterData() {
    if (filter === "all") return data;
    if (filter === "active") return data.filter((i) => !i.completed);
    if (filter === "completed") return data.filter((i) => i.completed);
    return [];
}

function getData(id: string) {
    return data.find((i) => i.id === id) as (typeof data)[0];
}

function saveData() {
    localStorage.setItem(dbName, JSON.stringify(data));
}

function item(i: string) {
    const d = getData(i);
    const fr = frame("item", {
        _: ele("li").class(d.completed ? "completed" : ""),
        _view: {
            _: view().class("view"),
            check: check("finished").sv(d.completed).class("toggle"),
            t: ele("label")
                .bindSet((v: string, el) => {
                    el.innerText = v;
                })
                .sv(d.title),
            close: button().class("destroy"),
        },
        edit: input().class("edit"),
    });
    fr.els.check.on("input", (_, el) => {
        const item = getData(i);
        item.completed = el.gv;
        list.sv(filterData());
        tools.els.count.sv("");
    });
    fr.els.t.on("dblclick", () => {
        fr.els.edit.sv(d.title);
        fr.el.class("editing");
        fr.els.edit.el.focus();
    });
    fr.els.edit.on("blur", () => {
        saveTitle(fr.els.edit.gv);
    });
    fr.els.edit.on("keydown", (e, el) => {
        if (e.key === "Enter") {
            saveTitle(el.gv);
        }
        if (e.key === "Escape") {
            saveTitle(d.title);
        }
    });
    function saveTitle(t: string) {
        d.title = t;
        fr.els.t.sv(d.title);
        fr.el.el.classList.remove("editing");
        if (t.trim() === "") remove();
    }
    function remove() {
        data = data.filter((item) => item.id !== i);
        saveData();
        fr.el.el.remove();

        list.sv(filterData());
        tools.els.count.sv("");
    }
    fr.els.close.on("click", () => {
        remove();
    });
    return fr;
}

const tools = frame("tools", {
    _: ele("footer").class("footer"),
    count: txt("")
        .bindSet((_, el) => {
            const n = data.filter((i) => !i.completed).length;
            el.innerText = `${n} ${n === 1 ? "item" : "items"} left!`;
        })
        .class("todo-count"),
    radio: ele("ul")
        .class("filters")
        .add([
            ele("li")
                .add(a("#/all", true).add("all").class("selected"))
                .on("click", () => setFilter("all")),
            ele("li")
                .add(a("#/active", true).add("active"))
                .on("click", () => setFilter("active")),
            ele("li")
                .add(a("#/completed", true).add("completed"))
                .on("click", () => setFilter("completed")),
        ]),
    clear: button("Clear completed").class("clear-completed"),
});

function setFilter(f: "all" | "active" | "completed") {
    tools.els.radio.query(".selected")?.el.classList.remove("selected");
    tools.els.radio.query(`[href="#/${f}"]`)?.el.classList.add("selected");
    filter = f;
    list.sv(filterData());
}

const list = ele("ul")
    .bindSet((v: typeof data, el) => {
        list.clear();
        list.add(v.map((i) => item(i.id).el));
        if (data.length === 0) {
            mainEl.style({ display: "none" });
            tools.el.style({ display: "none" });
        } else {
            mainEl.style({ display: "block" });
            tools.el.style({ display: "block" });
        }
        if (data.find((i) => i.completed)) {
            tools.els.clear.style({ display: "" });
        } else {
            tools.els.clear.style({ display: "none" });
        }
    })
    .class("todo-list");

tools.els.clear.on("click", () => {
    data = data.filter((i) => !i.completed);
    saveData();

    list.sv(filterData());
    tools.els.count.sv("");
});

const inputEl = input()
    .attr({
        placeholder: "What needs to be done?",
        autofocus: true,
    })
    .class("new-todo")
    .on("keydown", (e, el) => {
        if (e.key === "Enter") {
            const id = new Date().getTime().toString();
            data.push({ id, completed: false, title: el.gv });
            saveData();
            list.sv(filterData());

            el.sv("");
            tools.els.count.sv("");
        }
    });

const mainEl = ele("section").class("main");
const markAll = input("checkbox")
    .class("toggle-all")
    .attr({ id: "toggle-all" })
    .on("click", (_, el) => {
        const fdata = filterData();
        if (fdata.filter((i) => i.completed).length < fdata.length) {
            for (const i of fdata) {
                getData(i.id).completed = true;
            }
        } else {
            for (const i of fdata) {
                getData(i.id).completed = false;
            }
        }
        list.sv(filterData());
        tools.els.count.sv("");
    })
    .addInto(mainEl);
mainEl
    .add(ele("label").class("toggle-all-label").add("Mark all as complete"))
    .add(list);

ele("section")
    .class("todoapp")
    .addInto()
    .add([
        ele("header")
            .class("header")
            .add([ele("h1").add("todos"), inputEl]),
        mainEl,
        tools.el,
    ]);

ele("footer")
    .class("info")
    .addInto()
    .add([
        p("Double-click to edit a todo"),
        p("Written by ").add(
            a("http://github.com/xushengfeng/dkh-ui").add("dkh ui"),
        ),
        p("Part of ").add(a("http://todomvc.com").add("TodoMVC")),
    ]);

try {
    data = JSON.parse(localStorage.getItem(dbName) || "[]");
    list.sv(data);
} catch (error) {
    list.sv([]);
}
