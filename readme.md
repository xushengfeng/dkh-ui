# dkh-ui

## 简介（introduction）

一个渐进式 ui 框架

是一个 ts 库，无须学习新的语法，更无须学习 jsx，也不需要编译，零配置。

受 jq、swiftUI 启发，使用链式调用：

```ts
view("x")
    .add([input("number"), button().add(txt("+"))])
    .style({ gap: "4px" });
```

为所有文字和 alt 属性添加 i18n 支持。CSS in JS 支持类型提示。

## 安装（installation）

```bash
npm i dkh-ui
```

```js
import { view, txt } from "dkh-ui";
```

```html
<script src="./dist/.umd.js"></script>
<script></script>
```

## 更多介绍

### 布局

object 形式生成 HTML 布局

```ts
const f = frame("example", {
    _: view(),
    title: ele("h1").add(txt("Hi")),
    input: {
        _: view("x"),
        name: input("name"),
        b: button(txt("+")),
    },
    end: p("thanks!"),
});
f.el.addInto();
```

=>

```html
<div id="example">
    <h1 id="example_title">Hi</h1>
    <div id="example_input" style="display:flex">
        <input id="example_name" name="name" /><button id="example_b"><span>+</span></button>
    </div>
    <p id="example_end">thanks!</p>
</div>
```

通过 object 键命运元素 id，同时可在代码中调用：

```ts
f.els.name.attr({ placeholder: "请输入你的名字" }); // 即使在obj深层也能引用，支持ts类型提示
```

### 事件绑定

仍使用传统的手动直接操控数据显示。dkh-ui 只是提供了原生 js dom 操作的抽象。

```ts
let i = 0;
const span = document.createElement("span");
function update(t: string) {
    span.innerText = `${t} days`;
}
update(i);
button.onclick = () => {
    i++;
    update(i);
};
```

=>

```ts
let i = 0;
const span = txt()
    .bindSet((v, el) => (el.innerText = `${v} days`))
    .sv(i);
button.on("click", () => {
    i++;
    span.sv(i);
});
```

如你所见，这与原生没有太大区别，少了一个函数的命名，使用匿名函数挂到元素的`sv`上，但语义更明显了，可以明确知道操作作用在哪个函数。

注意，`sv`必须在`bindSet`返回的元素后面，因为`bindSet`和`bindGet`无副作用，不更改原先变量，而是返回一个简单拷贝。

```ts
const span = txt();
const spanEv = span.bindSet(() => {
    log("ok");
});
span.sv(0); // 无效
spanEv.sv(0); // "ok"
```

可见，dhk-ui 与命令式编程存在区别，函数式调用存在类似于作用域的效果，如果你熟悉 Array 操作，这可以类比：

```ts
const span = txt();
const list = [];

span.add(a("https://...")); //attr style on 等类似命令式，已经更改元素属性
list.push(1);

span.bindSet(() => {}).sv(0);
list.map((i) => i).filter(() => {});
```

通过类型提示，你可以直接在编辑器提示中看到要求的类型。

```ts
const span = txt()
    .bindSet((v: number[], el) => {
        el.innerText = v.join(",");
    }) // sv 可以提示输入为number[]
    .bindGet((el) => el.innerText.split(",").map(Number));
span.gv; // 提示类型为number[]
```

### 减少`null` `undefined` `[object Object]`显示

通过类型检查限制和过滤，ui 上尽量减少上述意外文字的生成。

### radio 单选

`input[type=radio]`和导航栏 tab 等都是单选

```ts
const r = radioGroup("r");
r.new("a"); // 新建value="a"的txt
r.new("b", image("...", "b image")); // 新建value="b"，内容为img的元素
r.get();
r.set("b");
r.on(() => {
    log(r.get());
});
```
