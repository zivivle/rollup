/**
 * Rollup 설정 모듈
 *
 * @author RWB
 * @since 2022.06.06 Mon 17:44:31
 */

import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

import pkg from "./package.json" assert { type: "json" };

const extensions = [".js", ".jsx", ".ts", ".tsx", ".mjs"];

const config = [
  {
    external: [/node_modules/],
    input: "./src/index.ts",
    output: [
      {
        dir: "dist",
        format: "cjs",
        preserveModules: true,
        preserveModulesRoot: "src",
        sourcemap: true,
      },
      {
        dir: "dist",
        format: "es",
        preserveModules: true,
        preserveModulesRoot: "src",
        sourcemap: true,
      },
      {
        name: pkg.name,
        file: "./dist/index.umd.js",
        format: "umd",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tslib: "tslib",
        },
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve({ extensions }),
      babel({
        exclude: "node_modules/**",
        extensions,
        babelHelpers: "bundled",
        include: ["src/**/*"],
      }),
      commonjs({ include: "node_modules/**" }),
      peerDepsExternal(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extract: true,
        modules: false,
        sourceMap: true,
        use: ["sass"],
      }),
    ],
  },
];

export default config;
