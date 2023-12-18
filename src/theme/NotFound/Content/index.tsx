import Link from '@docusaurus/Link'
import clsx from 'clsx'

import type { Props } from '@theme/NotFound/Content'

export default function NotFoundContent({ className }: Props): JSX.Element {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="mt-1/5 h-full flex flex-col items-center justify-center gap-8">
        <div className="text-5xl text-gray-400"></div>
        <div className="text-5xl font-extrabold">什么也没有</div>
        <div className="text-2xl text-gray-400">似乎来到了空无一物的荒漠</div>
        <Link to="/" className="rounded-lg bg-blue-400 px-3 py-1 text-light hover:text-white">
          回到首页
        </Link>
      </div>
    </main>
  )
}
