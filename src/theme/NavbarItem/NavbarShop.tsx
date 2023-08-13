import Link from '@docusaurus/Link'
import clsx from 'clsx'

interface NavbarShopProps {
  position: 'left' | 'right'
  text: string
  href: string
  className?: string
}

export default function NavbarShop({ text, href, ...props }: NavbarShopProps): JSX.Element {
  return (
    <Link className={clsx(props.className, 'navbar-shop', 'navbar-cta')} to={href} {...props}>
      <span>{text}</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 480" width="12" height="12">
        <title>Arrow Forward</title>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="64"
          d="M268 112l144 144-144 144M392 256H100"
        />
      </svg>
    </Link>
  )
}
