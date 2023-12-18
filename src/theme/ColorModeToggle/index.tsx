import { translate } from '@docusaurus/Translate'
import useIsBrowser from '@docusaurus/useIsBrowser'
import IconDarkMode from '@theme/Icon/DarkMode'
import IconLightMode from '@theme/Icon/LightMode'
import clsx from 'clsx'
import { memo } from 'react'

import styles from './styles.module.css'

import type { ColorMode } from '@docusaurus/theme-common'
import type { Props } from '@theme/ColorModeToggle'
import type { MouseEvent } from 'react'

// NOTE: 主题切换过渡动画
interface IDocument extends Document {
  startViewTransition(callback: () => void): { ready: Promise<void> }
}

function enableTransitions(): boolean {
  return 'startViewTransition' in document && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
}

async function toggleAppearance(
  { clientX: x, clientY: y }: MouseEvent<HTMLButtonElement>,
  theme: ColorMode,
  onChange: (colorMode: ColorMode) => void
): Promise<void> {
  const isDark = theme === 'dark'

  if (!enableTransitions()) {
    onChange(isDark ? 'light' : 'dark')
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`,
  ]

  await (document as IDocument).startViewTransition(async () => {
    onChange(isDark ? 'light' : 'dark')
    await new Promise((resolve) => setTimeout(resolve))
  }).ready

  document.documentElement.animate(
    { clipPath: isDark ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark ? 'old' : 'new'}(root)`,
    }
  )
}

function ColorModeToggle({ className, buttonClassName, value, onChange }: Props): JSX.Element {
  const isBrowser = useIsBrowser()

  const title = translate(
    {
      message: 'Switch between dark and light mode (currently {mode})',
      id: 'theme.colorToggle.ariaLabel',
      description: 'The ARIA label for the navbar color mode toggle',
    },
    {
      mode:
        value === 'dark'
          ? translate({
              message: 'dark mode',
              id: 'theme.colorToggle.ariaLabel.mode.dark',
              description: 'The name for the dark color mode',
            })
          : translate({
              message: 'light mode',
              id: 'theme.colorToggle.ariaLabel.mode.light',
              description: 'The name for the light color mode',
            }),
    }
  )

  return (
    <div className={clsx(styles.toggle, className)}>
      <button
        className={clsx('clean-btn', styles.toggleButton, !isBrowser && styles.toggleButtonDisabled, buttonClassName)}
        type="button"
        onClick={(event) => toggleAppearance(event, value, onChange)}
        disabled={!isBrowser}
        title={title}
        aria-label={title}
        aria-live="polite"
      >
        <IconLightMode className={clsx(styles.toggleIcon, styles.lightToggleIcon)} />
        <IconDarkMode className={clsx(styles.toggleIcon, styles.darkToggleIcon)} />
      </button>
    </div>
  )
}

export default memo(ColorModeToggle)
