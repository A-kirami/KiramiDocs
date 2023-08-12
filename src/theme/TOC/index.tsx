import React from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import type {Props} from '@theme/TOC';
import EditThisPage from '@theme/EditThisPage';
import {useDoc} from '@docusaurus/theme-common/internal';

import styles from './styles.module.css';

// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';

export default function TOC({className, ...props}: Props): JSX.Element {
  const {metadata} = useDoc()
  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}>
      {/* NOTE: 为目录添加文档标题 */}
      <h2 className='mb-2 text-base text-slate-400'>内容目录</h2>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
      <hr className='my-4' />
      <div className='extra-action font-semibold text-sm ml-2'>
        {/* NOTE: 添加编辑链接 */}
        <EditThisPage editUrl={metadata.editUrl} />
      </div>
    </div>
  );
}
