import {
    addStyle,
    view,
    txt,
    ele,
    a,
    setTranslate,
    pureStyle,
    p,
    initDev,
    type ElType,
    noI18n,
    spacer,
    image,
    button,
    input,
    textarea,
    check,
    select,
    table,
    label,
    radioGroup,
    pText,
} from "../../src/main";
import assert from "../lib/assert";
pureStyle();

addStyle({
    h2: {
        fontWeight: "bold",
        fontSize: "20px",
    },
});

initDev();

function assertContent(el: ElType<HTMLElement>, expected: string) {
    assert(el, expected, (el) => el.el.innerText);
}
function assertHTML(el: ElType<HTMLElement>, expected: string) {
    assert(el, expected, (el) => el.el.outerHTML);
}

ele("h2").add("i18n").addInto();

setTranslate((s) => (s[0] || "").toUpperCase() + s.slice(1));

assertContent(txt("hello world"), "Hello world");
assertContent(p("this is a paragraph"), "This is a paragraph");
assertContent(txt("hello world", true), "hello world");
assertContent(txt(noI18n("hello world")), "hello world");
assertContent(view().add("test"), "Test");
assertContent(view().add(noI18n("test")), "test");
assertContent(
    txt()
        .bindSet((v: string, el, t) => {
            el.innerText = t(v);
        })
        .sv("bindSet trans"),
    "BindSet trans",
);
assertHTML(
    p("this is a paragraph\nwith line break", true),
    "<p>this is a paragraph\nwith line break</p>",
);
assertHTML(
    pText("this is a paragraph\nwith line break", true),
    "<p>this is a paragraph<br>with line break</p>",
);
assertHTML(image("./test.png", "image"), '<img src="./test.png" alt="Image">');
assertHTML(
    textarea("textarea placeholder i18n"),
    '<textarea placeholder="Textarea placeholder i18n"></textarea>',
);
assertHTML(
    select([
        { value: "option1", name: "option1" },
        { value: "option2" },
        { value: "option3", name: noI18n("option3") },
    ]),
    '<select><option value="option1">Option1</option><option value="option2">Option2</option><option value="option3">option3</option></select>',
);
assertHTML(table([["table"]]), "<table><tr><td>Table</td></tr></table>");

setTranslate((s) => s);

ele("h2").add("els").addInto();

assertHTML(ele("div"), "<div></div>");
assertHTML(
    ele("div")
        .attr({ id: "test", className: "testClass" })
        .add("test")
        .add(txt("test")),
    '<div id="test" class="testClass">test<span>test</span></div>',
);
assertHTML(txt("test"), "<span>test</span>");
assertHTML(p("test"), "<p>test</p>");
assertHTML(
    a("https://github.com").add("github"),
    '<a href="https://github.com" target="_blank">github</a>',
);
assertHTML(a("github.com", true), '<a href="github.com"></a>');
assertHTML(view(), "<div></div>");
assertHTML(view().add("view"), "<div>view</div>");
assertHTML(view("x"), '<div style="display: flex; flex-flow: row;"></div>');
assertHTML(view("y"), '<div style="display: flex; flex-flow: column;"></div>');
assertHTML(spacer(), '<div style="flex-grow: 1;"></div>');
assertHTML(image("./test.png", "image"), '<img src="./test.png" alt="image">');
assertHTML(button(), "<button></button>");
assertHTML(button("button"), "<button>button</button>");
assertHTML(
    button(txt("button text")),
    "<button><span>button text</span></button>",
);
assertHTML(input(), '<input type="text">');
assertHTML(input("text"), '<input type="text">');
assertHTML(input("number"), '<input type="number">');
assertHTML(input("checkbox"), '<input type="checkbox">');
assertHTML(input("radio"), '<input type="radio">');
assertHTML(textarea(), "<textarea></textarea>");
assertHTML(
    textarea("textarea"),
    '<textarea placeholder="textarea"></textarea>',
);
assertHTML(check("checkbox"), '<input name="checkbox" type="checkbox">');
assertHTML(
    check("checkbox", [txt("true"), "false"]),
    '<div><span style="display: none;">true</span><span>false</span></div>',
);
assertHTML(select([]), "<select></select>");
assertHTML(
    select([
        { value: "option1", name: "option1" },
        { value: "option2", name: "" },
        { value: "option3" },
    ]),
    '<select><option value="option1">option1</option><option value="option2"></option><option value="option3">option3</option></select>',
);
assertHTML(
    label([check("label checkbox")]),
    '<label><input name="label checkbox" type="checkbox"></label>',
);
assertHTML(
    label([check("label checkbox"), "label text", txt("label text2")]),
    '<label><input name="label checkbox" type="checkbox">label text<span>label text2</span></label>',
);
assertHTML(
    label([check("label checkbox"), "label text", txt("label text2")], 1),
    '<label>label text<input name="label checkbox" type="checkbox"><span>label text2</span></label>',
);
const radio = radioGroup("radio");
assertHTML(
    radio.new("radio1", "radio1"),
    '<label><input type="radio" name="radio" value="radio1" style="display: none;">radio1</label>',
);
assertHTML(
    radio.new("radio2"),
    '<label><input type="radio" name="radio" value="radio2" style="display: none;">radio2</label>',
);
assertHTML(
    radio.new("radio3", undefined, true),
    '<label><input type="radio" name="radio" value="radio3">radio3</label>',
);
const radio1 = radioGroup("radio1", true);
txt("radio show input").addInto();
assertHTML(
    radio1.new("radio1", "default"),
    '<label><input type="radio" name="radio1" value="radio1">default</label>',
);
assertHTML(
    radio1.new("radio2", "hide", false),
    '<label><input type="radio" name="radio1" value="radio2" style="display: none;">hide</label>',
);
assertHTML(
    radio1.new("radio3", "force show", true),
    '<label><input type="radio" name="radio1" value="radio3">force show</label>',
);
assertHTML(table([]), "<table></table>");
assertHTML(
    table([["1", "2", "3"], ["4"], ["5", "6"], [view().add("7")]]),
    "<table><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>4</td></tr><tr><td>5</td><td>6</td></tr><tr><td><div>7</div></td></tr></table>",
);
// todo null undefined
assertHTML(
    table(
        [
            ["1", "2", "3"],
            ["4", "5", "6"],
        ],
        { col: true },
    ),
    "<table><tr><th>1</th><th>2</th><th>3</th></tr><tr><td>4</td><td>5</td><td>6</td></tr></table>",
);
assertHTML(
    table(
        [
            ["1", "2", "3"],
            ["4", "5", "6"],
        ],
        { row: true },
    ),
    "<table><tr><th>1</th><td>2</td><td>3</td></tr><tr><th>4</th><td>5</td><td>6</td></tr></table>",
);
assertHTML(
    table(
        [
            ["1", "2", "3"],
            ["4", "5", "6"],
        ],
        { row: true, col: true },
    ),
    "<table><tr><th>1</th><th>2</th><th>3</th></tr><tr><th>4</th><td>5</td><td>6</td></tr></table>",
);

ele("h2").add("add data attr class clear").addInto();
assertHTML(
    // @ts-ignore
    view().add(["1", txt("2"), null, undefined, 0, false, {}, [], "3"]),
    "<div>1<span>2</span>3</div>",
);
assertHTML(view().attr({ id: "test" }), '<div id="test"></div>');
assertHTML(
    view().attr({ className: "testClass" }),
    '<div class="testClass"></div>',
);
assertHTML(
    view().attr({ className: "testClass" }).attr({ className: "" }),
    '<div class=""></div>',
);
assertHTML(
    view().attr({ className: "testClass" }).attr({ className: undefined }),
    "<div></div>", // todo filter undefined
);
assertHTML(view().data({ id: "test" }), '<div data-id="test"></div>');
assertHTML(
    view().data({ id: "test", name: "test" }),
    '<div data-id="test" data-name="test"></div>',
);
assertHTML(
    view().data({ name: "test" }).data({ name: "test2" }),
    '<div data-name="test2"></div>',
);
assertHTML(
    view().data({ name: "test" }).data({ name: undefined }),
    "<div></div>",
);
assertHTML(view().data({ name: "test" }).data({ name: null }), "<div></div>");
assertHTML(view().class("testClass"), '<div class="testClass"></div>');
assertHTML(
    view().class("testClass").class("testClass2"),
    '<div class="testClass testClass2"></div>',
);
assertHTML(
    // @ts-ignore
    view().class("test", "", "test1", "test x", "  testn ", "test测试"),
    '<div class="test test1 testn test测试"></div>',
);
assertHTML(
    // @ts-ignore
    view().class("test", null, undefined, 0, false, {}, []),
    '<div class="test"></div>',
);
assertHTML(view().add("test1").add(view().add("test2")).clear(), "<div></div>");
