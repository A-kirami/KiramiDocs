import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem'
import DocNavbarItem from '@theme/NavbarItem/DocNavbarItem'
import DocSidebarNavbarItem from '@theme/NavbarItem/DocSidebarNavbarItem'
import DocsVersionDropdownNavbarItem from '@theme/NavbarItem/DocsVersionDropdownNavbarItem'
import DocsVersionNavbarItem from '@theme/NavbarItem/DocsVersionNavbarItem'
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem'
import HtmlNavbarItem from '@theme/NavbarItem/HtmlNavbarItem'
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem'
import SearchNavbarItem from '@theme/NavbarItem/SearchNavbarItem'

import NavbarShop from '@site/src/theme/NavbarItem/NavbarShop'
import NavbarSponsor from '@site/src/theme/NavbarItem/NavbarSponsor'

import type { ComponentTypesObject } from '@theme/NavbarItem/ComponentTypes'

// https://github.com/facebook/docusaurus/issues/7227
const ComponentTypes: ComponentTypesObject = {
  default: DefaultNavbarItem,
  localeDropdown: LocaleDropdownNavbarItem,
  search: SearchNavbarItem,
  dropdown: DropdownNavbarItem,
  html: HtmlNavbarItem,
  doc: DocNavbarItem,
  docSidebar: DocSidebarNavbarItem,
  docsVersion: DocsVersionNavbarItem,
  docsVersionDropdown: DocsVersionDropdownNavbarItem,
  'custom-shop': NavbarShop,
  'custom-sponsor': NavbarSponsor,
}

export default ComponentTypes
