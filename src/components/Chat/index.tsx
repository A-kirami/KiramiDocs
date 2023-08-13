import { useThemeConfig } from '@docusaurus/theme-common'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { clsx } from 'clsx'

interface ChatMessageProps {
  send?: boolean
  content: string
}

function ChatMessage({ send = false, content }: ChatMessageProps): JSX.Element {
  const {
    navbar: { title, logo },
  } = useThemeConfig()
  const fallbackAlt = title || 'Logo'
  const alt = logo?.alt ?? fallbackAlt
  return (
    <div className={clsx('flex gap-3', { 'flex-row-reverse': send })}>
      {send ? (
        <div className="i-ri:account-circle-fill h-10 w-10 rounded-full bg-gray-400 dark:bg-slate-400"></div>
      ) : (
        <div className="h-10 w-10">
          <img src={useBaseUrl(logo.src)} alt={alt} />
        </div>
      )}
      <div
        className={clsx(
          'rounded-b-2 px-2 py-1 mt-3 max-w-3/5 text-slate-600',
          send
            ? 'rounded-l-2 bg-blue-400 text-white dark:bg-slate-300 dark:text-slate-700'
            : 'rounded-r-2 bg-white dark:bg-slate-900 dark:text-slate-400'
        )}
      >
        {content}
      </div>
    </div>
  )
}

export default function Chat({ chats, title }: { chats: ChatMessageProps[]; title?: string }): JSX.Element {
  return (
    <div className="overflow-hidden rounded-2">
      {title && (
        <div className="h-11 flex items-center justify-center bg-blue-400 text-xl text-white dark:bg-slate-300 dark:text-slate-700">
          {title}
        </div>
      )}
      <div className="flex flex-col gap-6 bg-blue-50 px-5 pb-8 pt-6 dark:bg-slate-800">
        {chats.map((chat: ChatMessageProps, index: number) => (
          <ChatMessage key={index} {...chat} />
        ))}
      </div>
    </div>
  )
}
