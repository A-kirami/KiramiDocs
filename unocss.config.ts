import { defineConfig, presetUno, presetAttributify, presetIcons, transformerDirectives } from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
  },
  presets: [presetUno({ dark: { dark: '[data-theme="dark"]' } }), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives()],
})
