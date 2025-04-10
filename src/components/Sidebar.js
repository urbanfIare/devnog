export default function Sidebar({ activeMenu, setActiveMenu }) {
  return (
    <nav className="text-base text-gray-800 font-sans">
      <ul className="space-y-1.5">
        <li
          onClick={() => setActiveMenu('About')}
          className={`cursor-pointer hover:text-blue-500 ${
            activeMenu === 'About' ? 'font-bold text-blue-600' : ''
          }`}
        >
          About
        </li>
        <ul className="pl-4 space-y-1 text-[15px] text-gray-600">
          <li
            onClick={() => setActiveMenu('Blog')}
            className={`cursor-pointer hover:text-blue-400 ${
              activeMenu === 'Blog' ? 'font-semibold text-blue-500' : ''
            }`}
          >
            Blog
          </li>
          <li
            onClick={() => setActiveMenu('Study')}
            className={`cursor-pointer hover:text-blue-400 ${
              activeMenu === 'Study' ? 'font-semibold text-blue-500' : ''
            }`}
          >
            Study
          </li>
        </ul>
      </ul>
    </nav>
  )
}
