import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
} from "unocss";
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  content: {
    filesystem: [
      '**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
    ]
  },
  presets: [presetUno(), presetUno(), presetAttributify(), presetIcons ()],
  transformers: [transformerDirectives()],
});
