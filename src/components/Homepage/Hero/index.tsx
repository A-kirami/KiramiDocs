import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import clsx from 'clsx'

import styles from './styles.module.css'

function HeroBackground() {
  return (
    <div id="bg-wrap">
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
            <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate>
            <stop offset="0%" stopColor="rgba(255, 0, 255, 1)"></stop>
            <stop offset="100%" stopColor="rgba(255, 0, 255, 0)"></stop>
          </radialGradient>
          <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
            <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
            <stop offset="0%" stopColor="rgba(255, 255, 0, 1)"></stop>
            <stop offset="100%" stopColor="rgba(255, 255, 0, 0)"></stop>
          </radialGradient>
          <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
            <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
            <stop offset="0%" stopColor="rgba(0, 255, 255, 1)"></stop>
            <stop offset="100%" stopColor="rgba(0, 255, 255, 0)"></stop>
          </radialGradient>
          <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5">
            <animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate>
            <stop offset="0%" stopColor="rgba(0, 255, 0, 1)"></stop>
            <stop offset="100%" stopColor="rgba(0, 255, 0, 0)"></stop>
          </radialGradient>
          <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5">
            <animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate>
            <stop offset="0%" stopColor="rgba(0,0,255, 1)"></stop>
            <stop offset="100%" stopColor="rgba(0,0,255, 0)"></stop>
          </radialGradient>
          <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5">
            <animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate>
            <stop offset="0%" stopColor="rgba(255,0,0, 1)"></stop>
            <stop offset="100%" stopColor="rgba(255,0,0, 0)"></stop>
          </radialGradient>
        </defs>
        <rect
          x="13.744%"
          y="1.18473%"
          width="100%"
          height="100%"
          fill="url(#Gradient1)"
          transform="rotate(334.41 50 50)"
        >
          <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate>
          <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="7s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
        <rect
          x="-2.17916%"
          y="35.4267%"
          width="100%"
          height="100%"
          fill="url(#Gradient2)"
          transform="rotate(255.072 50 50)"
        >
          <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate>
          <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="12s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
        <rect
          x="9.00483%"
          y="14.5733%"
          width="100%"
          height="100%"
          fill="url(#Gradient3)"
          transform="rotate(139.903 50 50)"
        >
          <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate>
          <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 50 50"
            to="0 50 50"
            dur="9s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
      </svg>
    </div>
  )
}

export default function HomepageHero() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx(styles.heroBanner)}>
      <HeroBackground />
      <div className="absolute z-9 h-full w-full flex flex-col items-center justify-center gap-3 backdrop-blur-60">
        <h1 className="hero__title font-size-18">
          {' '}
          <span className="heading-line heading-line-first">
            <span className="heading-line-gradient">{siteConfig.title}</span>
          </span>
        </h1>
        <h2 className="hero__subtitle font-size-18">
          <span className="heading-line heading-line-second">
            <span className="heading-line-gradient">简明轻快的</span>
          </span>
        </h2>
        <h2 className="hero__subtitle font-size-18">
          <span className="heading-line heading-line-third">
            <span className="heading-line-gradient">聊天机器人应用</span>
          </span>
        </h2>
        <div className={styles.buttons}>
          <Link className="button--secondary button--lg text-white hover:text-white" to="/docs/intro">
            从这里开始 <span className={styles.wave}>👋</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
