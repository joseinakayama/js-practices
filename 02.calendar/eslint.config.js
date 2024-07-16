import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    languageOptions: { globals: globals.nodeBuiltin },
    env: {
      node: true, // node の環境変数を追加
    },
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
];
