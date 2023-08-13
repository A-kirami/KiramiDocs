import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import HomepageFeatures from '@site/src/components/Homepage/Features'
import HomepageHero from '@site/src/components/Homepage/Hero'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title="星见" description={siteConfig.tagline}>
      <HomepageHero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
