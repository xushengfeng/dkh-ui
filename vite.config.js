import { defineConfig } from "vite";
import { resolve } from "path";

const name = "myui";

export default defineConfig({
    // 打包配置
    build: {
        lib: {
            entry: resolve(__dirname, "src/main.ts"),
            name: name,
            fileName: (format) => `${name}.${format}.js`,
        },
    },
});
