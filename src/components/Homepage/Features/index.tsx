import clsx from 'clsx'

import styles from './styles.module.css'

type FeatureItem = {
  icon: string
  title: string
  description: JSX.Element
  className?: string
}

const FeatureList: FeatureItem[] = [
  {
    icon: 'i-ri:box-1-line',
    title: '开箱即用',
    description: <>简单易用，无需复杂配置，初次接触也可轻松上手。</>,
  },
  {
    icon: 'i-ri:plug-2-line',
    title: '插件管理',
    description: <>非侵入式的插件管理系统，支持更细粒度的功能与服务控制。</>,
    className: 'card__orange',
  },
  {
    icon: 'i-ri:admin-line',
    title: '权限控制',
    description: <>支持多种权限控制方式，可自定义权限控制策略。</>,
    className: 'card__green',
  },
  {
    icon: 'i-ri:checkbox-blank-circle-line',
    title: '生态兼容',
    description: <>兼容 NoneBot2 原生插件，无需修改即可使用，无缝迁移项目。</>,
    className: 'card__red',
  },
  {
    icon: 'i-ri:battery-charge-line',
    title: '内置电池',
    description: <>丰富的内置功能，导入即用，为开发提供强劲动力。</>,
    className: 'card__yellow',
  },
  {
    icon: 'i-ri:file-code-line',
    title: '开发友好',
    description: <>简洁流畅的 API，更低的心智负担与学习成本。</>,
    className: 'card__purple',
  },
]

function Feature({ title, icon, description, className }: FeatureItem) {
  return (
    <div className={clsx('col col--4 mbe-8')}>
      <article className={clsx('card__article', className)}>
        <div className="card__scale">
          <div className="card__scale-1"></div>
          <div className="card__scale-2"></div>
          <div className="card__shape-1">
            <div className="card__shape-2"></div>
            <div className="card__shape-3">
              <i className={clsx('card__icon', icon)}></i>
            </div>
          </div>
        </div>
        <div className="card__data">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
        </div>
      </article>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
