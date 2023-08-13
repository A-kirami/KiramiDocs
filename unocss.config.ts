import presetIcons from '@unocss/preset-icons'
import { defineConfig, presetAttributify, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
  },
  presets: [presetUno(), presetUno(), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives()],
})
