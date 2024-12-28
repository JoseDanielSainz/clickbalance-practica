import { useState } from 'react'
import Header from '/src/components/Header.jsx'
import Sidebar from '/src/components/Sidebar.jsx'
import Dashboard from '/src/components/Dashboard.jsx'
import BottomMenu from '/src/components/BottomMenu.jsx'

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev)
  }

  return (
    <>
      <main>
        <Header onHambuergerClick={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} />
        <Dashboard isOpen={isSidebarOpen} />
        <BottomMenu />
      </main>
    </>
  )
}
