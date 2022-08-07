import * as React from 'react'
import { AppNavBar, setItemActive } from 'baseui/app-nav-bar'
import { ChevronDown, Delete, Overflow, Upload } from 'baseui/icon'
import Router from 'next/router'

export default () => {
  const [mainItems, setMainItems] = React.useState([
    { icon: Upload, label: 'Home', path: '/' },
    { icon: ChevronDown, label: 'Example', path: '/examples' }
  ])

  React.useEffect(() => {
    const { pathname } = Router
    const itemIndex = mainItems.findIndex(x => x.path === pathname)
    setMainItems(prev => setItemActive(prev, mainItems[itemIndex]))
  }, [])

  return (
    <AppNavBar
      title="Web3"
      mainItems={mainItems}
      onMainItemSelect={item => Router.push(item.path)}
    />
  )
}
