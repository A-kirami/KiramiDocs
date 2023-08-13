import { useDoc } from '@docusaurus/theme-common/internal'
import EditThisPage from '@theme/EditThisPage'
import TOCItems from '@theme/TOCItems'
import clsx from 'clsx'

import styles from './styles.module.css'

import type { Props } from '@theme/TOC'

// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight'
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active'

export default function TOC({ className, ...props }: Props): JSX.Element {
  const { metadata } = useDoc()
  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}>
      {/* NOTE: 为目录添加文档标题 */}
      <h2 className="mb-2 text-base text-slate-400">内容目录</h2>
      <TOCItems {...props} linkClassName={LINK_CLASS_NAME} linkActiveClassName={LINK_ACTIVE_CLASS_NAME} />
      <hr className="my-4" />
      <div className="extra-action ml-2 text-sm font-semibold">
        {/* NOTE: 添加编辑链接 */}
        <EditThisPage editUrl={metadata.editUrl} />
      </div>
    </div>
  )
}
