import { createConfig } from "@invisionag/tailwind";

const baseConfig = createConfig();

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  content: ["./src/public/**/*.{html,tsx}"],
  //corePlugins: {
  //preflight: false,
  //},
};
