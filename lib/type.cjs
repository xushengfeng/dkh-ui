const fs = require("fs");
const css = JSON.parse(fs.readFileSync("CSSProperties.json").toString());

let cssType = "";
cssType += "export { css };\ntype css = {";
for (let i in css.pv) {
    cssType += `"${i}"?: `;
    cssType += css.pv[i].values.map(i=>`"${i}"`).join(" | ") || "string";
    cssType += ",\n";
}
cssType += "}\n";

fs.writeFileSync('../src/type.ts',cssType)