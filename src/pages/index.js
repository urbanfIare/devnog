import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import MainContent from '../components/MainContent'

export default function Home() {
  const [showMain, setShowMain] = useState(false)
  const [activeMenu, setActiveMenu] = useState('About') // 초기 메뉴: About

  return (
    <AnimatePresence mode="wait">
      {!showMain ? (
        <Hero key="hero" onEnd={() => setShowMain(true)} />
      ) : (
        <Layout
          key="main"
          showSidebar={true}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        >
          <MainContent activeMenu={activeMenu} />
        </Layout>
      )}
    </AnimatePresence>
  )
}
