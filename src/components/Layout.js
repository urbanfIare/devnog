import Sidebar from './Sidebar'

export default function Layout({ children, showSidebar, activeMenu, setActiveMenu }) {
  return (
    <div className="flex w-screen h-screen overflow-hidden font-sans">
      {showSidebar && (
        <aside className="w-64 p-6 overflow-y-auto border-r border-gray-200">
          <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </aside>
      )}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  )
}
